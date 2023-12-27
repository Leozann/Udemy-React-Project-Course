import React from 'react';
import InputStyles from '../styles/Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (<div className={InputStyles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>)
})
export default Input;