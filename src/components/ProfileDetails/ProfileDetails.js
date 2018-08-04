import React from 'react';
import classes from './ProfileDetails.css';
import map from '../../assets/marker.png';
import mail from '../../assets/mail.png';
import people from '../../assets/people.png';

const profileDetails=(props)=>{

    return (
        <div className={classes.ProfileDetails}>
            <h1 className={classes.ProfileName}>{props.data.name}</h1>
            <h4 className={classes.LoginName}>{props.data.login}</h4>
            <p className={classes.Bio}>{props.data.bio}</p>
            <button className={classes.EditButton}>Edit Bio</button>
            <p className={classes.Company}><img src={people} alt=""/>{props.data.company}</p>
            <p><img src={map} alt=""/>{props.data.location}</p>
            <p><img src={mail} alt=''/>{props.data.email}</p>
        </div>
    );

}

export default profileDetails;