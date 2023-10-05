import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return addGroupAndStudent(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

function addGroupAndStudent(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body);

  // throw new Error("Function not implemented.");
}
