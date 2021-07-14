const { TestWatcher } = require('jest')
const buildApp = require('./index')

test('shoud return ok', async () => {
    expect.assertions(2)
    const appOption = {
        logger:true
    }
    const app = buildApp(appOption)

    const result = await app.inject({
        method: 'GET',
        url:'/'
    })

    expect(result.statusCode).toBe(200)
    expect(result.body).toBe('OK')
})


