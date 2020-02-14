import React, {useState} from 'react';
import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const RadioInput = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }
`;


const Form = () => {

    const [selection, setSelection] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    //Extract values from state

    const {brand, year, plan} = selection;


    //Read the data from the form and saving those into the state

    const getInfoFromForm = e => {
        setSelection({
            ...selection,
            [e.target.name]: e.target.value
        })
    }



    return ( 
        <form>
            <Field>
                <Label>Brand</Label>
                <Select
                    name='brand'
                    value={brand}
                    onChange={getInfoFromForm}
                >
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select         
                    name='year'
                    value={year}
                    onChange={getInfoFromForm}
                >
                    <option value="">-- Select --</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <RadioInput
                    type='radio'
                    name='plan'
                    value='basic'
                    checked={plan ==='basic'}
                    onChange={getInfoFromForm}
                /> Basic

                <RadioInput
                    type='radio'
                    name='plan'
                    value='complete'
                    checked={plan==='complete'}
                    onChange={getInfoFromForm}
                /> Complete
            </Field>
            <Button type="button">Get Quote</Button>
        </form>
    );
}
 
export default Form;