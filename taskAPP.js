
var readline = require('readline')


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})




function createTask(title, completed){
    var task = {
      title: title,
      completed: false
    }
    return task
}

function forEachElem(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(i,arr[i].title,arr[i].completed)
    }
}

var tasks = []
tasks.push(createTask("buy milk", false))
tasks.push(createTask("walk dog", true))




var stuff = []
rl.on('line', function(input) {
    var taskArr = input.split(" ")
    var newTask = taskArr.slice(1)
    if (taskArr[0].toUpperCase()=== "ADD"){
        stuff.push(createTask(newTask.join(" ")))
        console.log('Task has been added')
    }else if(taskArr[0].toLowerCase() === 'toggle' ) {
        for( var i = 0 ;i<stuff.length;i++){
            if (Number(newTask) === i ){
                stuff[i].completed = true
                console.log("Task has been completed")
            }   
        }
    } else if (input.toLowerCase()=== 'show all'){
        forEachElem(stuff)

    } else if(input.toLowerCase()=== 'show active'){
        for (var i = 0; i < stuff.length;i++){
            if (stuff[i].completed === false){
                console.log(stuff[i])
            }

        }
        
    } else if (input.toLowerCase()=== 'show completed'){
        for (var i = 0; i < stuff.length;i++){
            if (stuff[i].completed === true){
                console.log(stuff[i])

            }

        }
        
    }else {
        console.log('You must put ADD first')

    }
    forEachElem(stuff)
})