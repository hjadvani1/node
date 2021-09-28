const mongoose = require('mongoose')


main().catch(err=>console.log(err))


async function main()
{
    await mongoose.connect('mongodb://localhost:27017/28sep')

   
//         const publisherSchema = new mongoose.Schema(
//         {
//             companyName: String,
//             firstParty: Boolean,
//             website: String
//         })

        
//         const Publisher = mongoose.model('Publisher', publisherSchema);

        
//         const gameSchema = new mongoose.Schema(
//         {

//             title: String,
//             publisher: publisherSchema
//         })

        
//         const Game = mongoose.model('Game', gameSchema);

//         async function createGame(title, publisher) {
//             const game = new Game({
//                 title,
//                 publisher
//             });
        
//             const result = await game.save();
//             console.log(result);
//         }
        
//         async function updatePublisher(gameId) {
//             const game = await Game.findById(gameId);
//             game.publisher.companyName = 'Epic Games';
//             game.publisher.website = 'https://epicgames.com/';
//             game.save();
//         }
        
//         updatePublisher('61529c8c7992238c9fbd1ddc');
        

        // createGame('Rayman', new Publisher({ companyName: 'Ubisoft', firstParty: false, website: 'https://www.ubisoft.com/' }))




}