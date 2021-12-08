//set urls
const URL_COMMON = "https://api.coingecko.com/api/v3/";

const URL_PING                              = URL_COMMON+"ping/";
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

const promiseAjax = async (method, url, payload)=>{
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
// promiseAjax('GET', URL_PING).then(JSON.parse).then(()=>{console.log("성공")}, console.error);


//console.log("111");
//request_ping();
//request_coins_list();
request_ping();


//현재 API 서비스의 정상 가동유무
function request_ping(){
    console.log("request_ping() 시작");

    promiseAjax('GET', URL_PING).then(res=> {
        //할일 처리
        console.log(res);

    }).catch(err=> console.error(err));
    
    console.log("request_ping() 종료");
}

//코인 가격 요청
function request_simple_price(method, param=""){
    //require ids (function : coins_list)
    //require vs_currencies (function : request_simple_supported_vs_currencies)
}
//function request_simple_token_price_id(method, param=""){}

//코인을 매매할때 사용하능한 화폐? 
function request_simple_supported_vs_currencies(){
    xhrHttp(URL_SUPPORTED_VS_CURRENCIES, "GET");
}
//모든 코인의 id, 이름, symbol을 가져온다 
//param = include_platform (true,false)  : 플랫폼의 contract 주소를 포함할지 여부
function request_coins_list(method, param="include_platform=false"){
    xhrHttp(URL_COINS_LIST, "GET", param);
}
function request_coins_markets(method, param=""){}
function request_coins_id(method, param=""){}
function request_coins_id_tickers(method, param=""){}
function request_coins_id_history(method, param=""){}
function request_coins_id_market_chart(method, param=""){}
function request_coins_id_market_chart_range(method, param=""){}
function request_coins_id_status_updates(method, param=""){}
function request_coins_id_ohlc(method, param=""){}
