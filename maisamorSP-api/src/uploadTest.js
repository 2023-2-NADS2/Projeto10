const admin = require('firebase-admin');
const path = require('path');

// Inicialize o Firebase Admin com suas credenciais
admin.initializeApp({
  credential: admin.credential.cert(require('./security/desejos-de-papel-firebase-adminsdk-6j4hr-56f60945e2.json')),
  storageBucket: 'desejos-de-papel.appspot.com'
});

// Função para fazer upload de um arquivo para o Firebase Storage
async function uploadFile(filePath) {
  const bucket = admin.storage().bucket();
  const fileName = path.basename(filePath);

  try {
    await bucket.upload(filePath, {
      destination: fileName
    });
    console.log(`Arquivo ${fileName} enviado com sucesso.`);
  } catch (error) {
    console.error('Erro ao enviar arquivo:', error);
  }
}

// Substitua './caminho/para/sua/imagem.jpg' pelo caminho da imagem que deseja fazer upload
const filePath = './golden.jpeg';
uploadFile(filePath);
