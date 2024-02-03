/**
 * 
 * @param {*} req -->aquello que tu envias al servidor 
 * @param {*} res -->la respuesta del servidor hacia el cliente
 */
export default async function handler(req, res) {
    if(req.method == "POST"){
        console.log(req.body)
        res.json({metodo:"METODO POST"})
    }
}