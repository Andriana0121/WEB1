let colors = ['red', 'green', 'blue'];

function checkColor() {
    let a = prompt('Introdu o culoare: ');
    if (a == 'red') {
        console.log(colors.indexOf('red'));
    } else if (a == 'green') {
        console.log(colors.indexOf('green'));
    } else if (a == 'blue') {
        console.log(colors.indexOf('blue'));
    } else {
        console.log(-1);
    }
}
checkColor(colors);