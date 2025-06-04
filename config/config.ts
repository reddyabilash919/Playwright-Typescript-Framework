import dotenv from 'dotenv';

dotenv.config();

export class Config {
  private static getEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
  }

  static readonly baseUrl: string = Config.getEnv('BASE_URL');
  static readonly email: string = Config.getEnv('EMAIL_ADDRESS');
  static readonly password: string = Config.getEnv('PASSWORD');
}