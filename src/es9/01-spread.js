const user = {
    username: "jax",
    edad:10,
    country: "CO"
}
const {username, ...values} = user;
console.log(username);
console.log(values);

const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }
