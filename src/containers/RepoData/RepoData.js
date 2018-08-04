import React,{Component} from 'react';
import RepoDetails from '../../components/RepoDetails/RepoDetails';
import axios from 'axios';
import classes from './RepoData.css';
import Select from '../../components/Select/Select';

class RepoData extends Component{

    state={
        data:null,
        filter:{
            type:'all',
            language:'all',
            search:""
        },
        fileteredData:null,
        filterString:null,
        repositoriesClicked:false
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/supreetsingh247/repos')
                .then(response=>{
                    
                    this.setState({
                        data:response.data,
                        filteredData:response.data
                    })
                })

    }

    onInputChange=(event)=>{

        let input=event.target.value.toLowerCase();
                
        this.setState({
            filter:{

                ...this.state.filter,
                search: input

            }

        }, this.setFilteredData)

    }

    onLanguageChange=(event)=>{

        let input = event.target.value.toLowerCase();
        
        this.setState({
            filter:{
                ...this.state.filter,
                language:input
            }
        },this.setFilteredData)


    }

    onRepoTypeChange=(event)=>{

        let input = event.target.value.toLowerCase();
        this.setState({
            filter: {
                ...this.state.filter,
                type: input
            }
        },this.setFilteredData)

    }

    setFilteredData=()=>{

        let filteredData = null;
        let input=this.state.filter.type;

        if (input === 'all') {
            filteredData = this.state.data;
        }
        else if (input === 'public') {
            filteredData = this.state.data.filter(x => !x.private);
        }
        else if (input === 'private') {
            filteredData = this.state.data.filter(x => x.private);
        }
        else if (input === 'mirror') {
            filteredData = this.state.data.filter(x => x.mirror_url);
        }
        else if (input === 'archived') {
            filteredData = this.state.data.filter(x => x.archived);
        }
        else if (input === 'fork') {
            filteredData = this.state.data.filter(x => x.fork);
        }


        input = this.state.filter.language;

        if (input === 'all') {
            
        }
        else {
            filteredData = filteredData.filter(x => {
                if (x.language) { return x.language.toLowerCase() === input }
                else {
                    return false;
                }
            });
        }

        filteredData = filteredData.filter(x => x.name.toLowerCase().includes(this.state.filter.search));

        this.setState({
            filteredData:filteredData
        })

    }

    OnClickHandler=(event)=>{

        let ul = document.getElementsByTagName("ul")[0].getElementsByTagName("button");
        for(let i=0;i<ul.length;i++){
            ul[i].classList.remove(classes.Clicked)
        }
        event.target.classList.add(classes.Clicked)

        if(event.target.textContent.toLowerCase()==='repositories'){
            this.setState({
                repositoriesClicked:true
            })
        }
        else{
            this.setState({
                repositoriesClicked: false
            })
        }
    }
    
    render(){

        let repositoryDetails=<h1>Loading...</h1>;
        let languageFilter=['All'];
        

        if(this.state.data)
        {
            repositoryDetails = <RepoDetails data={this.state.filteredData} display={this.state.repositoriesClicked}/>
            this.state.data.forEach(element => {
                if(element.language){
                    if (languageFilter.indexOf(element.language) === -1) {
                        languageFilter.push(element.language);
                    }
                }
                
            });

        }
        return <div> 
                    <div className={classes.Links}>
                        <ul className={classes.LinksList}>
                            <li><button onClick={this.OnClickHandler} >Overview</button></li>
                            <li><button onClick={this.OnClickHandler} >Repositories</button></li>
                            <li><button onClick={this.OnClickHandler}>Stars</button></li>
                            <li><button onClick={this.OnClickHandler}>Followers</button></li>
                            <li><button onClick={this.OnClickHandler}>Following</button></li>
                            </ul>
                    </div>
                    <div className={classes.Filters}>
                        <input className={classes.Input} type="text" placeholder="search repositories" onChange={this.onInputChange}/>
                        <Select filtertypes={['All', 'Private', 'Public', 'Fork', 'Archived', 'Mirror']} onChange={this.onRepoTypeChange}/>
                        <Select filtertypes={languageFilter} onChange={this.onLanguageChange}/>

                    </div>
                    <div className={classes.RepositoryList}>
                        {repositoryDetails }
                    </div>
                </div>
    }

}

export default RepoData;