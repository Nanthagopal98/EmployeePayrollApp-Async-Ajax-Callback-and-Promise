let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function makeAJAXCall(methodType, url, callback, async = true, data = null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log("State Change Called, Ready State: "+xhr.readyState+" Status : "+xhr.status);
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 201){
                callback(xhr.responseText);
            }
            else if (xhr.status >= 400){
                console.log("Handle 400 Client Error 500 Server Error");
            }
        }
    }
    xhr.open(methodType, url, async)
    if(data){
        console.log("Data To Be Added : "+JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }
    else{
        xhr.send();
    }
    console.log(methodType+" Request Send To Server");
}

    const getURL = "http://localhost:3000/employee/1";
    function getEmpDetails(data){
        console.log("Get Data "+data);
    }
    makeAJAXCall("GET", getURL, getEmpDetails);

    const deleteURL = "http://localhost:3000/employee/4";
    function deleteEmp(data){
        console.log("Delete Emp "+data);
    }
    makeAJAXCall("DELETE", deleteURL, deleteEmp, false);  
    
    const postURL = "http://localhost:3000/employee/";
    const EmpData = {"name":"Madhu","salary":"35000"};
    function addEmp(data){
        console.log("Added Data "+data);
    }
    makeAJAXCall("POST", postURL, addEmp, true, EmpData); 