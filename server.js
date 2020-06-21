const http = require('http')
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const app = new Koa()

app.use(cors())

const currencies = [
  { value: 1, title: 'Russian Rouble', code: 'RUR' },
  { value: 2, title: 'US Dollar', code: 'USD' },
]

const router = new Router()

router.get('/currencies', async (ctx, next) => {
  ctx.response.body = contacts
})

app.use(router.routes()).use(router.allowedMethods())

const PORT = process.env.PORT || 7070
const server = http.createServer(app.callback())
server.listen(PORT)
