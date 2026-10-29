
 // Importa as funcoes normalizeTitle e validateTaskInput
const { normalizeTitle, validateTaskInput } = require('../../src/validation');

// Agrupa um bloco de testes relacionados para manter a organizacao
describe('Validacao de tarefas', () => {

  test('Remove espacos do inicio e do fim do titulo', () => {
    expect(normalizeTitle('   Teste Unitario   ')).toBe('Teste Unitario');
  });

  test('retorna uma string vazia se o titulo for um numero', () => {
    expect(normalizeTitle(12415844)).toBe('');
  });

  test('retorna uma string vazia se o titulo for uma entrada nula', () => {
    expect(normalizeTitle(null)).toBe('');
  });

  test('retorna uma string vazia se o titulo for uma entrada indefinida', () => {
    expect(normalizeTitle(undefined)).toBe('');
  });

});

// 28/10/26

// Casos de testes para a funcao validateTaskInput

// Testa se o sistema gera um erro quando o titulo tem mais de 120 caracteres
test('Limitar o titulo a 120 caracteres', () => {
  const title = 'a'.repeat(121);

  expect(() => validateTaskInput({ title }))
    .toThrow('O titulo deve ter no maximo 120 caracteres.');
});

// Testa se o sistema gera um erro quando o titulo esta vazio
test('Se o titulo estiver vazio', () => {
  expect(() => validateTaskInput({ title: '' }))
    .toThrow('O titulo da tarefa e obrigatorio.');
});

// Testa se os espacos em branco do inicio e do final sao removidos
test('Remover espacos do titulo', () => {
  expect(normalizeTitle('  estudar amanha  '))
    .toBe('estudar amanha');
});
