const array = [1,2,3,4,5,6,7,8,9,10];
const odd_num = array.filter(num => num % 2 != 0); 
const div_by_2or5 = array.filter(num => (num % 2 == 0) || (num % 5 == 0)); 
const div_by_3_squared = array.filter(num => num % 3 == 0).map(num => num * num); 
const sum_sqrs_num_div_by_5 = array.filter(num => num % 5 == 0).map(num => num * num).reduce((a, b) => a+b);  

//a. Odd numbers 
console.log('Odd numbers: ', odd_num);

// b. an array of numbers divisible by 2 or 5
console.log('Numbers divisible by 2 or 5: ', div_by_2or5);

// c. an array of numbers divisible by 3 squared (square the numbers that are divisible by 3)
console.log('Square of Numbers divisible by 3:', div_by_3_squared);

// d. The sum of the following: square the numbers divisible by 5
console.log('Sum of squares of the numbers divisible by 5: ', sum_sqrs_num_div_by_5);