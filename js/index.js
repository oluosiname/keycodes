document.addEventListener("keypress", displayKeyCodeAndValue)

function displayKeyCodeAndValue(e){
  let keyDiv = document.querySelector(".key");
  let keyCodeDiv = document.querySelector(".keycode");
  
  keyDiv.innerHTML = key(e);
  keyCodeDiv.innerHTML = keyCode(e);
}

function keyCode(e){
  return e.charCode
}

function key(e) {
  return e.key
}