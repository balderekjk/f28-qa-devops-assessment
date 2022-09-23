const { shuffleArray } = require('./utils');
const { bots } = require('./data');

describe('shuffleArray should return shuffled array', () => {
  test('returns type of array', () => {
    expect(Array.isArray(shuffleArray(bots))).toBeTruthy();
  });
  test('returns same length output array as input arr', () => {
    expect(bots.length).toEqual(shuffleArray(bots).length);
  });
  test('output returns same items as input', () => {
    shuffleArray(bots).map((bot) => expect(bots).toContain(bot));
  });
  test('returned array demonstrates bots in random positions', () => {
    let displacedIndex = shuffleArray(bots).findIndex(
      (bot) => bots.indexOf(bot) !== bots.id
    );
    expect(displacedIndex).toBeGreaterThan(-1);
  });
});
