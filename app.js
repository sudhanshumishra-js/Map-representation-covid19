function updatemap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                longitude = element.longitude
                latitude = element.latitude
                cases = element.infected
                if (cases > 255) color = "rgb(255,0,0)";
                else {
                    color = `rgb(${cases},0,0)`;
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map)
                    //Here i wanted to implement on click event which shows a popup i.e; city name, number of cases etc.  
            });
        })
}
var interval = 20000;
setInterval(updatemap(), interval);