import express from "express";
import { activity } from "./api/activity.js";
import { frameworks } from "./api/frameworks.js";

const app = express();
app.use("/api/activity",activity);
app.use("/api/frameworks",frameworks);

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log("\x1b[32m%s\x1b[0m",`Server is running on PORT: ${PORT}`);
});