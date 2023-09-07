let string = "";
let x = document.querySelectorAll(".btn");

x.forEach((button)=>{
    button.addEventListener("click" , ()=>{
    
        if(button.value == "=")
        {
            if(string != "")
            string = eval(string);
        }
        else if(button.value == "AC")
        {
            string = "";
        }
        else if(button.value == "C")
        {
            string = string.slice(0 , -1);
        }
        else
        {
            string = string + button.value;
        }
        
        document.getElementById('screen').value = string;
    })
})