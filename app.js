
const mongoose = require('mongoose')


const ObjectId = mongoose.Schema.Types.ObjectId;

main().catch(err=>console.log(err))


async function main()
{
    await mongoose.connect('mongodb://localhost:27017/27sep')

        // embedded documents
        const studiSchema = new mongoose.Schema({

            companyname :  String,
            website :String
        })

        const Studio = mongoose.model('Studio', studiSchema)

        const animeSchema = mongoose.Schema(
            {
                title : String,
                studio : studiSchema
            }
        )
        
         const anime = mongoose.model('anime',animeSchema)

        async function createAnime(title, studio)
         {
             const anime1 = new anime(
                 {
                     title,
                     studio
                 }
             )
             const result = await anime1.save()
             console.log(result);
             
         }

         async function updateAnime(animeID)
         {

                const anime2 = await anime.findById(animeID)
                anime2.studio.companyname = 'A-1 Pictures'
                anime2.studio.website="https://a1p.jp/"
                anime2.save()

         }

        
         createAnime('AttackOntitan', new Studio ({companyname : 'Mappastudio', website:'http://www.mappa.co.jp/mappa_e/works.html'}))
        updateAnime('61529a277601dcbb7133630c')
        

}