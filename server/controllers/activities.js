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

export const deleteActivity = async (req, res) => {
  const { id } = req.params;

  // mengecek apakah id tersebut adalah id yang disediakan sama mongoose
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Tidak ada kegiatan dengan id tersebut");

  console.log("delete");
  await ActivityPost.findByIdAndRemove(id);

  res.json({ message: "Kegiatan berhasil dihapus" });
};

export const likeActivity = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  // mengecek apakah id tersebut adalah id yang disediakan sama mongoose
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Tidak ada kegiatan dengan id tersebut");

  const activity = await ActivityPost.findById(id);

  const index = postMessage.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // pushing userid to activity array likes
    activity.likes.push(req.userId);
  } else {
    activity.likes = activity.likes.filter((id) => id !== String(req.userId));
  }

  const updatedActivity = await ActivityPost.findByIdAndUpdate(
    id,
    { likeCount: activity.likeCount + 1 },
    { new: true }
  );

  res.json(updatedActivity);
};
