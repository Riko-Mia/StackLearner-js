// While loop 

var papaya = 'Papaya';
// var i = 0
// while(i< 10){
//     console.log('Riko mia')
//     i++;
// }

var isRunning = true

while(isRunning){
    var rand = Math.floor(Math.random()* 10 + 1)
if(rand === 9){
    console.log('You are winner.')
    isRunning = false
}else{
    console.log(`You have got ${rand}`)
}
}















