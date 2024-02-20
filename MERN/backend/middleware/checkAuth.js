const checkAuth = (req, res, next) => {
    console.log("desde el check")

    next()//-> esto me deja pasarme al siguiente metodo del middleware
    //es como hacer saltos 
}
export default checkAuth