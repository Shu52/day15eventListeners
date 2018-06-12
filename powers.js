/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
// function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.remove("mystyle");
// }


document.querySelector("#activate-flight").addEventListener("click", 
    function toggleClass (newClass) {
        var element = document.getElementById("flight")
        element.classList.remove("disabled")
        element.classList.add("enabled");        
      }
)

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/
{/* <button id="activate-mindreading">Activate Mind Reading</button>
  <button id="activate-xray">Active X-ray Vision</button> */}
document.querySelector("#activate-mindreading").addEventListener("click",
function toggleClass (newClass) {
    var element = document.getElementById("mindreading")
    element.classList.remove("disabled")
    element.classList.add("enabled");        
  }
)
document.querySelector("#activate-xray").addEventListener("click",
function toggleClass (newClass) {
    var element = document.getElementById("xray")
    element.classList.remove("disabled")
    element.classList.add("enabled");        
  }
)
/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/
/* <button id="activate-all">Active All Powers</button> */
document.querySelector("#activate-all").addEventListener("click",
function activate (){
var element = document.querySelectorAll(".power")

})