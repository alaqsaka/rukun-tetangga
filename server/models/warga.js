import mongoose from "mongoose";

const wargaSchema = mongoose.Schema({
  namaDepan: { type: String, required: true },
  phone: { type: String, required: true },
  namaBelakang: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  alamatRumah: { type: String, required: true },
  jenisKelamin: { type: String, required: true },
  community_id: { type: String, default: "" },
  id: { type: String },
});

export default mongoose.model("Warga", wargaSchema);
