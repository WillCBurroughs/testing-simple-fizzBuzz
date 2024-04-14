

function outputFizzBuzz(value){

    for(let i = 1; i <= value; i++){
        if(i % 15 == 0){
            console.log("FizzBuzz");
        } else if(i % 5 == 0){
            console.log("Fizz");
        } else if(i % 3 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        outputFizzBuzz(document.getElementById('buzzfizz-enter').value);
    });
});