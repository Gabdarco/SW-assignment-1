// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

type Req = { params: { num: string } };
type Res = { send: (body: string) => unknown };

export default (req: Req, res: Res): void => {
  const numStr: string = req.params.num;
  const num: number = parseInt(numStr, 10);

  const fibN: number = fibonacci(num);

  const result: string =
    fibN < 0
      ? `fibonacci(${num}) is undefined`
      : `fibonacci(${num}) is ${fibN}`;

  res.send(result);
};
