const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});

test("gets player's attack value", () => {
    const player = new Player('Dave');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});