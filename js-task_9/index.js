let doc = document;
let head = doc.head;

doc.querySelector("html").setAttribute("lang", "en");

let metaCode = doc.createElement("meta");
metaCode.setAttribute("charset", "UTF-8");

let metaView = doc.createElement("meta");
metaView.setAttribute("name", "viewport");
metaView.setAttribute("content", "width=device-width, initial-scale=1.0");

let link = doc.createElement("link");
link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
link.setAttribute("rel", "stylesheet");

let title = doc.createElement("title");
title.innerHTML = "JS9";

let style = doc.createElement("style");
style.innerHTML = `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
    }
    h1, h2 {
        font-size: 36px;
        line-height: 48px;
        color: #212121;
    } 
    h1 {margin-bottom: 10px;}
    h2 {margin-bottom: 25px;} 
    button {
        background: none;
        border: 0;
    }
    .button {
        font-family: "Open Sans", sans-serif;
        border: 3px solid #FFC80A;
        padding: 17px 33px;
        font-weight: bold;
        color: #212121;
        text-transform: uppercase;
        border-radius: 50px;
    }      
    .page {
        min-width: 800px;
    }
    .container {
        width: 800px;
        margin: 0 auto;
        text-align: center;
    }
    .header {
        margin-top: 122px;
        margin-bottom: 55px;
    }
    .creator {
        margin-bottom: 122px;
    }
    .creator__wrapper {
        display: flex;
    }
    .creator__block {
        border: 1px solid #E8E9ED;
        padding: 81px;
    }
    .creator__block:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .creator__block:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .creator__block_active {
        border-color: #8F75BE;
        background: #8F75BE;
        color: #FFFFFF;
    }
    .creator_name {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 19px;
    }
    .creator__block_active .creator_name {
        color: #FFC80A;
    }
    .creator__block_active .button {
        color: #fff;
    }
    .creator__block p {
        margin-bottom: 58px;
    }
`

let headArray = [metaCode, metaView, link, title, style]
for(let i=0; i<headArray.length; i++) {
    head.appendChild(headArray[i])
};

//body
let body = doc.body;

let div = doc.createElement("div");

let divPage = div.cloneNode();
divPage.classList.add("page");

let header = doc.createElement("header");
header.classList.add("header");

let divContainer = div.cloneNode();
divContainer.classList.add("container");

let h1 = doc.createElement("h1");
h1.innerHTML = "Choose Your Option";

let p = doc.createElement("p");
p.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

let section = doc.createElement("section");
section.classList.add("creator");

let divContainerTwo = div.cloneNode();
divContainerTwo.classList.add("container");

let divCreatorWrapper = div.cloneNode();
divCreatorWrapper.classList.add("creator__wrapper");

let divCreatorBlock = div.cloneNode();
divCreatorBlock.classList.add("creator__block");

let divCreatorName = div.cloneNode();
divCreatorName.classList.add("creator_name");
divCreatorName.innerHTML = "Freelancer";

let h2 = doc.createElement("h2");
h2.innerHTML = "Initially designed to";

let pTwo = doc.createElement("p");
pTwo.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

let button = doc.createElement("button");
button.classList.add("button");
button.innerHTML = "Start here";

let divCreatorBlockTwo = div.cloneNode();
divCreatorBlockTwo.classList.add("creator__block");
divCreatorBlockTwo.classList.add("creator__block_active");

let divCreatorNameTwo = div.cloneNode();
divCreatorNameTwo.classList.add("creator_name");
divCreatorNameTwo.innerHTML = "Studio";

let h2Two = doc.createElement("h2");
h2Two.innerHTML = "Initially designed to";

let pThree = doc.createElement("p");
pThree.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

let buttonTwo = doc.createElement("button");
buttonTwo.classList.add("button");
buttonTwo.innerHTML = "Start here";



body.appendChild(divPage);

divPage.appendChild(header);
divPage.appendChild(section);

header.appendChild(divContainer);
divContainer.appendChild(h1);
divContainer.appendChild(p);

section.appendChild(divContainerTwo);
divContainerTwo.appendChild(divCreatorWrapper);
divCreatorWrapper.appendChild(divCreatorBlock);
divCreatorWrapper.appendChild(divCreatorBlockTwo);

divCreatorBlock.appendChild(divCreatorName);
divCreatorBlock.appendChild(h2);
divCreatorBlock.appendChild(pTwo);
divCreatorBlock.appendChild(button);

divCreatorBlockTwo.appendChild(divCreatorNameTwo);
divCreatorBlockTwo.appendChild(h2Two);
divCreatorBlockTwo.appendChild(pThree);
divCreatorBlockTwo.appendChild(buttonTwo);
