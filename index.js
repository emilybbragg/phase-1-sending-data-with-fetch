// Add your code here
function submitData(name, email){
    const configureObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
    },
        body:JSON.stringify({
            "name": name,
            "email": email
        })
    };
    return fetch('http://localhost:3000/users', configureObject)
    .then(response => response.json()) 
    .then(body => addNewInfo(body.id))
    .catch(error => {
        let errorMessage=document.createElement("errorMessage")
        errorMessage.innerHTML='Unauthorized Access';
        document.body.append(errorMessage)
    })
}


function addNewInfo(newID){
    document.getElementsByTagName('body')[0].innerHTML = newID;
}