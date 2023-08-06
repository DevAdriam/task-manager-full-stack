let count = 0;

let A = _ => ++count;
let B = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(++count)
        }, 1000);
    })
}
let C = _ => console.log(++count);

(async() => {
    A();
    await B();
    C();
})();