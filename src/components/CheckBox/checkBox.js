import React from 'react';
import teal from '@material-ui/core/colors/teal';

class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: false,
        selected:null,
      };
    }

    toggleChange = (param,e) => {
      this.setState({
        isChecked: !this.state.isChecked,
      },this.update);
    }

    update = ()=>{
      let param ={};
      param.data=this.data,
      param.selected = this.state.isChecked
      this.props.handleItem(param)
    }
    
    render() {
      this.data = this.props.data;
      return (
        <label>
          <input type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange.bind(this,this.data)}
            // disabled={this.props.tickStatus}
            disabled={this.props.itemList.length > 2 ? true : false}
          />
         </label>
      );
    }
  }

  export default Checkbox;