var bill = document.querySelector('#bill');
var number_of_people = document.querySelector('#number_of_people');
var tips = Array.from(document.querySelectorAll('input[type="radio"]'));
var custom = document.querySelector('#custom');
var total = document.querySelector('#total');
var tip_amount = document.querySelector('#tip_amount');
var reset = document.querySelector('#reset');
var alert_bill = document.querySelector('#alert_bill');
var alert_tip = document.querySelector('#alert_tip');
var alert_people_number = document.querySelector('#alert_people_number');
tips.map(function (tip) {
    tip.addEventListener('click', function () {
        setColor(tip);
    });
    console.log(tip);
    //setColor(<HTMLInputElement>tip)
});
console.log(tips);
function setColor(item) {
    var parent = item.parentElement;
    if (item.checked) {
        parent.classList.remove('text-white');
        parent.classList.remove('bg-regal-blue');
        parent.classList.add('text-regal-blue');
        parent.classList.add('bg-select-blue');
    }
}
function uncheck(item) {
    var parent = item.parentElement;
    parent.classList.remove('text-regal-blue');
    parent.classList.remove('bg-select-blue');
    parent.classList.add('text-white');
    parent.classList.add('bg-regal-blue');
}
