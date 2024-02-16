import moongose from "mongoose"
import bcrypt, { genSalt } from "bcrypt"
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
//antes de que ejecute la insercion vamos a hashear las contraseñas
usuarioSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await  bcrypt.hash(this.password, salt);
})
//comparamos las contraseñas, el detalle es que esta hasheada, pero bcrypt me permite hacer una comparacion
//a pesar de que los datos esten ocultos
usuarioSchema.methods.compararPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
const Usuario = moongose.model('Usuario',usuarioSchema)
export default Usuario;