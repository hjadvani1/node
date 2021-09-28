const querystring = require('querystring')

const urlex = {

    user:'Eren',
    access:true,
    role:['titan','founding_titan','executioner']
}

let parsequery = querystring.stringify(urlex,", ", ":")
console.log(parsequery);
parsequery=querystring.stringify(urlex , '&&&','==')
console.log(parsequery);


