let washCar = 10
let mowLawn = 20
let pullWeeds = 30
let total = 0
let washCarValue = "<td><b>Wash Car</b></td>" + "<td>$10</td>"
let mowLawnValue = "<td><b>Mow Lawn</b></td><td>$20</td>"
let pullWeedsValue = "<td><b>Pull Weeds</b></td><td>$30</td>"
let totalValue = 0

function washCarService(){
    document.getElementById('washCarTr').innerHTML = washCarValue
    document.getElementById("washCarService").disabled = true
    totalValue += 10
    document.getElementById('totalValue').innerHTML = totalValue
}

function mowLawnService(){
    document.getElementById('mowLawnTr').innerHTML = mowLawnValue
    document.getElementById("mowLawnService").disabled = true
    totalValue += 20
    document.getElementById('totalValue').innerHTML = totalValue
}

function pullWeedsService(){
    document.getElementById('pullWeedsTr').innerHTML = pullWeedsValue
    document.getElementById("pullWeedsService").disabled = true;
    totalValue += 30
    document.getElementById('totalValue').innerHTML = totalValue
}

function sendInvoice(){
    document.getElementById('washCarTr').innerHTML = ""
    document.getElementById('mowLawnTr').innerHTML = ""
    document.getElementById('pullWeedsTr').innerHTML = ""
    totalValue = 0
    document.getElementById('totalValue').innerHTML = totalValue

    document.getElementById("washCarService").disabled = false
    document.getElementById("mowLawnService").disabled = false
    document.getElementById("pullWeedsService").disabled = false
}