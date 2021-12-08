
//set urls
const URL_COMMON = "https://api.coingecko.com/api/v3/";

const URL_PING                              = URL_COMMON+"ping";
const URL_SUPPORTED_VS_CURRENCIES           = URL_COMMON+"simple/supported_vs_currencies";
const URL_COINS_LIST                        = URL_COMMON+"coins/list";
const URL_SIMPLE_PRICE                      = URL_COMMON+"simple/price";
const URL_COINS_MARKETS                     = URL_COMMON+"coins/markets";
const URL_COINS_BITCOIN                     = URL_COMMON+"coins/bitcoin";
const URL_COINS_BITCOIN_MARKET_CHART        = URL_COMMON+"coins/";
const URL_COINS_CATEGORIES_LIST             = URL_COMMON+"coins/categories/list";
const URL_COINS_CATEGORIES                  = URL_COMMON+"coins/categories";
const URL_EXCHANGES                         = URL_COMMON+"exchanges";
const URL_EXCHANGES_LIST                    = URL_COMMON+"exchanges/list";
const URL_EXCHANGES_BINANCE                 = URL_COMMON+"exchanges/binance";
const URL_EXCHANGES_RATES                   = URL_COMMON+"exchange_rates";
const URL_GLOBAL                            = URL_COMMON+"global";


const promiseAjax = (method, url, payload)=>{
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        //xhr.setRequestHeader('');
        xhr.send(JSON.stringify(payload));

        xhr.onreadystatechange = function(){
            //서버 응답완료아니면 무시
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200 || xhr.status === 201) {
                    resolve(xhr.response);
                    //console.log(xhr.responseText);
                } else {
                    //console.error(xhr.responseText);
                    reject(new Error(xhr.status));
                }
            }
        }
    })
}
const syncAjax = (url)=> {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseText;
}
// promiseAjax('GET', URL_PING).then(JSON.parse).then(()=>{console.log("성공")}, console.error);

//console.log("111");
//request_ping();
//request_coins_list();
//request_ping("GET");
//request_simple_supported_vs_currencies("GET");
//console.log(syncAjax(URL_PING));
//request_coins_list("GET");


//현재 API 서비스의 정상 가동유무


//request_ping("GET");

    
const table = document.getElementById('coinTableList');

//  // 새 행(Row) 추가
//  const newRow = table.insertRow();
  
//  // 새 행(Row)에 Cell 추가
//  const newCell1 = newRow.insertCell(0);
//  const newCell2 = newRow.insertCell(1);
 
//  // Cell에 텍스트 추가
//  newCell1.innerText = '새 과일';
//  newCell2.innerText = 'New Fruit';

initMainContent();

function initMainContent(){
    
    
    const table = document.getElementById("coinTableList");

    //let symbol_coinListJson = syncAjax(URL_SUPPORTED_VS_CURRENCIES);

    //usd 달러 마켓 기준으로 나열
    let listUsdMarket = syncAjax(URL_COINS_MARKETS+'?vs_currency=usd');
    console.log(listUsdMarket);
    listUsdMarket = JSON.parse(listUsdMarket);


    //data = [[symbol_coinListJson], ]
    for(let i = 0 ; i< 30 ; i++){
        let newRow = table.insertRow();
        row = newRow.insertCell(0);
        row.className="num";
        row.innerHTML = i+1;

        row = newRow.insertCell(1);
        row.className="title";
        row.innerHTML = listUsdMarket[i].name;

        row = newRow.insertCell(2)
        row.className="price";
        row.innerHTML = "US$"+listUsdMarket[i].current_price;

        
        row = newRow.insertCell(3)
        row.className="price";
        row.innerHTML = listUsdMarket[i].price_change_percentage_24h+"%";

        row = newRow.insertCell(4)
        row.className="Variance";
        row.innerHTML = "US$"+listUsdMarket[i].high_24h;

        row = newRow.insertCell(5)
        row.className="high";
        row.innerHTML = "US$"+listUsdMarket[i].low_24h;

        row = newRow.insertCell(6)
        row.className="ATH";
        row.innerHTML = "US$"+listUsdMarket[i].ath;

        row = newRow.insertCell(7)
        row.className="ATL";
        row.innerHTML =  "US$"+listUsdMarket[i].atl;

        row = newRow.insertCell(8)
        row.className="TVL";
        row.innerHTML = "US$"+listUsdMarket[i].total_volume;

        row = newRow.insertCell(9);
        row.className="graph";
        row.id="chart_div";

        request_coins_id_market_chart("GET", URL_COINS_BITCOIN_MARKET_CHART+ listUsdMarket[i].id+"/market_chart?vs_currency=usd&days=7&interval=daily", listUsdMarket[i].name);
        
        
        console.log(listUsdMarket[i].name); 
        
        
    }


          

    //열개수
    
}
//동적으로 생성하는 엘레먼트에 class name을 부여합니다.
function addClassName(){
    document.getE
}

function request_ping(method){
    console.log("request_ping() 시작");

    promiseAjax(method, URL_PING).then(res=> {
        //console.log(res);
        console.log("정상작동 중");

    }).catch(err=> console.error(err));
    
    console.log("request_ping() 종료");
}

//코인 가격 요청
function request_simple_price(method, param=""){
    //require ids (function : coins_list)
    //require vs_currencies (function : request_simple_supported_vs_currencies)
    console.log("request_simple_price() 시작");

    promiseAjax(method, URL_SIMPLE_PRICE+param).then(res=> {
        //할일 처리
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_simple_price() 종료");
}
//function request_simple_token_price_id(method, param=""){}

//코인을 매매할때 사용하능한 화폐? 리스트 보여주기  아마도 가져올값은 'usd'정도
function request_simple_supported_vs_currencies(method, param=""){
    
    console.log("request_simple_supported_vs_currencies() 시작");

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_simple_supported_vs_currencies() 종료");

}
//모든 코인의 id, 이름, symbol을 가져온다 
//param = include_platform (true,false)  : 플랫폼의 contract 주소를 포함할지 여부
function request_coins_list(method, param="?include_platform=false"){
    console.log("request_coins_list() 시작");

    promiseAjax(method, URL_COINS_LIST+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_coins_list() 종료");
}
function request_coins_markets(method, param=""){
    console.log("request_coins_markets() 시작");

    promiseAjax(method, URL_COINS_MARKETS+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_coins_markets() 종료");
}
function request_coins_id(method, param=""){
    console.log("request_coins_id() 시작");

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_coins_id() 종료");
}
function request_coins_id_tickers(method, param=""){
    console.log("request_coins_id_tickers() 시작");

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_coins_id_tickers() 종료");
}
function request_coins_id_history(method, param=""){
    console.log("request_coins_id_history() 시작");

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_coins_id_history() 종료");
}
function request_coins_id_market_chart(method, param="", title){
    console.log("request_coins_id_market_chart() 시작");

    promiseAjax(method, param).then(res=> {
        priceData = JSON.parse(res);
        // console.log(priceData)
        console.log(title);
        for(let i =0 ; i< priceData.prices.length ; i++){
            let time = new Date(priceData.prices[i][0]);
            let price = priceData.prices[i][1];
            console.log(time+":"+price);
        }
        
        
        

        //console.log("Date: "+date.getDate()+
        //   "/"+(date.getMonth()+1)+
        //   "/"+date.getFullYear()+
        //   " "+date.getHours()+
        //   ":"+date.getMinutes()+
        //   ":"+date.getSeconds());

    }).catch(err=> console.error(err));
    
    console.log("request_coins_id_market_chart() 종료");
}
function request_coins_id_market_chart_range(method, param=""){
    console.log("request_coins_id_market_chart_range() 시작");

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_coins_id_market_chart_range() 종료");
}
function request_coins_id_status_updates(method, param=""){
    console.log("request_coins_id_status_updates() 시작");

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_coins_id_status_updates() 종료");
}
function request_coins_id_ohlc(method, param=""){
    console.log("request_coins_id_ohlc() 시작");

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_coins_id_ohlc() 종료");
}


// list 라이브러리
let options = {
    valueNames: ['num', 'title','price', 'Variance', 'high', 'low', 'ATH', 'ATL', 'TVL','graph']
};

let coinList = new List('coinList', options);

//차트 라이브러리
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let data1 = google.visualization.arrayToDataTable([
      ['1일', 50, 10, 10, 10],
      ['2일', 20, 30, 40, 50],
      ['3일', 30, 40, 50, 60],
      ['4일', 60, 50, 40, 30],
      ['5일', 50, 40, 30, 20],
      ['6일', 40, 30, 20, 10]  
        // 모든 data는 배열이고 [0]번째는 label 
    ], true);
    
    let options = {
        legend: 'none'
    };
    
    let chart = new google.visualization.CandlestickChart(document.getElementById("chart_div"));
    
    chart.draw(data1, options);

        
}


