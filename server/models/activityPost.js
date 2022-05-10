import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  namaKegiatan: String,
  deskripsiKegiatan: String,
  creator: String,
  tanggalKegiatan: String,
  waktuKegiatan: String,
  tempatKegiatan: String,
  selectedFile: [String],
  hadirCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const ActivityPost = mongoose.model("ActivityPost", activitySchema);

export default ActivityPost;
