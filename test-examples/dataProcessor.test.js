const { countWords, findmax } =
require('./dataProcessor');
test('Should count words in simple text', () => {
    const result = countwords('Hello world test');
    expect(result).toBe(3);
});
test('should find the maximum number', () => {
    const result = findMax([5,10,3,8]);
    expect(result).toBe(10);
});