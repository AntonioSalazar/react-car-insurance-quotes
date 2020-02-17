export function getYearDifference(year){
    return new Date().getFullYear() - year;
}

//calculate what the user will need to pay according to the brand

export function getCostPerBrand(brand) {
    let increase;

    switch (brand) {
        case 'european':
            increase = 1.30;
            break;

        case 'american':
            increase = 1.15;
            break;

        
        case 'asian':
            increase = 1.05;
            break;
    
        default:
            break;
    }

    return increase;
}

//Calculate the type of insurance

export function getPlan (plan) {
    return( plan === 'basic') ? 1.20 : 1.50;
}

// Shows the first letter in uppercase

export function firstLetterCapitalized( text ) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}