import { mongoose } from "mongoose";

const conectar = async () => {
    try{
        console.log(process.env.MONGO_URI)
        const connection = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
          
        )
        const url = `${connection.connection.host}:${connection.connection.port}/${connection.connection.name}`
     //   console.log(`Conectado a la base de datos en ${url}`);
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}
export default conectar; 