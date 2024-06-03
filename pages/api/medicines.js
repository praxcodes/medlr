import { fetchJson } from '../../utils/fetchJson';

export default async function handler(req, res) {
  try {
    const data = await fetchJson();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
