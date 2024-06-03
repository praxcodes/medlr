import path from 'path';
import fs from 'fs';

export const fetchJson = async () => {
  const filePath = path.join(process.cwd(), 'public/output.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};
