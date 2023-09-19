import COS, {
  COSOptions,
  GetBucketParams,
  GetBucketResult,
} from "cos-nodejs-sdk-v5";

const options: COSOptions = {
  SecretId: process.env.COS_SECRET_ID || "",
  SecretKey: process.env.COS_SECRET_KEY || "",
};

const cos = new COS(options);
const getFiles = (next?: string): Promise<GetBucketResult> => {
  return new Promise((resolve) => {
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
    cos.getBucket(opts, function (_, data) {
      resolve(data);
    });
  });
};

let fileNums: number | null = null;
const getAllFileNum = (): Promise<number> => {
  return new Promise((resolve) => {
    if (fileNums) {
      resolve(fileNums);
    } else {
      cos.getBucket(
        {
          Bucket: "xiamo-1256935307",
          Region: "ap-hongkong",
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
export default defineEventHandler(async (event) => {
  const query: { next: string } = getQuery(event);
  const cosr = await getFiles(query.next);
  const result = {
    size: await getAllFileNum(),
    next: cosr.NextMarker,
    items: cosr.Contents.map((v) => {
      return {
        key: v.Key,
        size: Number(v.Size),
        begin: "-",
        title: "-",
      };
    }),
  };
  result.items.forEach((item) => {
    const match = item.key?.match(regex);
    if (match) {
      const begin = match[0].replace(/\[|\]/g, "");
      item.begin = begin.replace(/_/g, ":");
      item.title = match[1].replace(/\[|\]/g, "");
    }
  });
  return result;
});
