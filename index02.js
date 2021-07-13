const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    console.log(`inside create server`)
    res.setHeader('Content-Type', 'text/plain')
    res.end('Here is Create server')
})

server.listen(port, hostname, () => {
    console.log(`inside create server port= ${port}`)
})