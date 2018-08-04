import React from 'react';
import Hoc from '../../HOC/Hoc';
import classes from './RepoDetails.css';

const repoDetails=(props)=>{

    let repolist=null;

    if(props.data.length){

        repolist = props.data.sort((x, y) => {if(new Date(x.updated_at) > new Date(y.updated_at)){return -1}else{return 1;}})
                        .map(repo=>{
                                        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                        let date = new Date(repo.updated_at);
                                        let dateString = date.getDate() + " " + months[date.getMonth()] + " " + (date.getFullYear() < new Date().getFullYear() ? date.getFullYear():"");
                                        return  <div className={classes.Item} key={repo.id}>
                                                    <a className={classes.Heading}href={repo.html_url}>{repo.name}</a>
                                                    <p className={classes.Description}>{repo.description}</p>
                                                    <p className={classes.Language}>{repo.language}<span className={classes.Time}>Updated on {dateString}</span></p>
                                                </div>

                    })
    }
    else{
        repolist = <div className={classes.EmptyResult}>
                        <p>there are no matching repositories</p>
                    </div>
    }

    
    return (
            <Hoc>
                {props.display?repolist:null}
            </Hoc>            
    
    )
}

export default repoDetails;