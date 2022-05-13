//selectors
let buttons = document.querySelectorAll('button');

let colorchanger = document.querySelector('#color-selector');
let backcolorchanger = document.querySelector('#background-color-selector');

let newbtn = document.querySelector('#new-btn');
let txtbtn = document.querySelector('#txt-btn');
let pdfbtn = document.querySelector('#pdf-btn');
const displayedText = document.querySelector('#displayedText');
const filename = document.querySelector('#filename');

//events


colorchanger.addEventListener('input', ()=>{
    document.execCommand("foreColor", false, colorchanger.value);
})

backcolorchanger.addEventListener('input', ()=>{
    document.execCommand("backColor", false, backcolorchanger.value);
})

newbtn.addEventListener('click', ()=>{
    displayedText.innerHTML="";
})

txtbtn.addEventListener('click', ()=>{
    const a = document.createElement('a');
    const blobfile = new Blob([displayedText.innerText]);
    const dtURL = URL.createObjectURL(blobfile);
    a.href = dtURL;
    a.download = filename.value +".txt";
    a.click();
})

pdfbtn.addEventListener('click', ()=>{
    html2pdf().from(displayedText).save(filename.value);
})


buttons.forEach(butt => {
    butt.addEventListener('click', ()=>{
        let command = butt.dataset['element'];

        if(command =='createLink' || command == 'insertImage')
        {
            let link = prompt('Enter the link: ', 'http://');
            document.execCommand(command, false, link);
        }
        else{        
        document.execCommand(command, false, null);
        }
    })
})