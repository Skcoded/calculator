console.log("hello world")

var display = document.getElementById("display");

var buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons)

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "←":
                if(display.innerText){
                  display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = "Not Correct!";
                }
                
                break;
            default:
                display.innerText += e.target.innerText
                break;
    
        }
    });
});