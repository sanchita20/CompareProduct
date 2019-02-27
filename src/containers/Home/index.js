import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList,Product} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'


class Home extends Component {
  constructor(props,state){
    super(props);
    this.title = ["Logo","Plan","Insurance Provider","Sum Insured","Premium"];

    this.state={
      isSelected:false
    }
  }
  componentWillMount() {
    this.props.actions.getProducts();
  }

  selectedItem =(param)=>{
    this.setState({isSelected:param.itemSelected},this.isSelected);
    this.itemToCompare = param.selectedItem;
  }

  isSelected=()=>{
    // this.setState({isSelected:false})
  }

  render() {
    const {products, actions} = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (      
      <div className="home mt-5">
      <div>
        {this.state.isSelected ?
        <Compare data={this.itemToCompare}/>:
        ""}
      </div>
        <div className="row mt-3">
          <Grid xs={12} sm={6} md={2} style={{textAlign:"center"}}>Logo</Grid>
          <Grid xs={12} sm={6} md={3} style={{textAlign:"center"}}>Plan</Grid>
          <Grid xs={12} sm={6} md={3} style={{textAlign:"center"}}>Insurance Provider</Grid>
          <Grid xs={12} sm={6} md={2} style={{textAlign:"center"}}>Sum Insured</Grid>
          <Grid xs={12} sm={6} md={2} style={{textAlign:"center"}}>Premium</Grid>
        </div>
        {
          products.map((item)=>{
            return(
            <ProductList products={item} compare={actions.compare} handleSelectedItem = {this.selectedItem}/>
            );
          })
        }
        {/* <ProductList products={products} compare={actions.compare}/> */}
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
