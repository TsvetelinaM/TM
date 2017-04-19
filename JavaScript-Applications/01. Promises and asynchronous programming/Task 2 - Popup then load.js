function popupThenLoad() {
  let div =  document.createElement('div');
  div.innerHTML = 'This is just a test!';
  div.style.display = 'none';
  document.body.appendChild(div);
  window.addEventListener('load', function() {

    let getNewSite = new Promise((resolve, reject) => {
      div.style.display = '';
      setTimeout(function() {
        resolve('http://google.com/');
      },2000);
    });


    getNewSite
      .then(data =>{
       window.location.href = data;
     });

  });
}
popupThenLoad();
