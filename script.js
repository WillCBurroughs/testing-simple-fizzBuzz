

let unorderedList = document.getElementById("outputFizz")

function outputFizzBuzz(value){

    for(let i = 1; i <= value; i++){
        let nextItem = document.createElement("li")
        if(i % 15 == 0){
            nextItem.textContent = "FizzBuzz";
        } else if(i % 5 == 0){
            nextItem.textContent = "Fizz";
        } else if(i % 3 == 0){
            nextItem.textContent = "Buzz";
        } else {
            nextItem.textContent = i;
        }
        unorderedList.appendChild(nextItem)
    }

}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        outputFizzBuzz(document.getElementById('buzzfizz-enter').value);
    });
});