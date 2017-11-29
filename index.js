const request = require('request')
const http = require('http')
const url = require('url')

http.createServer(function(req, res)
{
    const query = url.parse(req.url, true).query
    console.log(query)
    res.setHeader('Access-Control-Allow-Origin', '*')
    if( ! query.url)
    {
        res.writeHead(404, 'Not Found')
        res.end('<h1>no url</h1>')
    }
    else
    {
        const x = request(query.url)
        req.pipe(x)
        x.pipe(res)
    }
}).listen(1020, function()
{
    console.log(`proxy online : http://localhost:1020/`)
})