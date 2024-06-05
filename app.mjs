import { externalFunction } from "./external.mjs";


externalFunction();

function scopeTest(){
    const myName = "Derek"; 
    //cant change constant
    //myName = "Bob"; 
    console.log(myName);

    if(true){
        //let didnt work, var work cuz var is global 
        //let age = 20;
        var age = 20;
    }
    console.log(age);
}

scopeTest();
