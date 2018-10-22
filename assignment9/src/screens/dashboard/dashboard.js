import React,{Component} from 'react';

class Dashboard extends Component{
    constructor(props){
        super(props);

    }

    rou(){
        let path='/card';
        this.props.history.push(path);
    }


    render(){
        return(
            <div style={{textAlign:"center"}}>
            
            <h4>Dashboard</h4>
            <br/>
                <h4>You haven’t done any meeting yet!</h4>

                <button onClick={this.rou.bind(this)}>Create new meeting</button>

                </div>
        )
    }
}

export default Dashboard;