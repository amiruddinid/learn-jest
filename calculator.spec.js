//expektasi calculator
//1. menyimpan angka yang kita tulis di parameter (a, b)
//2. bisa melakukan pertambahan dari a dan b dengan method sum
//3. bisa melakukan perkalian dari a dan b dengan method multiply
const Calculator = require('./calculator.js')

describe("Calculator", () => {
    const calc = new Calculator(50, 20)
    it("Should save 50 on a and 20 on b", () => {
        expect(calc).toHaveProperty("a", 50)
        expect(calc).toHaveProperty("b", 20)
    })
    it("Should sum a,b and show the result", () => {
        expect(calc.sum()).toEqual(70)
    })
    it("Should multiply a,b and show the result", () => {
        expect(calc.multiply()).toEqual(1000)
    })
})