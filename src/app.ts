let form = document.querySelector("#form")

let bill = <HTMLInputElement>document.querySelector('#bill')
let number_of_people = <HTMLInputElement>document.querySelector('#number_of_people') 

let tips : Array<HTMLInputElement> = Array.from(document.querySelectorAll('input[type="radio"]'))
let custom = document.querySelector('#custom') as HTMLInputElement

let total = document.querySelector('#total')
let tip_amount = document.querySelector('#tip_amount')
let reset = document.querySelector('#reset')

let alert_bill = document.querySelector('#alert_bill')
let alert_tip = document.querySelector('#alert_tip')
let alert_people_number = document.querySelector('#alert_people_number')


function setTip(value : string){
    localStorage.setItem('tip', value)
}

function getTip(){
    return localStorage.getItem('tip')
}

function tip_per_person(bill_to_pay : number, number_of_people : number, tip_to_pay : number){
    let total_tip : number = (((tip_to_pay)/100) * bill_to_pay)
    return (total_tip / number_of_people).toFixed(2)
}

function total_per_person(bill : number, number_of_people : number, tip : number){
    let tip_to_pay = tip_per_person(bill, number_of_people, tip)
    let total_to_pay = (bill/number_of_people).toFixed(2)
    console.log(tip_to_pay + total_to_pay)
    return (parseFloat(total_to_pay) + parseFloat(tip_to_pay)).toFixed(2)
}

function check(inputs: Array<HTMLInputElement>, input_id : string){
    inputs.forEach(item => {
        if (item.id = input_id){
            setColor(item)
        }
        else {
            console.log('execute')
            removeColor(item)
        }
    })
}

function setColor(item : HTMLInputElement){
    let parent = item.parentElement
    if(item.checked){
        parent.classList.remove('text-white')
        parent.classList.remove('bg-regal-blue')
        parent.classList.add('text-regal-blue')
        parent.classList.add('bg-select-blue')
    }
}

function removeColor(item : HTMLInputElement){
    let parent = item.parentElement
    parent.classList.remove('text-regal-blue')
    parent.classList.remove('bg-select-blue')
    parent.classList.add('text-white')
    parent.classList.add('bg-regal-blue')
}


tips.forEach(tip => {
    tip.addEventListener('click', () => {
        tips.forEach(tip => {
            removeColor(tip)
            custom.value = ''
        })
        setColor(tip)
        setTip(tip.value)
    })
})


custom.addEventListener('click', () => {
    tips.forEach(tip => {
        setTip(tip.value)
        removeColor(tip)
    })
})

form.addEventListener('keypress', (e:KeyboardEvent) => {
    if(e.key == "Enter"){
        let tip = getTip()
        total.textContent = String(total_per_person(parseInt(bill.value), parseInt(number_of_people.value), parseInt(tip)))
        tip_amount.textContent = tip_per_person(parseInt(bill.value), parseInt(number_of_people.value), parseInt(tip))
        console.log("The key is down!")
    }
})


