class User{

    constructor(data) {
        if(data.name.length > 0 && data.email.length > 0 && data.address.length > 0 && data.phone.length > 0) this.data = data;
    };

    edit(data) {
        Object.assign(this.data, data)
    };
};

class Contacts{

    constructor() {
        this.id = 0;
        this.contacts = [];
    };

    add(data) {
        if(data.name.length > 0 && data.email.length > 0 && data.address.length > 0 && data.phone.length > 0)  {
        ++this.id;

            let user = new User(data);
            user.data.id = this.id;
            this.contacts.push(user);
        };
    };

    edit(id, data) {
        
        let userFind = this.contacts.find(user => {
            if(user.data.id == id) return user
        });

        userFind.edit(data);
    };

    remove(id) {
        this.contacts = this.contacts.filter(user => user.data.id != id ? user : null)
        return true;
    };

    getContacts() {
        return this.contacts;
    };

    getUser() {
        return this.user;
    };

};

class ContactsApp extends Contacts{

    constructor() {
        super();
        this.init();
    };

    initObj(rez){
        return rez.map(d => {
            let {id: id, name: name, phone: phone, email: email, address:{city, street}} = d;
            let address = `${city} ${street}`;

            this.add({id, name, phone, email, address});
        });

    };

    async init() {

        let formContacts = document.createElement('form');
        formContacts.setAttribute('class', 'contact');

        let contactTitle = document.createElement('h1');
        contactTitle.setAttribute('class', 'contact_title');
        contactTitle.innerHTML = 'Contacts'

        let contName = document.createElement('input');
        contName.setAttribute('type', 'text');
        contName.setAttribute('name', 'name');
        contName.setAttribute('class', 'contact_name');
        contName.setAttribute('placeholder', 'Name');    


        let contEmail = document.createElement('input');
        contEmail.setAttribute('type', 'email');
        contEmail.setAttribute('name', 'email');
        contEmail.setAttribute('class', 'contact_email');
        contEmail.setAttribute('placeholder', 'Email');   


        let contAddress = document.createElement('input');
        contAddress.setAttribute('type', 'text');
        contAddress.setAttribute('name', 'address');
        contAddress.setAttribute('class', 'contact_address');
        contAddress.setAttribute('placeholder', 'Address');  


        let contPhone = document.createElement('input');
        contPhone.setAttribute('type', 'tel');
        contPhone.setAttribute('name', 'phone');
        contPhone.setAttribute('class', 'contact_phone');
        contPhone.setAttribute('placeholder', 'Phone');   


        let formButton = document.createElement('button');
        formButton.setAttribute('type', 'submit');
        formButton.setAttribute('class', 'contact_save');
        formButton.innerHTML = 'Save';


        let contList = document.createElement('ol');
        contList.setAttribute('class', 'contact_list');
        this.contList = contList;

        document.body.append(contactTitle, formContacts, contList);
        formContacts.append(contName, contEmail,  contAddress, contPhone, formButton);

        this.textInputs = [contName, contEmail, contAddress, contPhone];

        formContacts.addEventListener('submit', (e) => {
            this.onAdd(e);
        });


        let cookie = this.getCookie('contactsExp');

        if (!cookie){
            this.storage = [];
        };

        let dataStorage = this.storage;

        if(dataStorage == false) {
            await this.getData();
        };

        if(dataStorage){
            dataStorage.forEach(elem => this.add(elem.data));
        };

        this.createContact();

    };


    onAdd(e) {
        e.preventDefault();
        let data = this.textInputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{});

        this.add(data);
        this.textInputs.forEach(elem => elem.value = '');
        console.log(this);
        console.log(this.contacts);
        this.createContact();
    };


    createContact() {
        this.contList.innerHTML = '';
        let dataList = this.getContacts();

        dataList.map(elem => {
            let elemList = document.createElement('li');
            elemList.setAttribute('class', 'contact_list');
    
            let listName = document.createElement('div');
            listName.setAttribute('class', 'contact_list_name');
            listName.innerHTML = elem.data.name;
    
            let listEmail = document.createElement('div');
            listEmail.setAttribute('class', 'contact_list_email');
            listEmail.innerHTML = elem.data.email;
    
            let listAddress = document.createElement('div');
            listAddress.setAttribute('class', 'contact_list_address');
            listAddress.innerHTML = elem.data.address;
    
            let listPhone = document.createElement('div');
            listPhone.setAttribute('class', 'contact_list_phone');
            listPhone.innerHTML = elem.data.phone;
    
            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'contact_list_edit');
            editBtn.innerHTML = 'Edit';
    
            let removeBtn = document.createElement("button");
            removeBtn.setAttribute('class', 'contact_list_remove');
            removeBtn.innerHTML = 'Delete';
    
            elemList.append(listName, listEmail, listAddress, listAddress, listPhone, editBtn, removeBtn);
            this.contList.append(elemList);
    
    
            editBtn.addEventListener('click', _ => {
                this.onEdit(listName, listEmail, listAddress, listPhone);
            });
    
            removeBtn.addEventListener('click', _ => this.onRemove(elem.data.id));
    
            listName.addEventListener('keydown', e => {
                this.getSave(e, elem.data.id, listName, listEmail, listAddress, listPhone);
            });
    
            listEmail.addEventListener('keydown', e => {
                this.getSave(e, elem.data.id, listName, listEmail, listAddress, listPhone);
            });
    
            listAddress.addEventListener('keydown', e => {
                this.getSave(e, elem.data.id, listName, listEmail, listAddress, listPhone);
            });
    
            listPhone.addEventListener('keydown', e => {
                this.getSave(e, elem.data.id, listName, listEmail, listAddress, listPhone);
            });
        
        });

        this.storage = this.contacts;

        this.setCookie('contactsExp', 1, {'max-age': 864000});
    };

    get storage(){
        let storage = localStorage.getItem('contacts');
        return JSON.parse(storage);
    };

    set storage(data){
        let dataStorage = JSON.stringify(data);
        localStorage.setItem('contacts', dataStorage);
    };

    getSave(e, id, name, email, address, phone){

        if(e.key == 'Enter' && e.ctrlKey){
            name.contentEditable = 'false';
            email.contentEditable = 'false';
            address.contentEditable = 'false';
            phone.contentEditable = 'false';
            let data = {
                name: name.innerHTML,
                email: email.innerHTML,
                address: address.innerHTML,
                phone: phone.innerHTML,
            };
    
            this.edit(id, data);
        };

        this.storage = this.contacts;
    };


    onRemove(id) {
        this.remove(id);
        this.createContact();
    };


    onEdit(name, email, address, phone) {
        name.contentEditable = 'true';
        email.contentEditable = 'true';
        address.contentEditable = 'true';
        phone.contentEditable = 'true';
    };

    async getData(){
        let rez = [];
    
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => json.map(data => rez.push(data)));

        rez = this.initObj(rez);
        return rez;
    };

    // Cookie
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };
    
    setCookie(name, value, options = {}) {
        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        };

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            };
        };
            document.cookie = updatedCookie;
        };
};