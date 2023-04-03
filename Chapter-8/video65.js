// inner function in javascript 

function something(greet, name){
    function getFname(){
        if(name){
            return name.split(' ')[0]// [0]= return fast index  //.pop() = return last index
        } else{
            return ''
        }
    }
    var message =greet + ' ' + getFname()
    console.log(message)
}
something('Good Morning', 'Riko ahmed')

// sayHi()  result = sayHi is not defined










