// fucntion that param string
const run = (message : string) => {
    if(typeof message == "string"){
        console.log(message);
        return;
    }
    console.log("the parameter type is not string");
    return;
}

//execute
run("Hellow world")