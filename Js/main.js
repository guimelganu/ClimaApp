//Manipulación del DOM
const toggle = document.querySelector(".toggle");
const menuDashboard = document.querySelector(".menu-dashboard");
const enlacesMenu = document.querySelectorAll(".enlace");
const humedad = document.querySelector('#humedad');
const maxTemp = document.querySelector('#MxTmp');
const minTemp = document.querySelector('#MinTmp');
const wind = document.querySelector('#wind');


/*THOR: Elementos para la conexion de la api */
const button = document.querySelector('.button')
const input = document.querySelector('.input')
const name = document.querySelector ('.name');
const desc = document.querySelector ('.desc');
const temp = document.querySelector ('.temp');

/*THOR: CONEXION A API CON FETCH PARA QUE MUESTRE TEMPERATURA, CIUDAD Y DESCRIPCION */
button.addEventListener ('click',function(){
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e118897ef97711f5e8168e4f854c5287'+'&lang=es')
        .then(Response => Response.json())
        .then (data =>{
            var nameValue = data ['name'];
            var tempValue = data ['main']['temp'];
            let tempC = [tempValue - 273.1] + "°";
            var descValue = data ['weather'][0]['description'];
            let humedadValue = data ['main']['humidity'] + '%';
            let maxTempValue = data ['main']['temp_max'];
            let maxTempC = [maxTempValue - 273.1] + '°';
            let minTempValue = data ['main']['temp_min'];
            let minTempC = minTempValue-273.1.toFixed(2) + '°';
            let windValue = data ['wind']['speed'] + 'km';
           
            name.innerHTML = nameValue;
           temp.innerHTML = tempC;
           desc.innerHTML = descValue;
           humedad.innerHTML = humedadValue;
           maxTemp.innerHTML = maxTempC;
           minTemp.innerHTML = minTempC;
           wind.innerHTML = windValue;
        })


    .catch( err => alert("Error Nombre de ciudad"))
})



toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(toggle.classList.contains("bx-menu")){
        toggle.classList.replace("bx-menu", "bx-x")
    }else {
        toggle.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        toggle.classList.replace("bx-menu", "bx-x")
    })
})

