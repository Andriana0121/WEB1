/*for (let count = 0; count <= 100; count = count + 2 ) {
     if(count % 2 == 0 ) {
         console.log(count) 
     }
}*/
/*while(true){
	console.log("Hello")
}*/
/* var c=["red","yellow"];
  function changeColor(){
        var randomcolor = c[Math.floor(Math.random() * c.length)];
        document.body.style.backgroundColor = randomcolor;
            
        }
function start(){
    setInterval(changeColor, 3000);
  }
  
  start()*/
 /*function change_color(obj){
	obj.value && (document.body.style.backgroundColor = obj.value);
       obj.src && (document.body.style.backgroundImage = 'url('+obj.src+')');
     }
*/





/*
if (number > 0) {
  alert( '1' );
} else if (number < 0) {
  alert( '-1' );
} else  if (number = 0){
  alert( '0');
} else{
	alert('Error');
}*/

//2///////////
//if (!(age >= 14 && age <= 90))

//if (age < 14 || age > 90)
///////////////////////////////////////////

////////////33333
/*let username = 'Andriana',
    password = '123123',
    usernameInput = document.querySelector('#username'),
    passwordInput = document.querySelector('#password')
    submit = document.querySelector('#submit');

submit.addEventListener('click', function(e) {
    e.preventDefault();

    if (passwordInput.value == '' || usernameInput.value == '') {
        alert('Ошибка валидации!')
    } else if (usernameInput.value !== username) {
        alert('Неправильный username!')
    } else if (passwordInput.value !== password) {
        alert('Неправильный пароль!')
    } else {
        alert('Привет!')
        return;
    }
    */
    /////4444/////
function printEvenNums(){
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);
    let sum = 0;
 	for(i=start; i<=end; i++){
          if(i % 2 == 0){
          	sum += 0  
          }
        }
        console.log(sum);    
      }