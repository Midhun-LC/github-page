import React from 'react';
import classes from './ProfilePhoto.css'

const profilePhoto=(props)=>{

    return(
            <img  className={classes.Photo} src={props.imageURL} alt=""/>

    );
}

export default profilePhoto;