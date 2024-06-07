fetch('http://api.weatherapi.com/v1/current.json?key=0c7d514982b34fc7aef231010240606&q=Sao%20paulo')
  .then(response => {
    
    return response.json();
  })
  .then(data => {
    console.log('local:', data.location.name);
    console.log('clima:', data.current.temp_c);
    
  
    let table = document.getElementById('weather-table');
    let row = table.insertRow();
    let locationCell = row.insertCell(0);
    let temperatureCell = row.insertCell(1);
    locationCell.textContent = "Local: "+data.location.name;
    temperatureCell.textContent = "Clima: "+data.current.temp_c+"ºC";
})

