import User from "./user.js";

export default class Contacts{

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