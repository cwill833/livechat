var socket = io();

socket.on('add-text', (data) =>{
    addText(data)
    // var message = textInput.value;
    // var x = document.createElement('p')
    // x.innerHTML = message
    // textarea.appendChild(x)
    // textInput.value = ''
  })

socket.on('update-texters-list', (name)=>{
    var texterList = '<li> ' + name.join('</li><li>') + '</li>'
    texters.innerHTML = texterList
  })

var name = prompt('Please enter your name')

var textarea = document.getElementById('userText')
var send = document.querySelector('button')
var textInput = document.getElementById('textBox')
var texters = document.getElementById('whosOnline')
socket.emit('yup', name)

send.addEventListener('click', ()=>{
    socket.emit('add-text', {
        name,
        str: textInput.value,

    })
    // var message = textInput.value;
    // var x = document.createElement('p')
    // x.innerHTML = message
    // textarea.appendChild(x)
    // textInput.value = ''
})

function addText ({name, str}){
    var message = str;
    var x = document.createElement('p')
    x.innerHTML = name + ': ' + message 
    textarea.appendChild(x)
    textInput.value = ''
}
