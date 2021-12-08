
//set urls
const URL_COMMON = "https://api.coingecko.com/api/v3/";

const URL_PING                              = URL_COMMON+"ping";
const URL_SUPPORTED_VS_CURRENCIES           = URL_COMMON+"simple/supported_vs_currencies";
const URL_COINS_LIST                        = URL_COMMON+"coins/list";
const URL_SIMPLE_PRICE                      = URL_COMMON+"simple/price";
const URL_COINS_MARKETS                     = URL_COMMON+"coins/markets";
const URL_COINS_BITCOIN                     = URL_COMMON+"coins/bitcoin";
const URL_COINS_BITCOIN_MARKET_CHART        = URL_COMMON+"coins/bitcoin/market_chart";
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
    for(let i = 0 ; i< 100 ; i++){
        let newRow = table.insertRow();
        newRow.insertCell(0).innerText=i+1;
        newRow.insertCell(1).innerText = listUsdMarket[i].name;
        newRow.insertCell(2).innerText = "US$"+listUsdMarket[i].current_price;
        newRow.insertCell(3).innerText 
        newRow.insertCell(4).innerText = listUsdMarket[i].price_change_percentage_24h+"%";
        newRow.insertCell(5).innerText
        newRow.insertCell(6).innerText
        newRow.insertCell(7).innerText
        newRow.insertCell(8).innerText
        
        console.log(listUsdMarket[i].name); 

        
        
    }
    
    //행개수
    const tableRowCnt = table.rows.length;

    console.log("행 개수:" + tableRowCnt);

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
function request_coins_id_market_chart(method, param=""){
    console.log("request_coins_id_market_chart() 시작");

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
        console.log(res);

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
    valueNames: ['number', 'name','sales', 'hour', 'day', 'week', 'count', 'total', 'graph']
};

let coinList = new List('coinList', options);

//차트 라이브러리
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let data1 = google.visualization.arrayToDataTable([
      ['1일', 10, 20, 30, 40],
      ['2일', 20, 30, 40, 50],
      ['3일', 30, 40, 50, 60],
      ['4일', 60, 50, 40, 30],
      ['5일', 50, 40, 30, 20],
      ['6일', 40, 30, 20, 10]  
        // 모든 data는 배열이고 [0]번째는 label 
    ], true);

    let data2 = google.visualization.arrayToDataTable([
        ['1일', 10, 20, 30, 40],
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

        
    let chart1 = new google.visualization.CandlestickChart(document.getElementById("chart_div1"));
    
    chart1.draw(data2, options);
}



