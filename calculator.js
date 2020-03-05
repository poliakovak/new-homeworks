function Calculator(){
    this.read = function(){
        let num1 = +prompt("Enter number");
        let num2 = +prompt("Enter number");
        this.num1 = num1;
        this.num2 = num2;
    }

    this.sum = function(){
        return this.num1 + this.num2;
    }

    this.mul = function(){
        return this.num1*this.num2;
    }

    this.min = function(){
        return this.num1 - this.num2;
    }
}

let example = new Calculator();

example.read();
let sum = example.sum();
console.log(sum);
let mul = example.mul();
console.log(mul);
let min = example.min();
console.log(min);