let button = document.querySelector("button");
button.addEventListener("click", cargarCiudad);

function cargarCiudad () {  
   let ciudad = document.querySelector("input").value;
   if(ciudad == "") {
      alert("La ciudad no ha sido ingresada");
   } else {
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
         document.querySelector(".container").style.visibility = "visible";
         document.querySelector("#ciudad").textContent = data.name;
         document.querySelector("#temperatura").textContent = data.main.temp;
         document.querySelector("#grados").innerHTML = "<sup>°C</sup>";
         document.querySelector("#wicon").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
         document.querySelector("#descripcion").textContent = data.weather[0].main;         
      }).fail ( function(jqXHR, textStatus, erroThrown) {
         if(jqXHR.status === 404) {
            alert("La ciudad ingresada es inexistente");
         }
      }) 
   }
   document.querySelector("input").value = "";
}
