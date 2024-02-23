import moongose, { Types } from 'mongoose';
const ProyectoSchema = moongose.Schema(
    {
        nombre:{
            type:String,
            trim:true,
            required:true
        },
        description:{
            type:String,
            trim:true,
            required:true
        },
        fechaEntrega:{
            type:Date,
            default:Date.now()
        },
        creador:{
            type:moongose.Schema.Types.ObjectId,
            ref:"Usuario"
        },
        cliente:{
            type:String,
             trim: true,
             required:true
        },
        colaboradores:[
            {
                type:moongose.Schema.Types.ObjectId,
                ref:"Usuario"
            }
        ]
    },
    {
        timestamps:true//-->crea las columnas de created at y updated at
    }
)
const Proyecto = moongose.model("Proyecto",ProyectoSchema)
export default Proyecto