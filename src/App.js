import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  padding: 3rem;
  background-color: #FFF;
`;

function App() {
  return (
    <Container>
      <Header
        title='Car insurance quotes'
      />
      <FormContainer>
        <Form />
      </FormContainer>
    </Container>
  );
}

export default App;
