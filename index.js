const Fastify = require('fastify')
const buildApp = (options = {}) => {
    const app = Fastify()

    app.get('/', async (Request, reply) => {
        reply.send('OK')
    })

    return app
}
module.exports = buildApp