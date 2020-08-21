const ship = require('./ship');

test('expect ship length', () => {
    expect(ship(2).length).toBe(2);
});

test('expect positions to be untouched', () => {
    expect(ship(2).positions).toEqual(["untouched", "untouched"]);
});

test('expect position to become hit', () => {
    expect(ship(2).hit(1)).toEqual(["untouched", "hit"]);
});

test('expect all hit to return true', () => {
    expect(ship(2).isSunk(['hit', 'hit'])).toBe(true);
});

test('expect an unhit to be false', () => {
    expect(ship(2).isSunk(['untouched', 'hit'])).toBe(false);
});