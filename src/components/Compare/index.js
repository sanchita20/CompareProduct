import React from 'react'
import './styles.css'
import CompareProduct from "./CompareProduct"
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";


class Compare extends React.Component{
  constructor(props){
    super(props);
    this.data = this.props.data;
    this.state={
      btnVisiblity : false,
      compare:false
    }
  }

  compare=()=>{
    this.setState({compare:true});
  }

  
  render(){
    console.log("$$$",this.data)
    return(
      <div>
      <div className="row mt-3">
        {
          this.data.length > 0 ?
            this.data.map((item)=>{
              return(
                <div style={{border:"1px solid black", margin:"5px",padding:"5px"}}>
                  <h6>Plan :{item.plan}</h6>
                  <p>SumInsured :{item.sumInsured}</p>
                </div>
              );
            })
            :
            "Please select product to compare"
        }
        { 
          this.data.length >1 ?
          <button type="button" style={{height:"50px",marginTop:"auto",marginBottom:"auto"}} onClick = {this.compare}>Compare</button>:
          ""
          // this.data.length >1 ?
          // <Redirect to="/CompareProduct" component={CompareProduct}>to</Redirect>:
          // ""
        }
      </div>
      {
          this.state.compare ? 
          <CompareProduct data={this.data}/>:
          ""
        }
      </div>
    )
  }
}

export default Compare
