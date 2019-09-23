console.log("hello world");
//set initial value of the counter
let count = 0;
//grab the h1 that will display the current count value
let myCountElement = document.getElementById("counter")
function increase(){
    //increase the count by 1
    count += 1;
    console.log(count);
    //set the inner text of the H1 to display the count
    myCountElement.innerText = count;
}

function decrease(){
    // decrease count by 1
    count -= 1;
    console.log(count);
    //set the inner text of the H1 to display the count
    myCountElement.innerText = count;
}

function reset(){
    //reset count back to 0
    count = 0;
    console.log(count);
    // set the inner text of the H1 to display the count
    myCountElement.innerText = count;
}

function selectTheme(theme){
    //get the body tag and change the class to the theme that gets passed in
    document.getElementsByTagName("body")[0].className = theme;
    //get the main tag and change the class to the theme that gets passed
    document.getElementsByTagName("main")[0].className = theme;

    //grab all the buttons on the page and loop through updating each buttons
    // classname to the theme that gets passed in
    let buttons = document.getElementsByTagName("button")
    for(let i = 0; i <= buttons.length - 1; i++){
        buttons[i],className = theme;
    }
}