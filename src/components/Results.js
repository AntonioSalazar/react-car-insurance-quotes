import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';


const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultQuoteDiv = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextTotal = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0; 
`;

const Result = ({quote}) => {

    return ( 
            (quote === 0) 
            ? <Message>Choose a brand a year and a type of insurance</Message> 
            :   (
                <ResultQuoteDiv>
                    <TransitionGroup
                        component="span"
                        className="result"
                    >
                        <CSSTransition
                            classNames="result"
                            key={quote}
                            timeout={{enter: 500, exit: 500}}
                        >
                            <TextTotal>El total es: MXN <span> {quote} </span></TextTotal>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultQuoteDiv>
                )
        );
}

Result.propTypes = {
    quote:  PropTypes.number.isRequired
}
 
export default Result;