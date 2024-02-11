import {moongose} from  'mongoose';

const usuarioSchema = new moongose.Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim: true,
        },
        password:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        token:{
            type: String,
        },
        confirmado:{
            type: Boolean,
            default: false,
        },
          
    },
    {
        timetatmps: true,
    }
    
)
const Usuario = moongose.model('Usuario',usuarioSchema)
export default Usuario;