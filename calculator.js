class Calculator{
    constructor(a,b){
        this.a = a;
        this.b = b
    }

    sum(){
        return this.a + this.b
    }

    multiply(){
        return this.a * this.b
    }
}

module.exports = Calculator