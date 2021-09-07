let input = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue ='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        console.log('this is :', buttonText);
        if(buttonText == 'x')
        {
            buttonText = '*'
            screenvalue += buttonText;
            input.value = screenvalue;
        }
        else if(buttonText == 'AC')
        {
            screenvalue = '';
            input.value = screenvalue;
        }
        else if(buttonText == '=')
        {
            input.value = eval(screenvalue);
            console.log('this is :', input.value);
        }
        else{
            screenvalue += buttonText;
            input.value = screenvalue;
        }
    })
}