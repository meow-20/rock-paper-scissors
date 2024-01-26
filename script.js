var computerDisplay = document.querySelector("#CC span");
var userDisplay = document.querySelector("#UC span");
var result = document.querySelector("#result span");

var btns = document.querySelectorAll("button")
btns.forEach((e) => {
    e.addEventListener('click', function () {
        // displaying the user's choice in plac
        userDisplay.innerHTML = e.name;
        //calling the random choosing function 
        const a = decision();
        // console.log(a)

        // placing the choice in the computer's choice
        computerDisplay.innerHTML = a;
        // console.log(e.id)

        // result
        if((e.name == "ROCK" && a == "SCISSORS")
        || (e.name == "PAPER" && a == "ROCK")
        || (e.name == "SCISSORS" && a == "PAPER")) {
            result.innerHTML = "YOU WIN !"
        } else if ((e.name == "ROCK" && a == "ROCK")
        || (e.name == "PAPER" && a == "PAPER")
        || (e.name == "SCISSORS" && a == "SCISSORS")) {
            result.innerHTML = "IT'S A TIE (;"
        } else{
            result.innerHTML = "YOU LOSE :("
        }
    });
})
function decision(){
    var arr = ["SCISSORS","PAPER","ROCK","SCISSORS","SCISSORS","ROCK","ROCK","PAPER","PAPER","SCISSORS"];
    var random = Math.floor(Math.random() * 10);
    // console.log(random)
    return arr[random];
}
