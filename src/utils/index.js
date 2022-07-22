import { useState } from 'react';

const API_ROOT = "https://my-json-server.typicode.com/prajwalmahajan101/Ecom_db/";

export const API_URLS = {
    getProducts : ()=> `${API_ROOT}/products`,
    createProduct : () => `${API_ROOT}/products`,
}


// Use State to Create a custom Hook for Form Data
export const useFormData = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return{
            value,
            onChange: handleChange,
    }
};