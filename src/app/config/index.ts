import "dotenv/config";

export default {
  PORT: process.env.PORT,
  URI: process.env.DATABASE_URL,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_KEY,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
  CLOUDINARY_URL: process.env.CLOUDINARY_SECRET,
  SALT_ROUND: process.env.SALT_ROUND,
};
