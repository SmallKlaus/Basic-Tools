let previous = document.getElementById('previous');
let current = document.getElementById('current');

let exp = "";

let buttons =Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e)=> {
            switch(e.target.innerText){
                case "AC":
                    current.innerText = "";
                    previous.innerText = "";
                    exp = "";
                    break;
                case "←":
                    current.innerText=current.innerText.slice(0,-1);
                    exp = exp.slice(0,-1);
                    break;
                case "=":
                    try{
                        current.innerText = eval(exp);
                        previous.innerText = exp + "=";
                        exp = JSON.stringify(eval(exp));
                    }catch{
                        current.innerText="INVALID";
                        previous.innerText = "";
                        exp = "";
                    }
                    break;

                default:
                    if(button.classList.contains('operation'))    
                    {
                        try{
                        previous.innerText=eval(exp)+e.target.innerText;
                        exp = previous.innerText;
                        current.innerText = "";
                        }
                        catch{
                            current.innerText="INVALID";
                            previous.innerText = "";
                            exp = "";    
                        }
                    }
                    else{
                    if(exp==""){
                        current.innerText="";
                    }
                    current.innerText+=e.target.innerText;
                    exp += e.target.innerText;
                    }
                    
            }
    })
})