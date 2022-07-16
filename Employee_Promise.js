function getTime() {
    let date = new Date;
    return date.getHours()+' hr : '+date.getMinutes()+' min : '+date.getSeconds()+' sec';
}

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function makePromiseCall(methodType, url, async = true, data = null){
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            //console.log("State Change Called, Ready State: " + xhr.readyState + " Status : " + xhr.status +" "+getTime());
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 201) {
                    resolve(xhr.responseText);
                }
                else if (xhr.status >= 400) {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    })
                    console.log("Handle 400 Client Error 500 Server Error "+getTime());
                }
            }
        }
        xhr.open(methodType, url, async)
        if (data) {
            console.log("Data To Be Added : " + JSON.stringify(data));
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
        }
        else {
            xhr.send();
        }
        console.log(methodType + " Request Send To Server");
    });
}

    const getURL = "http://localhost:3000/employee/1";
    makePromiseCall("GET", getURL, true)
    .then (responseText =>{
        console.log("Get Data "+responseText);
    })
    .catch(error =>{console.log("GET Error Status "+JSON.stringify(error))});
    

    const deleteURL = "http://localhost:3000/employee/4";
    makePromiseCall("DELETE", deleteURL, false)
    .then (responseText =>{
        console.log("Delete Data "+responseText);
    })
    .catch(error =>{console.log("DELETE Error Status "+JSON.stringify(error))});  
    
    const postURL = "http://localhost:3000/employee/";
    const EmpData = {"name":"Guna","salary":"35000"};
    makePromiseCall("POST", postURL, true, EmpData)
    .then (responseText =>{
        console.log("Added Data "+responseText);
    })
    .catch(error =>{console.log("POST Error Status "+JSON.stringify(error))});  
