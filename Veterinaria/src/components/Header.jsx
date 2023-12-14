/*
las props de un componente, solamente pueden ser enviados
del padre hacia el hijo

se pueden comunicar al reves pero necesitarias de funciones auxiliares
no es de forma directa
*/
function Header (){
    //mediaqueryes se aplica por medio de md:...argumentos...
    return (
        <>
           <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento Pacientes {""}
            <span className="text-indigo-600">Veterinaria</span></h1>
        </>
    )
}
export default Header;