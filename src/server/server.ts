import * as express from "express";
import router from "./routes";
import { join } from "path";

const app = express();

app.use(express.static("public"));
app.use(router);

app.use((_, res) => res.sendFile(join(__dirname, "../public/index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));