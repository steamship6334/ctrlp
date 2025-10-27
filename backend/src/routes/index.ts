import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "CtrlP backend is up and running 🚀" });
});

export default router;
