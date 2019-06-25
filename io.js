var io = require('socket.io')();

var texters={}

io.on('connection', socket => {

    socket.on('add-text', (data) => {
        io.emit('add-text', data)
    })



    socket.on('yup', name=>{
        texters[socket.id] = name
        io.emit('update-texters-list', 
            Object.values(texters)
        )
    })

    socket.on('disconnect', ()=> {
        delete texters[socket.id]
        io.emit('update-texters-list', 
            Object.values(texters)
        )
    })
});



module.exports = io;