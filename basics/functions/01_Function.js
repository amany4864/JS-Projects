
function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username ");
        return
    }
    return `${username} just logged in. Hii ${username}`
}

// console.log(loginUserMessage()); //undefined o/p

console.log(loginUserMessage("Aman Yadav"));

// in fun2 if no argument is passed then it will take default value as aman else actual result will be printed.
function fun2(username="Sam"){
    console.log(username);
}

fun2()