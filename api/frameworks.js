import express from "express";
import { getExpertise } from "../grepperHandler.js";
import { frameworkBox } from "../embeds/mostUsedFrameworks.js";

export const frameworks = express.Router();

/**
 * GET user frameworks.
 *
 * @return user frameworks | empty.
 */
 frameworks.get("/", async (req, res) => {
  let id = req.query.id;
  let width = req.query.width?req.query.width:411;
  if(id) {
    let frameworks = await getExpertise(id, "f");
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(frameworkBox(frameworks,width));
  }else{
    res.send(null);
  }
});

// module.exports = router;