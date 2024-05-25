// Checks if a value is in decimal format
const isDecimal = (value: any): boolean => {
    const checkedValue = value.toString().trim();

    if (isNaN(parseFloat(checkedValue))) {
        return false;
    }

    return parseFloat(checkedValue) === Number(checkedValue);
};

export default isDecimal;
