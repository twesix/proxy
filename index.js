const koa = require('koa')
const request = require('request')

const app = new koa()

app.use(async function(ctx)
{
    const url = ctx.query.url
    ctx.set('Access-Control-Allow-Origin', '*')
    if( ! url)
    {
        ctx.body = 'no url'
    }
    else
    {
        ctx.body = request.get(url)
    }
})

app.listen(1020)