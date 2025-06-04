
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.name);
  console.log(data.weather[0].description)
  console.log()
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let u_n = document.createElement('h2');
  
  u_n.className = 'af'
  l = document.createElement('h2')
  l.textContent = data.name;
  u_n.insertAdjacentElement('beforeend',l);
  p = document.querySelector('button');
  p.insertAdjacentElement('afterend',u_n);

  let v = document.createElement('p');
  
  v.className = 'af'
  l = document.createElement('p')
  l.textContent = data.weather[0].description;
  v.insertAdjacentElement('beforeend',l);
  p = document.querySelector('h2');
  p.insertAdjacentElement('afterend',v);


  let u = document.createElement('tr');
  u.className = 'af'

  //最高気温
  l = document.createElement('td')
  l.textContent ='最高気温';
  u.insertAdjacentElement('beforeend',l);
  l = document.createElement('td')
  l.textContent =data.main.temp_max;
  u.insertAdjacentElement('beforeend',l);

  //最低気温
  l = document.createElement('td')
  l.textContent ='最低気温';
  u.insertAdjacentElement('beforeend',l);
  l = document.createElement('td')
  l.textContent =data.main.temp_min;
  u.insertAdjacentElement('beforeend',l);
  p = document.querySelector('p');
  p.insertAdjacentElement('afterend',u);

  //googlemap 検索
  //link = https://maps.google.com/maps?ll=経度,緯度

  let al = document.createElement('a');        // 新規要素 a を作成
  al.textContent = data.name + 'の詳細';                 // 要素 a のテキスト設定
  al.setAttribute('href', 'https://maps.google.com/maps?ll='+data.coord.lat+','+data.coord.lon); // 属性 href の設定
  p = document.querySelector('tr');
  p.insertAdjacentElement('afterend', al);
}

//6-1 のイベントハンドラ登録処理は以下に記述

document.querySelector('#push').addEventListener('click',sendRequest);
let num = 0;


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  //既存の物を削除
  console.log("開始前 : "+num);
  if(num ==1 || num==2){
    let l = document.querySelector('p.af');
    l.remove();
    l = document.querySelector('tr.af');
    l.remove();
  }
  if(num==2){
    let l = document.querySelector('p.af');
    l.remove();
    l = document.querySelector('tr.af');
    l.remove();
  }

  let key = document.querySelector('input[id="key"]').value;
  console.log("input = "+key);
  let w_link = 0;
  if(key==="カイロ" || key==="エジプト"){
    w_link = 360630;
  }else if(key==="モスクワ" || key==="ロシア"){
    w_link = 524901;
  }else if(key==="ヨハネスブルク" || key==="南アフリカ"){
    w_link = 993800;
  }else if(key==="北京" || key==="中華人民共和国"){
    w_link = 1816670;
  }else if(key==="東京" || key==="日本"){
    w_link = 1850147;
  }else if(key==="シンガポール"){
    w_link = 1880252;
  }else if(key==="シドニー" || key==="オーストラリア"){
    w_link = 2147714;
  }else if(key==="ロンドン" || key==="イギリス"){
    w_link = 2643743;
  }else if(key==="パリ" || key==="フランス"){
    w_link = 2968815;
  }else if(key==="リオデジャネイロ" || key==="ブラジル"){
    w_link = 3451189;
  }else if(key==="ニューヨーク" || key==="アメリカ合衆国"){
    w_link = 5128581;
  }else if(key==="ロサンゼルス"){
    w_link = 5368361;
  }else{
    //404 NotFound
  }
	// URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + w_link + '.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
  num=1;

  if(key==="アメリカ合衆国"){
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json';
    axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
    num=2;
  }
  console.log(num);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

  // サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  console.log(data);
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let n_data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

function search(){
  //let key = document.querySelector('input[id="key"]').value;
  console.log("検索キー："+key);
  printDom(data);
}