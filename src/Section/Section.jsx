import React from 'react';
import styled from 'styled-components';

const AppSection = styled.div`
  margin-left: auto;
  margin-right: auto;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Section = ({ title, children }) => {
  return (
    <AppSection>
      <Title>{title}</Title>
      {children}
    </AppSection>
  );
};

export default Section;
