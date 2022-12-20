import { Router } from "express";
import quotesRoutes from "./quotes.js";
import charactersRoutes from "./characters.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/quotes", quotesRoutes);
router.use("/characters", charactersRoutes);

export default router;