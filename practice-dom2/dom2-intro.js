b = document.querySelector('button#henkou');
b.addEventListener('click',greeting);
function greeting(){
    //ヨットを追加
    let l = document.createElement('li');
    l.textContent = 'ヨット';
    document.querySelector('ul#kazoeuta').insertAdjacentElement('beforeend',l);

    //imgを追加
    document.querySelector('img#bluemoon').setAttribute('src','bluemoon.jpg');

    //拓大のURL
    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href','https://www.takushoku-u.ac.jp');
    document.querySelector('p#takudai').insertAdjacentElement('afterend',a);

    //箇条書きの削除
    document.querySelector('ul#kassen').remove();

    //箇条書きの作成
    u = document.createElement('ul');

    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);

    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
}