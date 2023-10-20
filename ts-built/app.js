let form = document.querySelector("#form");
let bill = document.querySelector('#bill');
let number_of_people = document.querySelector('#number_of_people');
let tips = Array.from(document.querySelectorAll('input[type="radio"]'));
let custom = document.querySelector('#custom');
let total = document.querySelector('#total');
let tip_amount = document.querySelector('#tip_amount');
let reset = document.querySelector('#reset');
let alert_bill = document.querySelector('#alert_bill');
let alert_tip = document.querySelector('#alert_tip');
let alert_people_number = document.querySelector('#alert_people_number');
function setTip(value) {
    localStorage.setItem('tip', value);
}
function getTip() {
    return localStorage.getItem('tip');
}
function tip_per_person(bill_to_pay, number_of_people, tip_to_pay) {
    let total_tip = ((tip_to_pay / 100) * bill_to_pay);
    return (total_tip / number_of_people).toFixed(2);
}
function total_per_person(bill, number_of_people, tip) {
    let tip_to_pay = tip_per_person(bill, number_of_people, tip);
    let total_to_pay = (bill / number_of_people).toFixed(2);
    return total_to_pay + tip_to_pay;
}
function check(inputs, input_id) {
    inputs.forEach(item => {
        if (item.id = input_id) {
            setColor(item);
        }
        else {
            console.log('execute');
            removeColor(item);
        }
    });
}
function setColor(item) {
    let parent = item.parentElement;
    if (item.checked) {
        parent.classList.remove('text-white');
        parent.classList.remove('bg-regal-blue');
        parent.classList.add('text-regal-blue');
        parent.classList.add('bg-select-blue');
    }
}
function removeColor(item) {
    let parent = item.parentElement;
    parent.classList.remove('text-regal-blue');
    parent.classList.remove('bg-select-blue');
    parent.classList.add('text-white');
    parent.classList.add('bg-regal-blue');
}
tips.forEach(tip => {
    tip.addEventListener('click', () => {
        tips.forEach(tip => {
            removeColor(tip);
            custom.value = '';
        });
        setColor(tip);
        console.log(tip.value);
        setTip(tip.value);
    });
});
console.log("tip:" + localStorage.getItem("tip"));
custom.addEventListener('click', () => {
    tips.forEach(tip => {
        setTip(tip.value);
        removeColor(tip);
    });
});
console.log("Yeahhh!");
form.addEventListener('keypress', (e) => {
    // e.preventDefault()
    if (e.key == "Enter") {
        console.log("The key is down!");
    }
});
