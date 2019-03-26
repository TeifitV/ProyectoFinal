//function definition
const sum = (a, b) => a + b;

//Test example
describe('Simple test example', () => {

    it('Should SUM 2 numbers', () => {
        expect(sum(1,2)).toBe(3);
    });

});