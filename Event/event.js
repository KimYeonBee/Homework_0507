const button = document.querySelector('button');
button.addEventListener('click', function() {alert('click!') });

const checkboxes = document.querySelectorAll("input[type='checkbox'][name='check_group']");
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (e) => { //e로 이벤트를 감지
        if (e.target.checked) { //e.target은 이벤트가 발생한 객체 (체크 표시가 변하는 객체)
            console.log(`${e.target.value}가 선택됨`);
        } else {
            console.log(`${e.target.value}가 해제됨`);
        }
    });
});

const radios = document.querySelectorAll("input[type='radio'][name='food']");
radios.forEach(radio => {
    radio.addEventListener('change', (e)=>{
        console.log(`${e.target.value}이 선택됨`);
    });
});

const select = document.querySelector("select");
select.addEventListener('change', (e)=> {
    console.log(`${e.target.value}가 선택됨`);
});

const submit = document.querySelector("button");
submit.addEventListener('click', () => {
    // FoodDisplay();
    // GenderDisplay();
    DayDisplay();
})

const DayDisplay=()=>{
    const day = document.getElementById('select');
    dayValue = day.options[day.selectedIndex];
    console.log(dayValue);
    document.querySelector('#day').textContent
}



