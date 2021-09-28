// const axios = require('axios');
    
// const data = {
//     name: 'Chandler Bing',
//     job: 'Transponster'
// };
    
// axios.put('https://reqres.in/api/users/2', data)
//     .then((res) => {
//         console.log(`Status: ${res.status}`);
//         console.log('Body: ', res.data);
//     }).catch((err) => {
//         console.error(err);
//     });



const request = require('request')

const option = {
    url:'https://reqres.in/api/users/2',
    json:true,
    body:{
        name:'Ross Gellar',
        job:'paneintologist'

    }

}

request.put(option,(err,res,body)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log(res.statusCode);
    console.log(body);
})