import React from 'react';
import classes from './Select.css'

const select=(props)=>{

    let options=props.filtertypes.map((x,index)=>{
        return <option className={classes.Select} key={index} value={x}>{x}</option>;
    })

    return  <select name="type" onChange={props.onChange} className={classes.Select}>
                {options}
            </select>
}

export default select;