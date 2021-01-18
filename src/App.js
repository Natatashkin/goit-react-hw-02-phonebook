import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import Section from './components/Section';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    if (data.name === '' || data.number === '') {
      alert(`Все поля формы должны быть заполнены!`);
      return;
    }

    if (contacts.find(({ name }) => name === data.name)) {
      alert(`Контакт с именем ${data.name} уже существует!`);
      return;
    }
    const newContact = { id: uuidv4(), name: data.name, number: data.number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter(({ name }) =>
          name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
        )
      : contacts;
  };

  handleFilterChangeInput = event => {
    const filter = event.target.value;
    console.log(filter);
    this.setState({ filter });
  };

  onRemove = event => {
    console.log(event.target.id);
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(({ id }) => id !== event.target.id),
        ],
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div className="container">
        <Section title="Phonebook">
          <Form onSubmitForm={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 2 && (
            <Filter value={filter} onFilter={this.handleFilterChangeInput} />
          )}
          <ContactList list={this.handleFilter()} onRemove={this.onRemove} />
        </Section>
      </div>
    );
  }
}
