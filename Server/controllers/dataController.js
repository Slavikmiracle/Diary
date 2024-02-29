const {Diary} = require('../models/models')

class DataController{
    async create(req, res){ 
        const {mark} = req.body
   //     console.log(mark)
        const type = await Diary.create({mark})
        return res.json(type)

    }

    async getAll(req, res) {
        const diares = await Diary.findAll()
        return res.json(diares)

    }

   async getAll_orderBy(req, res) {
        const diares = await Diary.findAll(
            {order: [ ['mark','DESC'] ]}
        )
        return res.json(diares)

    }


    async getOne(req, res){
   //1     res.json('asdasd')
            const query = req.query
            res.json(query)
        }

        
    async getOne2(req, res){
                const { id} = req.params
                 const qwe = await Diary.findAll({where:{id}})
                 return res.json(qwe)
             }
}

module.exports = new DataController()