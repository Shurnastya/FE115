export default async function getData(){
    let rez = [];

    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => json.map(data => rez.push(data)));

    rez = this.initObj(rez);
    return rez;
};