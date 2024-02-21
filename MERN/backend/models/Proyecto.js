import moongose, { Types } from 'mongoose';
const ProyectoSchema = moongose.Schema(
    {
        nombre:{
            Type:String,
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
        colaboradores:[
            {
                type:moongose.Schema.Types.ObjectId,
                ref:"Usuario"
            }
        ]
    }
)
const Proyecto = moongose.model("Proyecto",ProyectoSchema)
export default Proyecto