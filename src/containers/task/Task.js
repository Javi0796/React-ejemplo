import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import axios from 'axios';

class Task extends Component{
    state = {
        tasksData: []

    };

    componentDidMount(){
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks", {headers: { 'Authorization' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzc3MTMsImV4cCI6MTU4Mjk4MjUxM30.Q7Va5C7UgtQ2xKlbMLsuyiE6ToBkR_yjWZjFIahHKzI"}})
            .then(res => {

                this.setState({
                    tasksData: res.data.results
                });

                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            });
    }


    render(){
        const cardsView = (this.state.tasksData.length ?
             <Cards data={this.state.tasksData}/>
             :
             null)
        return(
            <div>
               {cardsView} 
            </div>
        )
    }
}

export default Task;