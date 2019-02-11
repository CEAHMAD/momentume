
function imagSuccess(response) {
    // Console.log(response.data.urls.regular);
    $('body').css("background-image",'url(' +response.data.urls.regular+ ')')
}

function imagFail(error){
    Console.log(error);
    
}

axios({

    method : 'get' ,
    url : 'https://api.unsplash.com//photos/random/?client_id=09e497896e34bdd0ae232b559dfb2ac302163635f82af9887fc1ca0200840e4f'
}) 
.then(imagSuccess);



  
