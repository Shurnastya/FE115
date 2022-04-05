import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App(){
    const meta = document.createElement('meta');
    meta.setAttribute('charset', 'UTF-8');

    const metaView = document.createElement('meta');
    metaView.setAttribute('name', 'viewport');
    metaView.setAttribute('content', 'width=device-width, initial-scale=1.0');

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', './style/style.css');

    const linkSpin = document.createElement('link');
    linkSpin.setAttribute('rel', 'stylesheet');
    linkSpin.setAttribute('href', './style/spinner.css');

    const title = document.createElement('title');
    title.innerHTML = 'Title';

    document.head.append(meta, metaView, link, linkSpin, title);

    const divApp = document.createElement('div');
    divApp.setAttribute('class', 'app');

    document.body.append(divApp);

    this.elem = document.createElement('div');
    this.elem.innerHTML = `
    <h2>Header</h2>
    <h2>Main</h2>
    <h2>Footer</h2>
    `

    const render = (...elems) => {
        elems.forEach(elem => divApp.append(elem));
    }

    this.init = () => {
        render(Header, Main, Footer);
    }
}

export default App;