function successcallback(stream) {
   
}

function errorcallback(error){
  
}

  navigator.webkitGetUserMedia({ audio: true },successcallback,errorcallback)
