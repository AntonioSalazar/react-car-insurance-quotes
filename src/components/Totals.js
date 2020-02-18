import React from 'react';
import styled from '@emotion/styled';
import { firstLetterCapitalized } from "../helper";
import PropTypes from 'prop-types';

const TotalsContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Totals = ({ selection }) => {

    const { year, brand, plan } = selection;

    if(brand === '' || year === '' || plan === "") return null;
    return(
        <TotalsContainer>
            <h2>
                Quote Totals
            </h2>
            <ul>
                <li>Brand: {firstLetterCapitalized(brand)}</li>
                <li>Year: {year}</li>
                <li>Plan: {firstLetterCapitalized(plan)}</li>
            </ul>
        </TotalsContainer>
    )
}

Totals.propTypes = {
    selection:  PropTypes.object.isRequired
}

export default Totals;