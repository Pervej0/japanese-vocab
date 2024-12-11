import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
export const upload = multer({ storage: storage });

// Configuration
cloudinary.config({
  cloud_name: "dtkj1sckm",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadCloud = async (file: any) => {
  // Upload an image
  try {
    const uploadResult = await cloudinary.uploader
      .upload(file.path, {
        public_id: file.filename,
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(uploadResult, "xxx");

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url(file.filename, {
      fetch_format: "auto",
      quality: "auto",
      crop: "auto",
      gravity: "auto",
      width: 500,
      height: 500,
    });
    // remove file from upload directory

    fs.unlinkSync(file.path);
    console.log("file removed successfully.");
    console.log(optimizeUrl, "pppppppppp");
  } catch {
    console.log("file removing failed.");
  }
};
