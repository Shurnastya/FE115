function Footer(){
    const elem = document.createElement('div');
    elem.classList.add('footer_component');
    elem.innerHTML = `
        <h3>Phone: 1234567</h3>
        <h3>Adress: Belarus</h3>
        <h3>Email: abc@gmail.com</h3>
    `
    this.init = () => {
        return elem;
    }
}

export default new Footer().init()