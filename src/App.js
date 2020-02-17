import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Totals from './components/Totals';
import styled from '@emotion/styled';
import Result from './components/Results';

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  padding: 3rem;
  background-color: #FFF;
`;

function App() {

  const [ totals, setTotals ] = useState({
    quote: 0,
    selection: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const { selection, quote } = totals;

  return (
    <Container>
      <Header
        title='Car insurance quotes'
      />
      <FormContainer>
        <Form 
          setTotals={setTotals}
        />
        <Totals
          selection={selection}
        />

        <Result
          quote={quote}
        />
      </FormContainer>
    </Container>
  );
}

export default App;
