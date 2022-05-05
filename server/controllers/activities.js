import ActivityPost from "../models/activityPost.js";

export const getActivities = async (req, res) => {
  try {
    const activityPosts = await ActivityPost.find();

    res.status(200).json(activityPosts);
  } catch (error) {
    res.status(404).json({ message: "error.message" });
  }
};

export const createActivity = async (req, res) => {
  const activity = req.body;

  const newActivity = new ActivityPost(activity);
  try {
    await newActivity.save();

    res.status(201).json(newActivity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
