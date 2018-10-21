import React,{Component} from 'react';

class Beverages extends Component{
   constructor(props){
    super(props);
    this.state={

    }

   }
   
   set(e){
    console.log(e.target.value);
   }
   
   
    render(){
        return(
            <div className="container">
                    <h4 style={{textAlign:"center"}}>Select beverages</h4>
                    <br/>
                <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-md-3">
                            <input type="checkbox" onChange={this.set.bind(this)} value="juice"/>Juice
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                            <input type="checkbox" value="tea" onChange={this.set.bind(this)}/>Tea
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                <input type="checkbox"  value="cofee" onChange={this.set.bind(this)}/> Cofee
                                </div>              
                                </div>
<br/>
        <h4 style={{textAlign:"center"}}>Select time</h4>
                    <br/>
                <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-md-3">
                            <input type="checkbox" value="20min"/>20min
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                            <input type="checkbox" value="40min"/>40min
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                <input type="checkbox"  value="60min"/>60min
                                </div>              
                                </div>
            

                                        </div>
        )
    }
}
export default Beverages;