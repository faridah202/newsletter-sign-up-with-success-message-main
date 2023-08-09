let container = document.getElementById('container');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let btn1 =document.getElementById('btn1');
let error = document.getElementById('error');
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let succesmsg = document.getElementById('hidden');

btn.addEventListener('click', function(){
    if(text.value.match(mailformat)){
        error.innerHTML = ' '
       succesmsg.style.display = 'block'
      container.style.display = 'none'
    }
    else
    {
        error.innerHTML = 'please enter a valid email'
    }
})
btn1.addEventListener('click', function(){
    succesmsg.style.display = 'none'
      container.style.display = 'flex'
})


