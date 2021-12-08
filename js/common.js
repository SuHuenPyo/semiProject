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
