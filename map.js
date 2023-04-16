//location 
const city = "vizianagaram";

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=dab1e0cfb7b1ffef8e90df4ddce810d3&q=${city}`);

const data = await response.json();

const loc = data.coord;

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: loc.lat, lng: loc.lon };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
  
  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  
  // The marker, positioned at Uluru
  
  //vizianagaram
  addMarker({ lat: 18.318314736203938, lng: 83.88606449180169});
  addMarker({ lat: 19.482445566640212, lng: 84.88051302391186});
  addMarker({ lat: 20.51283249665548, lng:85.5453028432397});
  addMarker({ lat: 16.717366113026223, lng:80.65188819379861});
  addMarker({ lat: 17.67017887226001, lng:78.44833190433162});
  addMarker({ lat: 18.110104280430473, lng: 83.41009206309374 });
  addMarker({ lat: 17.41131108795743, lng:78.39443538027842});
  addMarker({ lat: 17.7211, lng: 83.3018 });
  addMarker({ lat: 17.68944159120023, lng: 83.20010364826884 });
  addMarker({ lat: 17.683477103520392, lng: 83.19444521335485 });
  
  //bangalore farming

  addMarker({ lat: 12.9716, lng: 77.5946 });
  addMarker({ lat: 12.96505507347717, lng: 77.57226306814853 });
  addMarker({ lat: 12.931923227198071, lng: 77.5978968844699 });
  addMarker({ lat: 12.919033077166164, lng: 77.6031370794927 });
  addMarker({ lat: 12.919788750995345, lng: 77.577117144698 });
  addMarker({ lat: 12.916009199289823, lng: 77.52554385811179 });
  addMarker({ lat: 12.903662265345918, lng: 77.56251117631645 });
  addMarker({ lat: 12.903914249684883, lng: 77.54751743886281 });
  addMarker({ lat: 12.947519945217527,  lng: 77.58039455846429 });
  addMarker({ lat: 12.957249898070396,  lng: 77.5659417702618 });
  addMarker({ lat: 12.941551537391911,  lng: 77.58113801050534 });
  addMarker({ lat: 12.955275315892019,  lng: 77.58417725855406 });
  addMarker({ lat: 12.923189448752996, lng: 77.53871327139599 });
  addMarker({ lat: 12.921775820476897,  lng: 77.66509618180271 });
  addMarker({ lat: 12.959988923518452,  lng: 77.57221135460996 });
  addMarker({ lat: 12.946832536064376,  lng: 77.58818454838693 });
  addMarker({ lat: 12.903711101932913,  lng: 77.56530795616258 });
  addMarker({ lat: 12.916001057038757,  lng: 77.52386279878453 });
  addMarker({ lat: 12.929878262744271, lng: 77.54268253745735 });
  addMarker({ lat: 12.919243032353055,  lng: 77.60368871240976 });
  addMarker({ lat: 12.896198479275093,  lng: 77.59418233002513 });

  

  
  function addMarker(loc) {
    const marker = new AdvancedMarkerView({
      map: map,
      position: loc,
    });
  }
}
initMap();