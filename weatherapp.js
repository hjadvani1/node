const http = require('http')
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=ec4cef81a5547492ec5205cf651eafd9'

const server = http.createServer((req, res)=>
{
    const request = require('request')
    request(url,(err,response,body)=>
    {
        const data = JSON.parse(body)
        res.write('<html><body>')
        res.write('<h1>'+'City Name : ' + data['name'] + '<br>' +  '</h1>')
        res.write('<h2>'+'Tempreture : ' + data.main['temp'] + '<br>' +  '</h2>')
        res.write('<h2>'+'Sunset Time : ' + new Date(data.sys['sunset']+1000) + '<br>' +  '</h2>')
        res.write('</body></html>')
        // res.end('jbnsjbfgk')
        
    })
}).listen(8000)