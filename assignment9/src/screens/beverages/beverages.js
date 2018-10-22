import React,{Component} from 'react';

class Beverages extends Component{
   constructor(props){
    super(props);
    this.state={
        juice:null,
        cofee:null,
        tea:null,
        min20:null,
        min40:null,
        min60:null,
        beverages:[],
        meetingtime:[]
    }

   }
   
   set(e){
    const {juice,beverages} =this.state;
    if(e.target.checked==true)
{
    this.setState({juice: e.target.value}, () => {
        var jui=this.state.juice;
        beverages.push(jui);
        // console.log(this.state.beverages);
    });

//    console.log(juice);

}
else{
    const {juice,beverages} =this.state;
    var jui=this.state.juice;
    beverages.pop(jui);
    console.log(beverages);
}

}
set1(e){
    const {tea,beverages} =this.state;
    if(e.target.checked==true)
{
    this.setState({tea: e.target.value}, () => {
        var chai=this.state.tea;
        beverages.push(chai);

        console.log(this.state.beverages);
    });
}
else{
    const {tea,beverages} =this.state;
    var chai=this.state.tea;
    beverages.pop(chai);
    console.log(beverages);

}

}  


set2(e){
    const {cofee,beverages} =this.state;
    if(e.target.checked==true)
{
    this.setState({cofee: e.target.value}, () => {
        // console.log(this.state.cofee);
        var cofe=this.state.cofee;
        beverages.push(cofe);
        
        console.log(this.state.beverages);
    });
}
else{
    const {cofee,beverages} =this.state;
    var cofe=this.state.tea;
    beverages.pop(cofe);
    console.log(beverages);

}

}

time(e){
const {min20,meetingtime}=this.state;
if(e.target.checked==true)
{
    this.setState({min20: e.target.value}, () => {
        var twenty=this.state.min20;
        meetingtime.push(twenty);
        console.log(this.state.meetingtime);

    });
}

else{
    const {min20,meetingtime} =this.state;
    var twenty=this.state.min20;
    meetingtime.pop(twenty);
    console.log(meetingtime);

}
}

time1(e){
    const {min40,meetingtime}=this.state;
    if(e.target.checked==true)
    {
        this.setState({min40: e.target.value}, () => {
            var fourty=this.state.min40;
            meetingtime.push(fourty);
            console.log(this.state.meetingtime);
    
        });
    }
    
    else{
        const {min40,meetingtime} =this.state;
        var fourty=this.state.min40;
        meetingtime.pop(fourty);
        console.log(meetingtime);
    
    }
    }
        


time2(e){
    const {min60,meetingtime}=this.state;
if(e.target.checked==true)
{
    this.setState({min60: e.target.value}, () => {
        var sixty=this.state.min60;
        meetingtime.push(sixty);
        console.log(this.state.meetingtime);

    });
}

else{
    const {min60,meetingtime} =this.state;
    var sixty=this.state.min60;
    meetingtime.pop(sixty);
    console.log(meetingtime);

}
}


next(){
        const {beverages,meetingtime} =this.state;
        console.log("asd",beverages);
        console.log("asd",meetingtime);

        localStorage.setItem("beverages",JSON.stringify(beverages));
        localStorage.setItem("timing",JSON.stringify(meetingtime));

        let path = `/Map`;
        this.props.history.push(path); 
    

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
                            <input type="checkbox" value="tea" onChange={this.set1.bind(this)}/>Tea
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                <input type="checkbox"  value="cofee" onChange={this.set2.bind(this)}/> Cofee
                                </div>              
                                </div>
<br/>
        <h4 style={{textAlign:"center"}}>Select time</h4>
                    <br/>
                <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-md-3">
                            <input type="checkbox" onChange={this.time.bind(this)} value="20min"/>20min
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                            <input type="checkbox" onChange={this.time1.bind(this)} value="40min"/>40min
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                <input type="checkbox" onChange={this.time2.bind(this)}  value="60min"/>60min
                                </div>              
                                </div>
            
            <br/>
                    <button onClick={this.next.bind(this)}>next</button>
                                        </div>
        )
    }
}
export default Beverages;