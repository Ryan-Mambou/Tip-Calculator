let bill = <HTMLInputElement>document.querySelector('#bill')
let number_of_people = <HTMLInputElement>document.querySelector('#number_of_people') 

let tips = Array.from(document.querySelectorAll('input[type="radio"]'))
let custom = document.querySelector('#custom')

let total = document.querySelector('#total')
let tip_amount = document.querySelector('#tip_amount')
let reset = document.querySelector('#reset')

let alert_bill = document.querySelector('#alert_bill')
let alert_tip = document.querySelector('#alert_tip')
let alert_people_number = document.querySelector('#alert_people_number')

tips.map(tip => {
    console.log(typeof tip)
    setColor(<HTMLInputElement>tip)
})

console.log(tips)

function setColor(item : HTMLInputElement){
    let parent = item.parentElement
    parent.classList.remove('text-white')
    parent.classList.remove('bg-regal-blue')
    parent.classList.add('text-regal-blue')
    parent.classList.add('bg-select-blue')
}

