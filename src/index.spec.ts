import assertExists from './index';

test('Doesn’t throw if receives a defined value', () => {
    expect(() => {
        assertExists('existing value');
    }).not.toThrow();
});

test('Throws if receives an undefined value', () => {
    expect(() => {
        assertExists(undefined);
    }).toThrow(/value doesn’t exist/);
});

test('Throws if receives a null value', () => {
    expect(() => {
        assertExists(null);
    }).toThrow(/value doesn’t exist/);
});

test('Throws a custom message if receives an non-existing value and a message', () => {
    expect(() => {
        assertExists(undefined, 'Custom message DEADBEEF');
    }).toThrow(/Custom message DEADBEEF/);
});
