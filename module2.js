
var DataService=function(){
    var obj={};
    console.log("Inside Data Service");
    obj.doTask1=function(){
        console.log("Doing task1");
    }
    obj.doTask2=function(){
        console.log("Doing task2");
    }
    return obj;
}();
DataService.doTask1();
DataService.doTask2();