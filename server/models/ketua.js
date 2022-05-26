import mongoose from "mongoose";
import ActivityPost from "./activityPost.js";
import wargaSchema from "./warga.js";

var WargaSchema = wargaSchema;

const ketuaSchema = mongoose.Schema({
  namaDepan: { type: String, required: true },
  phone: { type: String, required: true },
  namaBelakang: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  alamatRumah: { type: String, required: true },
  jenisKelamin: { type: String, required: true },
  community_id: { type: String, required: true },
  community_nama: { type: String, required: true },
  community_addres: { type: String, required: true },
  warga: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warga",
    },
  ],
  id: { type: String },
});

export default mongoose.model("Ketua", ketuaSchema);
