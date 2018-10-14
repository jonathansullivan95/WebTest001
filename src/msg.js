console.log('Client-side code running');

const button = document.getElementById('myButton');     //get ref to button
button.addEventListener('click', ()=>{                  //add event listener to button, detect click, then execute function body
    document.getElementById("mainP").innerHTML = "Don't click that!";
    console.log("CLICKED BUTTON");
});
