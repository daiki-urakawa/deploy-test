import express from "express";
import path from "path";
import fs from "fs";
import glob from "glob";

const app = express();

app.get("/healthcheck", (_req, res) => {
  res.send("ok");
});

// register route from endpoints/**/index.ts
glob(path.resolve(__dirname, "endpoints", "**/*"), (_, files) => {
  files.forEach((file) => {
    if (fs.statSync(file).isFile()) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const router = require(file).router;
      if (router) {
        app.use(router);
      } else {
        throw new Error(`${file} has no exported router.`);
      }
    }
  });
});

const port = process.env.PORT || 3000;

//// 本番用
import { createServer } from "http";
const server = createServer(app);
export const starServer = () => {
  server.listen(port, () => {
    console.log(`listening port ${port}...`);
  });
};
