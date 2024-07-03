const submmitBtn = document.querySelector('#button');
const formSubmit = function (event) {
    // Slash refresh
    event.preventDefault()
    // Capturing values of inputs
    const userName = document.querySelector('#username').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    // console.log(`Username: `+userName)
    // console.log(`Title: `+ title)
    // console.log(`Content: `+ content)

// create object to store in local storage
    const objective = {
        userName: userName,
        title: title,
        content: content,
    } 
// console.log(objective)
storeData(objective) 
}

submmitBtn.addEventListener('click', formSubmit) 