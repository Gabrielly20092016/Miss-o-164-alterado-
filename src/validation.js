
// Se o titulo for uma string, remove os espacos em branco
// Senao, retorna uma string vazia
function normalizeTitle(title) {
  return typeof title === 'string' ? title.trim() : '';
}

//validacao dos dados da tarefa

function validateTaskInput(input) {



  const title = normalizeTitle(input?.title);
  // se titulo estiver vazio, avisa que o titulo e obrigatorio

  if (!title) {
    throw new Error('O titulo da tarefa e obrigatorio.');
  }

  //Se o titulo tiver mais de 120 caracteres , gera um erro
  if (title.length > 120) {
    throw new Error('O titulo deve ter no maximo 120 caracteres.');

  }

  
// Se a descricaoo for uma string, remove os espacos em branco
// Senao, retorna uma string vazia 

  const description = typeof input?.description === 'string'
    ? input.description.trim()
    : '';

  return { valid: true, data: { title, description } };
}

// Exporta as duas funcoes para que elas possam ser usadas em outros arquivos do seu projeto Node.js
module.exports = { normalizeTitle, validateTaskInput };

