b = document.querySelector('button#calc');
b.addEventListener('click',greeting);

function greeting(){
    let a = Number(document.querySelector('input[name="left"]').value);
    let b = Number(document.querySelector('input[name="right"]').value);
    document.querySelector('span#answer').textContent = a+b;
}