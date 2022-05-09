const allowOnlyNumbers = input => {
    input.value = input.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
}

const verifyMoveNext = event => {
    if (event.target.value.length === event.target.maxLength) {
        const NEXT_ELEMENT = event.target.nextElementSibling;
        NEXT_ELEMENT?.focus();
    }
};