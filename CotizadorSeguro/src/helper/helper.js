export function obtenerDiferencia(year){
    return new Date().getFullYear() - year;
}
export function calcularMarca(marca){
    
    let incremento
    switch (marca) {
        case 'europeo':
            incremento = .30;
            break
        case 'americano':
            incremento = .15;
            break
        case 'asiatico':
            incremento = .05;
            break
        default:
            break
    }
   
    return incremento
}
export function calcularPlan(plan){
    return plan ==="1"? 1.20 : 1.50
}
export function formatearCantidades (cantidad) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cantidad)
}