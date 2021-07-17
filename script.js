var count=0
var countm=0
var counth=0
var counthour=0
var handle=0
function second() {

    document.getElementById('seconds').innerHTML = count
    count++
    if (count==60){
        countm++
        document.getElementById('mint').innerHTML = countm
    count=0
    }
    if (countm==60){
        counth++
        document.getElementById('hundred').innerHTML = counth
    countm=0
    }
    if (counth==60){
        counthour++
        document.getElementById('hour').innerHTML = counthour
    counth=0
    }
    if (counth==60){
    count=0
 countm=0
 counth=0
 counthour=0
    }
}
function start(){
    handle=setInterval(second,17);

}
function reset(){

    clearInterval(handle)
    handle=0
    count=0
    countm=0
    counth=0
    counthour=0
    document.getElementById('seconds').innerHTML = count
    document.getElementById('hundred').innerHTML = counth
    document.getElementById('hour').innerHTML = counthour
    document.getElementById('mint').innerHTML = countm 
}
    // var handle=setInterval(second,17);
