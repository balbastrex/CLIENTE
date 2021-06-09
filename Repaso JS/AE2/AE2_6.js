const users = ['Pedro', 'Juan', 'Manolo', 'Javier', 'Pablo', 'Jorge', 'Antonio'];
const blacklisted = ['Pedro', 'Juan', 'Manolo', 'Javier'];



const notBanned = (todos, baneados) => {
    let noBaneados = [];
    todos.filter(usuario => baneados.includes(usuario) ? console.log(`${usuario} está baneado`) : noBaneados.push(usuario));
    return noBaneados;
}

// const notBanned = (todos, baneados) => {
//     const noBaneados = todos.filter(usuario => !baneados.includes(usuario));
//     return noBaneados ;
// }

console.log(`Los usuarios que no han sido baneados son: ${notBanned(users, blacklisted)}`);
