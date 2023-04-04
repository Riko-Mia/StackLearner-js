// Infinity for loop 


for(; ;){
    var rand = Math.floor(Math.random()* 10 + 1)
if(rand === 9){
    console.log('You are winner.')
    break
}else if(rand === 7 && rand === 4){
    continue
    
} else{
    console.log(`You have got ${rand}`)
}
}







