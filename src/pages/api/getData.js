import { openConnection } from '../../db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const connection = await openConnection();
      const result = await connection.execute('SELECT * FROM subscriptions');
      await connection.close();
      
      res.status(200).json(result.rows);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao obter dados do banco de dados.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
