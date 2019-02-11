

axios ({

    method : 'get' ,
    url : 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=fc488fe9ca6307bfc0b1a7b405b77cda'

})

.then((response) => {

     console.log(response); 
    
    const temp = response.data.main.temp ;
    $('body').append((`<div>${temp}</div>`));
    const city = response.data.name ;
    $('body').append((`<div>${city}</div>`));
    const weather = response.data.weather[0].main ;
    $('body').append(`<h2>${weather}</h2>`)
  })


  .catch((error) => {
    console.log(error);
  });




