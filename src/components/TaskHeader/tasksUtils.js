
export const calculateUncompletedTasks = tasks => {
    return tasks.filter( task => !task.completed ).length;
}

export const getParseDate = (stringDate = null) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre', 'Diciembre'];
    const date = stringDate ? new Date(stringDate) : new Date();
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`.toUpperCase();
}