// const http = require('https')

// const data = JSON.stringify({
//     'msg': 'Hello World!'
//   });
  
//   const options = {
//           hostname: '127.0.0.1',
//           port: 8000,
//           path: '/',
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//               'Content-Length': data.length,
//               'Access-Control-Allow-Origin': '*'
//           },
//       }
  
//   const req = http.request(options, (res) => {
//           console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//           console.log(`statusCode: ${res.statusCode}`)
//           res.on('data', (chunk) => {
//             console.log(`BODY: ${chunk}`);
//           });
//           res.on('end', () => {
//             console.log('No more data in response.');
//           });
//       })
  
//   req.on('error', (error) => {
//           console.error(error)
//       })
  
//   req.write(data)
//   req.end()