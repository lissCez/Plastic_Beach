const oracledb = require('oracledb');

const dbConfig = {
  user: 'username',
  password: 'password',
  connectString: 'host:port/service_name'
};

async function openConnection() {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('Conexão bem-sucedida!');
    return connection;
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
}

module.exports = {
  openConnection
};
