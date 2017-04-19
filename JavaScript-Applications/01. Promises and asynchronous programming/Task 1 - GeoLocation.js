

function geoLocation() {
  let imgGeo = document.querySelector('#geo');
  let getLocation = new Promise((resolve, reject) => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        });
      });
    } else {
      reject('not supported')
    }

  });
  return (getLocation
                .then(data => {
                      imgGeo.setAttribute('src',`https://maps.googleapis.com/maps/api/staticmap?center=${data.latitude},${data.longitude}&zoom=17&size=500x500&sensor=true`);
                    })
                  );
}

geoLocation();
