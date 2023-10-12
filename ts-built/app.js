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
tips.forEach(tip => {
    tip.addEventListener('click', () => {
        tips.forEach(tip => {
            removeColor(tip);
        });
        setColor(tip);
        // let tip_id = tip.id
        // console.log(tip_id)
        // check(tips, tip_id)
    });
    //setColor(<HTMLInputElement>tip)
});
custom.addEventListener('click', () => {
    tips.forEach(tip => {
        removeColor(tip);
    });
});
function check(inputs, input_id) {
    console.log('click');
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
