import React,{Component} from 'react';
import firebase from '../../auth/firebase';
import Cards, { Card } from 'react-swipe-deck'
import { Card as bootcard, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';


class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state={};
 
    this.action=this.action.bind(this);
    }   
    action(a){
        console.log(a);
    } 

render(){
    const data = ['Alexandre', 'Thomas', 'Lucien']
    const Wrapper = () => {
        return (
            <Cards onEnd={()=>this.action('end')} className='master-root'>
              {data.map(item =>
                <Card
                  onSwipeLeft={()=>this.action('swipe left')}
                  onSwipeRight={()=>this.action('swipe right')}>
                  {/* <h2>{item}</h2> */}
                <bootcard>
                <Card>
        <CardImg top width="100%" src="" alt="Card image cap" />
        
        <CardBody>
            <div style={{position:"absolute",top:0,height:"100%",width:"100%",background:"transparent"}}></div>
           <CardTitle style={{background:"red"}}>Card {item}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
         
        </CardBody>
      </Card>
             </bootcard> 
    
    
                   </Card>
              )}
            </Cards>
        )
      }
    
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Select a Person</h1>
        <Wrapper/>
        </div>
    )

}

}


class card extends Component {
    constructor(props) {
      super(props);
    }    
render(){
    return(
        <div>
            <Wrapper/>
        </div>
    )

}



}



export default card;