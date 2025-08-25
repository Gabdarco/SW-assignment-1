// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

type Req = { params: { num: string } };
type Res = { send: (msg: string) => void };

export default (req: Req, res: Res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
