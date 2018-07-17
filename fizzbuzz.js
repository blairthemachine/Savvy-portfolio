var FizzBuzz = function(x){
    if((x % 5) === 0 && (x % 3) === 0){
        console.log('FizzBuzz!');
    }
    if((x % 3) === 0){
        console.log('Fizz!');
    }
 else if((x % 5) === 0){
        console.log('Buzz!');
    }
 else{
        console.log(x);
    }
};

remainder(3);

