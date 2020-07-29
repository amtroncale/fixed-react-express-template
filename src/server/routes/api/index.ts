import * as express from "express";

const router = express.Router();

router.get("/hello", (_, res) => res.json("World"));

export default router;