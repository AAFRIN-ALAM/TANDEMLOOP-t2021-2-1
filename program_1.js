// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string


class Calculator{
    addition(a,b){
        let c=a+b
        console.log(c)
    }
    subtraction(a,b){
        let c=a-b
        console.log(c)
    }
    multiplication(a,b){
        let c=a*b
        console.log(c)
    }
    division(a,b){
        let c=a/b
        console.log(c)
    }
}
let calculator = new Calculator()
calculator.addition(4.2,5)
calculator.subtraction(10,5)
calculator.multiplication(4.5,5)
calculator.division(10,2.5)
