import express from "express";
import cors from "cors";
import router from "./src/router/router.js";
import sessionHandler from "./src/middleware/sessionHandler.js";

const app = express();
const port = 3030;

app.use(sessionHandler);
const corsOptions = {
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());

app.use("/email", router);

app.listen(port, () => {
  console.log("server listen to port " + port);
});
