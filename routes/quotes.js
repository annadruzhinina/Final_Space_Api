import { Router } from "express";
import * as controllers from "../controllers/quotes.js";

const router = Router();

router.get("/", controllers.getQuotes);
router.get("/:id", controllers.getQuotes);
router.post("/", controllers.createQuotes);
router.put("/:id", controllers.updateQuotes);
router.delete("/:id", controllers.deleteQuotes);

export default router;