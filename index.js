console.log("Hello world")

const dateElement = document.getElementById('date')

let currentDate = new Date();

let dateOption = { year: 'numeric', month: 'long', day: 'numeric' }

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOption)