import { config } from 'dotenv';
import { resolve } from 'path';

const envPath = resolve(process.cwd(), '.env');

config({ path: envPath });

export const SERPAPI_API_KEY = process.env.SERPAPI_API_KEY;
