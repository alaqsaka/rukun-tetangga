import mongoose from "mongoose";
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

export const updateActivity = async (req, res) => {
  const { id: _id } = req.params;
  // nilai id didapatkan dari url yang dikirim dari frontend /activities/123 -> idnya 123
  const activity = req.body;

  // mengecek apakah id tersebut adalah id yang disediakan sama mongoose
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Tidak ada kegiatan dengan id tersebut");

  // mencari dan mengubah kegiatan (activity sesuai dengan id yang dikirimkan)
  // nerima dua paramater, id dan data yang mau terupdate kegiatan tersebut
  const updatedActivity = await ActivityPost.findByIdAndUpdate(
    _id,
    { ...activity, _id },
    {
      new: true,
    }
  );

  res.json(updatedActivity);
};
