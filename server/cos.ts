import COS, { COSOptions } from "cos-nodejs-sdk-v5";

const options: COSOptions = {
  SecretId: process.env.COS_SECRET_ID || "",
  SecretKey: process.env.COS_SECRET_KEY || "",
};

let cos: COS;

const getCos = () => {
  if (!cos) cos = new COS(options);
  return cos;
};

export default getCos;
