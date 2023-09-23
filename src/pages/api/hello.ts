import { AppdataSource } from "@/db/db";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  let a;
  switch (req.method) {
    case "GET":
      return encript(req, res);

    default:
      return res.status(400).json({ name: "John Doe" });
  }
  // const encript = bcrypt.hashSync(password, 10);
}
async function encript(req: NextApiRequest, res: NextApiResponse<Data>) {
  await AppdataSource.initialize();
  return res.status(200).json({ name: "John Doe" });
}
