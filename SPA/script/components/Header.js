import {widget} from "./Card.js";

function Header(){
    const elem = document.createElement('div');
    elem.classList.add('header_component');
    elem.innerHTML = `
        <div class='logo'>
            <a href="\">
                <img src="https://png.pngtree.com/png-vector/20190322/ourlarge/pngtree-online-shop-logo-vector-template-design-illustration-png-image_860085.jpg" alt="">
            </a>
        </div>
        <nav class="nav">
            <ul>
            <li><a href="\">Home</a></li>
            <li><a href="#catalog">Catalog</a></li>
            </ul>
        </nav>
    `
    elem.append(widget);

    this.init = () => {
        return elem;
    }
}

export default new Header().init()