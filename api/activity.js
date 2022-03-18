import express from "express";
import { getActivity } from "../grepperHandler.js";
import { activityBox } from "../svgHandler.js";

export const router = express.Router();

/**
 * GET user activity.
 *
 * @return user activity | empty.
 */
router.get("/", async (req, res) => {
  let name = req.query.name;
  let id = req.query.id;
  if(name & id) {
    let activity = await getActivity(id);
    res.send(activityBox(name,activity));
  }else{
    res.send(null);
  }
});

// module.exports = router;