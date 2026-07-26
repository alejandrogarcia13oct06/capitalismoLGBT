// Las fechas disponibles en tu sistema
const fechasDisponibles = [
    "20260718",
    "20241120"
];

// Detectar fecha actual del sistema y usarla si existe, sino la más reciente
function obtenerFechaActual() {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaHoy = `${anio}${mes}${dia}`;
    
    // Si la fecha de hoy existe en la lista, usarla
    if (fechasDisponibles.includes(fechaHoy)) {
        return fechaHoy;
    }
    
    // Si no, usar la primera fecha (la más reciente)
    return fechasDisponibles[0];
}

const fechaPorDefecto = obtenerFechaActual();