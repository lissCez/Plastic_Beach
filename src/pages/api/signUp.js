export default function handler(req, res) {
    if (req.method === 'POST') {
      const { username, email, password } = req.body;
  
      res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }
  