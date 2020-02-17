import React, { Fragment} from 'react'

const Totals = ({ selection }) => {

    const { year, brand, plan } = selection;

    if(brand === '' || year === '' || plan === "") return null;
    return(
        <Fragment>
            <h2>
                Quote Totals
            </h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>Year: {year}</li>
                <li>Plan: {plan}</li>
            </ul>
        </Fragment>
    )
}

export default Totals;