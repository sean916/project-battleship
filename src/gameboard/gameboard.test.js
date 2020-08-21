const gameboard = require('./gameboard');

test('battleship length', () => {
    expect(gameboard.battleship.length).toBe(5);
});

test('receive attack works', () => {
    expect(gameboard.receiveAttack('A3')).toEqual(["untouched", "untouched", "hit", "untouched", "untouched"]);
});

test('receive attack on second ship', () => {
    expect(gameboard.receiveAttack('B2')).toEqual(["untouched", "hit", "untouched"]);
});

test('Misses', () => {
    expect(gameboard.receiveAttack('J9')).toEqual("Miss at J9");
});

test('all sunk', () => {
    expect(gameboard.allSunk()).toBe('All ships sunk');
});