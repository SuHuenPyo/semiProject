//set urls
const URL_COMMON = "https://api.coingecko.com/api/v3/";

<<<<<<< HEAD
const URL_PING                      = URL_COMMON+"ping/";
const URL_SUPPORTED_VS_CURRENCIES   = URL_COMMON+"simple/supported_vs_currencies";
const URL_SIMPLE_PRICE              = URL_COMMON+"simple/price"
const URL_COINS_LIST                = URL_COMMON+"coins/list";
=======
const URL_PING                              = URL_COMMON+"ping/";
const URL_SUPPORTED_VS_CURRENCIES           = URL_COMMON+"simple/supported_vs_currencies";
const URL_SIMPLE_PRICE                      = URL_COMMON+"simple/price";
const URL_COINS_LIST                        = URL_COMMON+"coins/list";
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
>>>>>>> 29bd320dbba074d7ac52318d842bee6bd2e70759

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
request_coins_list("GET");


//현재 API 서비스의 정상 가동유무
function request_ping(method){
    console.log("request_ping() 시작");

    promiseAjax(method, URL_PING+param).then(res=> {
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

    promiseAjax(method, URL_SUPPORTED_VS_CURRENCIES+param).then(res=> {
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
