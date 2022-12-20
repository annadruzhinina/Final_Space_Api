import { Router } from "express";
import * as controllers from "../controllers/charcters.js";

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacter1);
router.post("/", controllers.createCharacters);
router.put("/:id", controllers.updateCharacters);
router.delete("/:id", controllers.deleteCharacters);

export default router;