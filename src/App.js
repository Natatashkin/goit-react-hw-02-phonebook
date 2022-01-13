import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Contacts from './Contacts';
import Section from './Section';
import Filter from './Filter';
import styled from 'styled-components';
import { notify } from 'react-notify-toast';
import { nanoid } from 'nanoid';

const PhonebookApp = styled.div`
  margin: 25px auto;
  min-width: 400px;
  max-width: 600px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
`;

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormContact = ({ name, number }) => {
    const contactToAdd = this.checkName(name);
    if (contactToAdd) {
      notify.show(`${name} is already in contacts`, 'error', 1500);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    notify.show(`Contact ${name} was added!`, 'success', 1000);
  };

  handleFilterReset = () => {
    this.clearFilter();
  };

  checkName = name => {
    const { contacts } = this.state;
    const normalizeName = name.toLowerCase();
    const nameToAdd = contacts.find(
      contact => contact.name.toLowerCase() === normalizeName,
    );

    return nameToAdd;
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = index => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== index),
    }));
  };

  clearFilter = () => {
    this.setState({
      filter: '',
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <PhonebookApp>
        <Section title={'Phonebook'}>
          <Form getSubmitData={this.handleFormContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter
            value={filter}
            onChange={this.changeFilter}
            onClick={this.handleFilterReset}
          />
          <Contacts
            list={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </PhonebookApp>
    );
  }
}
