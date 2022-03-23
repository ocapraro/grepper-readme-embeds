import express from "express";
import { getActivity } from "../grepperHandler.js";
import { activityBox } from "../embeds/dailyActivity.js";

export const activity = express.Router();

/**
 * GET user activity.
 *
 * @return user activity | empty.
 */
 activity.get("/", async (req, res) => {
  let name = req.query.name;
  let id = req.query.id;
  let width = req.query.width?req.query.width>425?req.query.width:425:969;
  if(name && id) {
    let activity = await getActivity(id);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(activityBox(name,activity,width));
  }else{
    res.send(null);
  }
});

// module.exports = router;