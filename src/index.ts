// Based upon https://github.com/Microsoft/TypeScript/issues/8655
function assertExists<Type>(
    value: Type | undefined,
    messageToThrow?: string,
): Type {
    if (value !== undefined) {
        return value;
    } else {
        throw new Error(
            messageToThrow || 'assertExists: The passed value is undefined',
        );
    }
}

export default assertExists;
