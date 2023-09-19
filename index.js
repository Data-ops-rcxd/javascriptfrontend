console.log('whoa, un mensaje, wuau');
async function elpepe() {
    const json = await fetch('/myjson.json');
    const data = await json.json()
    console.log(data);

    console.log('vaina despues');
};
elpepe()

const div_app = document.getElementById('app')

div_app.innerHTML = `<p class='parrafo'></p>
<button id='btn'> botón</button>`

let cont = 0;
const button = document.querySelector('#btn');
const paraf = document.querySelector('.parrafo');

button.addEventListener('click', ()=>{
    paraf.innerHTML = cont
    cont++
})