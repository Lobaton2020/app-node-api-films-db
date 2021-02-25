import { Film } from '../db.js'
export default {
    All: async ( req,res)=>{
        res.json({
            status:200,
            data: await Film.findAll()
        })
    },
    Get: async (req,res)=>{
        const { id } = req.params
        res.json({
            status:200,
            data: await Film.findByPk(id)
        })
    },
    Post: async (req,res)=>{
        const result = await Film.create(req.body)
        res.json({
            status:200,
            data:result
        })
    },
    Put: async (req,res)=>{
        const { id } = req.params
        const result = await Film.update(req.body,{
            where:{ id }
        })
        res.json({
            status:200,
            message:"Se ha modificado correctamente"
        })
    },
    Delete: async (req,res)=>{
        const { id } = req.params
        const result = await Film.destroy({
            where:{ id }
        })
        res.json({
            status:200,
            message:"Se ha eliminado correctamente"
        })
    },

}