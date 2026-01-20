import { VercelRequest, VercelResponse } from '@vercel/node';
import pg from 'pg';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  const { Pool } = pg;

  // Uses the DATABASE_URL you just added to Vercel
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const client = await pool.connect();
    // Insert the lead into a table named 'leads'
    const query = 'INSERT INTO leads (name, email, message, created_at) VALUES ($1, $2, $3, NOW())';
    await client.query(query, [name, email, message]);
    client.release();

    return res.status(200).json({ success: true, message: 'Lead saved to Neon' });
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ error: 'Failed to save lead' });
  }
}