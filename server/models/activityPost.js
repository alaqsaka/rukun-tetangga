import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  namaKegiatan: String,
  deskripsiKegiatan: String,
  creator: String,
  tanggalKegiatan: Date,
  waktuKegiatan: String,
  tempatKegiatan: String,
  selectedFile: String,
  hadirCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ActivityPost = mongoose.model("ActivityPost", activitySchema);

export default ActivityPost;
