import styled from 'styled-components';

const ContactsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export { ContactsList, ListItem };
