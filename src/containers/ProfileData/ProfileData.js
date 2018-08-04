import React, { Component } from 'react';
import axios from 'axios';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import Hoc from '../../HOC/Hoc';

class ProfileData extends Component {

    state={
        data:null
    }

    componentDidMount(){
        //make an api call to retrieve profile data
        axios.get('https://api.github.com/users/supreetsingh247')
            .then(response=>{

                console.log(response.data);
                this.setState({
                    data:response.data
                })
            });
    }

    render() {

        let profilePhoto=null;
        let profileDetails=null;
        if(this.state.data){
            profilePhoto=<ProfilePhoto imageURL={this.state.data.avatar_url}/>;
            profileDetails=<ProfileDetails data={this.state.data}/>
        }

        else{

        }
        return <Hoc>
                    {profilePhoto}
                    {profileDetails}
                </Hoc>
    }

}

export default ProfileData;