import {toggle, menuDashboard, enlacesMenu,
     humedad, maxTemp, minTemp, wind, button, input, name, desc, temp} from "./constantes.js" 

/*THOR: CONEXION A API CON FETCH PARA QUE MUESTRE TEMPERATURA, CIUDAD Y DESCRIPCION */
button.addEventListener ('click',function(){
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e118897ef97711f5e8168e4f854c5287'+'&lang=es')
    .then(Response => Response.json())
        .then (data =>{
            var nameValue = data ['name'];
            var tempValue = data ['main']['temp'];
            var tempC = (tempValue - 273.1).toFixed(2);
            var descValue = data ['weather'][0]['description'];
            var humedadValue = data ['main']['humidity'] + '%';
            var maxTempValue = data ['main']['temp_max'];
            var maxTempC = (maxTempValue - 273.1).toFixed(2) + '°';
            var minTempValue = data ['main']['temp_min'];
            var minTempC = (minTempValue-273.1).toFixed(2) + '°';
            var windValue = data ['wind']['speed'] + 'km';
            
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
    
   
    
    

    /* THOR: Elementos del canvas para uso del Chart.js, cree el canvas y añadi el id mychart para poder anexar los datos dentro de una const */
        
      
    const ctx = document.getElementById("myChart").getContext("2d");
 


    const myChart = new Chart (ctx,{
        type:"line",
        data:{
            labels:['Temp Actual', 'Temp Minima', 'Temp Maxima'],
            datasets:[{
                label:'Temperatura',
                data: [28,20,35],
                backgroundColor:[
                    'rgb(68, 229, 234 )',
                ]
            }]
        }
    });
  

    
    
    toggle.addEventListener("click", () => {
        menuDashboard.classList.toggle("open")
        const search = document.getElementById ('search')
        search.style.display= "block"
        
        if(toggle.classList.contains("bx-menu")){
            toggle.classList.replace("bx-menu", "bx-x")
        }else {
            toggle.classList.replace("bx-x", "bx-menu")
        }
    })
    
    