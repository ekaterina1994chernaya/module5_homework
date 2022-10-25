const getMonth = require('./getMonth');

test('getMonth = 3 it is march', () => {
  expect(getMonth(3)).toBe('март');
});

test('getMonth more 12 = error', () => {
  expect(getMonth(13)).toBe('неизвестно');
});