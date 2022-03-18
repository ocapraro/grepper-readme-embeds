import express from "express";
import { getActivity } from "./grepperHandler.js";
import { activityBox } from "./svgHandler.js";

const app = express();

app.get("/activity", async (req, res) => {
  let name = req.query.name;
  let id = req.query.id;
  let activity = await getActivity(id);
  res.send(activityBox(name,activity));
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log("\x1b[32m%s\x1b[0m",`Server is running on PORT: ${PORT}`);
});