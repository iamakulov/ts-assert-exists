import assertExists from './index';

test('Doesn’t throw if receives a defined value', () => {
    expect(() => {
        assertExists('existing value');
    }).not.toThrow();
});

test('Throws if receives an undefined value', () => {
    expect(() => {
        assertExists(undefined);
    }).toThrow(/value is undefined/);
});

test('Throws a custom message if receives an undefined value and a message', () => {
    expect(() => {
        assertExists(undefined, 'Custom message DEADBEEF');
    }).toThrow(/Custom message DEADBEEF/);
});
