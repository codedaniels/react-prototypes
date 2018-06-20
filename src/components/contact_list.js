import React, {Component} from 'react';
import ContactCard from './contact_card';
import contactData from '../data/contacts';

class ContactList extends Component {
    constructor (props) {
        super (props);

        this.state = {
            contacts: contactData
        }
    }

    render(){
        const list = this.state.contacts.map((item, index) => {
            return <ContactCard key={index} firstName={item.firstName} lastName={item.lastName}/>
        });

        console.log('Contact Data: ', this.state.contacts);
        return <div>{list}</div>
    }
}

export default ContactList;