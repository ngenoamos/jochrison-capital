import { VercelRequest, VercelResponse } from '@vercel/node';
import pg from 'pg';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'DELETE') return res.status(405).send('Method Not Allowed');

  const { id } = req.body;
  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const client = await pool.connect();
    await client.query('DELETE FROM leads WHERE id = $1', [id]);
    client.release();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete lead' });
  }
}