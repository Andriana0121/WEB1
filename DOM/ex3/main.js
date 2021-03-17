let elem = document.getElementById('num');
elem.addEventListener(`blur`, func); 
function func(){
    if (Number.isInteger(elem.value) == false) {
    elem.value = 0;
  }
};