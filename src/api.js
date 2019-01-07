const people = [
    { name: 'David', age: 23},
    { name: 'Ku', age: 33},
    { name: 'Beo', age: 51}
]

export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(people)
        }, 3000)
    })
}