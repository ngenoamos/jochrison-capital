import { VercelRequest, VercelResponse } from '@vercel/node';
import pg from 'pg';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM leads ORDER BY created_at DESC');
    client.release();
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch leads' });
  }
}