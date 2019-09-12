document.addEventListener("keypress", displayKeyCodeAndValue)

function displayKeyCodeAndValue(e){
  let keyDiv = document.querySelector(".key");
  let keyCodeDiv = document.querySelector(".keycode");
  let infoDiv = document.querySelector(".info");
  
  keyDiv.innerHTML = key(e);
  keyCodeDiv.innerHTML = keyCode(e);

  keyDiv.classList.remove('hidden')
  keyCodeDiv.classList.remove('hidden')
  infoDiv.classList.add('hidden')
}

function keyCode(e){
  return e.charCode
}

function key(e) {
  return e.key
}