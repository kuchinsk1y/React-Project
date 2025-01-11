import React from 'react';

// Компонент "Текстове поле"
const Input = ({ placeholder, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            style={{ padding: '10px', fontSize: '16px', width: '200px' }}
        />
    );
};

export default Input;