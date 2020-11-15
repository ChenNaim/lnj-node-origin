
const validate = (name, value, required, minLength, pattern) => {
    const newErrors = [];

    if(required){
        if(!value){
            newErrors.push(`${name} is required`);
        }
    }

    if(minLength){
        if(value.length < minLength){
            newErrors.push(`${name} must be at least ${minLength} characters`);
        }
    }

    if(pattern){
        if(!pattern.test(value)){
            newErrors.push(`${name} is invalid`);
        }
    }

    return newErrors;
}

export default validate;