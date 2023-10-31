import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";

cloudinary.config(process.env.CLOUDINARY_URL || "");

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return uploadImage(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

async function saveFile(file: formidable.File): Promise<string> {
  // const data = fs.readFileSync(file.filepath);
  // fs.writeFileSync(`./${file.originalFilename}`, data);
  // fs.unlinkSync(file.filepath);
  // return;
  const { secure_url } = await cloudinary.uploader.upload(file.filepath);
  return secure_url;
}

async function parseFilses(req: NextApiRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      console.log({ err, fields, files });
      if (err) {
        return reject(err);
      }
      const filePath = await saveFile(files.file as formidable.File);
      resolve(filePath);
    });
  });
}

async function uploadImage(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const imageUrl = await parseFilses(req);
    return res.status(200).json({ message: imageUrl });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
