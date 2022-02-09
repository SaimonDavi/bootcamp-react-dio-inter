import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';

const connectionString = process.env.BASE_URL;

const db = new Pool({ connectionString });

export default db;