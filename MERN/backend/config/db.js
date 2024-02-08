import { Mongoose } from "mongoose";
const conectar = async () => {
    try{
        const connection = await Mongoose.connect(
            "mongodb+srv://derianmolina:7474@cluster0.tf92zdd.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
          
        )
        const url = `${connection.connection.host}:${connection.connection.port}/${connection.connection.name}`
       
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}
export default conectar; 