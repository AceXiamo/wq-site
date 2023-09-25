import { GetBucketParams, GetBucketResult } from "cos-nodejs-sdk-v5";
import getCos from "~/server/cos";

const getFiles = (next?: string): Promise<GetBucketResult> => {
  return new Promise(resolve => {
    const opts: GetBucketParams = {
      Bucket: process.env.COS_BUCKET || "",
      Region: process.env.COS_REGION || "",
      Prefix: "wq/live/",
      Delimiter: "/",
      MaxKeys: 10,
    };
    if (next) {
      opts.Marker = next;
    }
    getCos().getBucket(opts, function (_, data) {
      resolve(data);
    });
  });
};

let fileNums: number | null = null;
const getAllFileNum = (): Promise<number> => {
  return new Promise(resolve => {
    if (fileNums) {
      resolve(fileNums);
    } else {
      getCos().getBucket(
        {
          Bucket: process.env.COS_BUCKET || "",
          Region: process.env.COS_REGION || "",
          Prefix: "wq/live/",
          Delimiter: "/",
          MaxKeys: 1000,
        },
        function (err, data) {
          fileNums = data.Contents?.length;
          resolve(fileNums);
        }
      );
    }
  });
};

const getFilesWithPrefix = (prefix?: string): Promise<GetBucketResult> => {
  return new Promise(resolve => {
    const opts: GetBucketParams = {
      Bucket: process.env.COS_BUCKET || "",
      Region: process.env.COS_REGION || "",
      Prefix: "wq/live/" + prefix,
      Delimiter: "/",
      MaxKeys: 1000,
    };
    getCos().getBucket(opts, function (_, data) {
      resolve(data);
    });
  });
};

export type RecordRes = {
  size?: number;
  next?: string;
  items?: Record[];
};

export type Record = {
  key?: string;
  size?: number;
  begin?: string;
  title?: string;
};

const regex = /\[(.*?)\]/g;

export default defineEventHandler(async event => {
  const query: { prefix: string } = getQuery(event);
  const cosr = await getFilesWithPrefix(query.prefix);
  const result = {
    size: await getAllFileNum(),
    next: cosr.NextMarker,
    items: cosr.Contents.map(v => {
      return {
        key: v.Key,
        size: Number(v.Size),
        begin: "-",
        title: "-",
      };
    }),
  };
  result.items.forEach(item => {
    const match = item.key?.match(regex);
    if (match) {
      const begin = match[0].replace(/\[|\]/g, "");
      item.begin = begin.replace(/_/g, ":");
      item.title = match[1].replace(/\[|\]/g, "");
    }
  });
  return result;
});
