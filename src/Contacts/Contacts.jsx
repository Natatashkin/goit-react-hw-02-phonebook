import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { ContactsList, ListItem } from './Contacts.styled';
import Button from '../Button';

export default function Contacts({ list, onDeleteContact }) {
  return (
    <ContactsList>
      {list.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Button
              type={'button'}
              onDeleteItem={onDeleteContact}
              idToDelete={id}
            >
              <FaTrashAlt />
            </Button>
          </ListItem>
        );
      })}
    </ContactsList>
  );
}

Contacts.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func,
};
