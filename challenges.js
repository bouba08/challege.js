//Challenge 1:
const meal = (breakfast,lunch,dinner)=>{
    return `Breakfast: ${breakfast}, lunch: ${lunch}, dinner: ${dinner} `
} 
console.log(meal("cereal","salad","pasta"))
//Challenge 2:
const fizzBuzz = (num)=>{
    if (typeof(num) === String || num <= 0){
        return "needs to be a positive number"
    }
    else if (num % 3 === 0 && num % 5 === 0){
        return "fizz buzz"
    }else if (num % 3 === 0){
        return "fizz"
    }else if (num % 5 === 0){
        return "buzz"
    }else {
        return num
    }
}
console.log(fizzBuzz(15))
//Challenge 3:
const evenOdd = (num1, num2)=>{
    let sums = num1 + num2
    if (sums % 2 === 0){
        return sums
    } else if(sums % 2 !== 0){
        return sums ** 2
    } else{
        return "make sure you enter two numbers"
    }
}
console.log(evenOdd(3,6))
//Challenge 4:
const randomNum = ()=> {
    let res = [] 
    for (let i = 0; i < 6; i++){
        let generator = Math.floor(Math.random() * 50)
        res.push(generator)
    }
    return res 
}
console.log(randomNum())
//Challenge 5:
const reverse = ()=>{
    let arr = []
    for (let i = 9; i >= 0; i--){
        arr.push(i)
    }
    return arr    
}
console.log(arr)