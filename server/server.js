import express from "express";
import cors from "cors";
import router from "./src/router/router.js";
import sessionHandler from "./src/middleware/sessionHandler.js";

const app = express();
const port = 3030;

app.use(sessionHandler);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/email", router);

app.listen(port, () => {
  console.log("server listen to port " + port);
});
