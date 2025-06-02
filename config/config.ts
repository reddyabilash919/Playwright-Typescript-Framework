import dotenv from 'dotenv';

dotenv.config();

export const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const Config = {
  baseUrl: getEnv("BASE_URL"),
  email: getEnv("EMAIL_ADDRESS"),
  password: getEnv("PASSWORD")
};