//expektasi string
//1. menghitung jumlah huruf dari sebuah string
//2. menghapus spasi dari kalimat
const {countLenght, removeSpace} = require('./string')

describe("String", () => {
    it("Should show word count", () => {
        expect(countLenght("test")).toEqual(4)
    })
    it("Should show text without space", () => {
        expect(removeSpace("Testing Driven Development"))
        .toMatch("TestingDrivenDevelopment")
    })
})