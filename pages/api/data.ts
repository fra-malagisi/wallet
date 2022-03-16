import * as dfd from "danfojs-node";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  const series: dfd.Series = new dfd.Series([1, 3, 5, undefined, 6, 8]);
  series.print();
  series.describe().print();
};
