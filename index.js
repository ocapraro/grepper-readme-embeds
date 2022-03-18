import express from "express";
import {router} from "./api/activity.js";

const app = express();
app.use("/api/activity",router)

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log("\x1b[32m%s\x1b[0m",`Server is running on PORT: ${PORT}`);
});