import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Totals from './components/Totals';
import styled from '@emotion/styled';
import Result from './components/Results';
import Spinner from './components/Spinner';


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

  const [ loading, setLoading ] = useState(false);

  const { selection, quote } = totals;

  return (
    <Container>
      <Header
        title='Car insurance quotes'
      />
      <FormContainer>
        <Form 
          setTotals={setTotals}
          setLoading={setLoading}
        />

        { loading ? <Spinner /> : null }

        <Totals
          selection={selection}
        />

        { !loading ?
          <Result
            quote={quote}
          />      
          :  null
      }


      </FormContainer>
    </Container>
  );
}

export default App;
