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

const usersRoute = {
    method: 'POST',
    url: '/users',
    schema: {
        body: {
            username: {
                type: 'string'
            },
            password: {
                type: 'string'
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    userId: {
                        type: 'string'
                    },
                    username: {
                        type: 'string'
                    }
                }
            }
        }
    },
    handler: async (request, reply) => {
        console.log('request ->', request.body)
        const requestBody = { ...request.body, mergedObject: true}
        reply.send({
            ...requestBody,
            userId: '00123'
        })
    }
}

fastifyApp.route(usersRoute)

// fastifyApp.post('/users', async (request, reply) => {
//     console.log('request ->', request.body)
//     const requestBody = { ...request.body }
//     reply.send(requestBody)
// })

fastifyApp.listen(port, hostname, () => {
    console.log(`inside create server port= ${port}`)
})