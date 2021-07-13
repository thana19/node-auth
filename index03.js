const Fastify = require('fastify')

const hostname = 'localhost'
const port = 3000

const fastifyApp = Fastify({
    logger: true
})

// console.log('fastityApp ->', fastifyApp)

fastifyApp.get('/', async (request, reply) => {
    reply.send('OK')
})

fastifyApp.post('/users', async (request, reply) => {
    console.log('request ->', request.body)
    const requestBody = { ...request.body }
    reply.send(requestBody)
})

fastifyApp.listen(port, hostname, () => {
    console.log(`inside create server port= ${port}`)
})