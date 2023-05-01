import * as express from "express";
import { StatusCodes } from "http-status-codes";
import * as moment from "moment";

export class BootStrapper {
  main() {
    const PORT = 3030;
    const app = express();

    app.get("/hc", (req, res) => {
      res.status(StatusCodes.OK).json({
        statusCode: StatusCodes.OK,
        data: {},
      });
    });

    app.use((req, res, error) => {
      console.log(error);
      res.status;
    });

    app.listen(PORT, () => {
      console.log(`Listen to port ${PORT}...`);
    });
  }
}
