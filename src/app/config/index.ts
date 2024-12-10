import "dotenv/config";

export default {
  PORT: process.env.PORT,
  URI: process.env.DATABASE_URL,
  ACCESS_KEY: process.env.ACCESS_KEY,
  REFRESH_KEY: process.env.REFRESH_KEY,
  CLOUDINARY_URL: process.env.CLOUDINARY_SECRET,
};
