import React from 'react'
import { Product, Compare } from '../'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Modal from 'react-modal'
import CheckBox from '../CheckBox/checkBox'

import hdfc from '../../res/images/HDFCErgo.png';
import relience from '../../res/images/RelianceGeneral.png';
import Religare from '../../res/images/Religare.png';

const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: "90%",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

var compareObj = [];

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      activeItemId: null,
      activeItemName: null,
      activeItemDescription: null,
      activeItemBeneCover: null,
      activeItemStatus: null,
      activeItemSumInsured: null,
      activeTotalAmount: null,
      logo: null,
      checkedData: null,
      itemSelected:false,
      disableCheck:false
    }
    this.clicked = this.clicked.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this);
    this.closeModel = this.closeModel.bind(this);
    this.checked = this.checked.bind(this);

  }

  clicked = (param, e) => {
    this.setState({
      isModalOpen: true,
      activeItemId: param.plan.id,
      activeItemName: param.plan.insuranceProviderName,
      activeItemDescription: param.plan.planDescription,
      activeItemBeneCover: null,
      activeItemStatus: param.plan.status,
      activeItemSumInsured: param.sumInsured,
      activeTotalAmount: param.totalAmount.amount,
    })


  }

  afterModalOpen = (item) => {
  }

  closeModel = () => {
    this.setState({ isModalOpen: false })
  }

  checked = (param, e) => {
    this.setState({ checkedData: param }, this.update);
  }

  update = () => {
    if(this.state.itemSelected) {
      let param = {};
      param.itemSelected = this.state.itemSelected;
      param.selectedItem = compareObj;
      this.props.handleSelectedItem(param);
    } 
  }

  selectedItem = (param, e) => {
    if (param.selected == true) {
      compareObj.push({
        selected: param.selected,
        id: param.data.plan.id,
        plan:param.data.plan.planName,
        insuranceProvider:param.data.plan.insuranceProviderName,
        // premium:
        sumInsured: param.data.sumInsured,
        medicalFeature: param.data.plan.planBenefitCategories.MedicalFeatures,
        travelFeature: param.data.plan.planBenefitCategories.TravelFeatures
      });
    }
    else {
      if (compareObj.length > 0) {
        if (compareObj.length == 1) {
        } else {
          compareObj.map((item) => {
            if (param.selected == false) {
              if (param.data.plan.id == item.id) {
                compareObj.splice(compareObj.indexOf(item), 1);
              } else {
                console.log("didnt matched")
              }
            }
          })
        }
      }
    }
    if(compareObj.length > 0 && compareObj.length < 4){
      this.setState({itemSelected:true},this.update);
    }else{
      this.setState({disableCheck:true},this.update)
    }
  }

  render() {
      if(this.props.products.plan.insuranceProviderName.includes("Ergo")){
         //this.img = require('../../res/images/HDFCErgo.png');
         this.img = hdfc;
      }else if(this.props.products.plan.insuranceProviderName.includes("Religare")){
         //this.img = require('../../res/images/Religare.png');
         this.img = Religare;         
      }else{
         //this.img = require('../../res/images/RelianceGeneral.png');
         this.img = relience;
         
      }
    return (
      <div>
        <div className="col mt-3" style={{ display: "flex" }} onClick={this.checked.bind(this, this.props.products)}>
          <Card style={{ display: "flex", marginBottom: "10px", width: "100%"}} onClick={this.clicked.bind(this,this.props.products)}>
            <Grid xs={12} sm={6} md={2}><img style={{ height: "50px", width: "80px" }} src={this.img} /></Grid>
            <Grid xs={12} sm={6} md={3} style={{textAlign:"center"}}>{this.props.products.plan.planName}</Grid>
            <Grid xs={12} sm={6} md={3} style={{textAlign:"center"}}>{this.props.products.plan.insuranceProviderName}</Grid>
            <Grid xs={12} sm={6} md={2} style={{textAlign:"center"}}>{this.props.products.sumInsured}</Grid>
            <Grid xs={12} sm={6} md={2} style={{textAlign:"center"}}>{this.props.products.plan.status}</Grid>
          </Card>
          <Grid><CheckBox data={this.state.checkedData} itemList={compareObj} handleItem={this.selectedItem} tickStatus={this.state.disableCheck}/></Grid>
        </div>
        <div>
         <Modal
          isOpen={this.state.isModalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          itemId={this.state.activeItemId}
          itemName={this.state.activeItemName}
          style={customStyle}
          contentLabel="Product Details"
        >
          <h1>Insurance Details</h1>
          <div style={{ display: "flex" }}>
            <Grid xs={12} sm={3} md={6} style={{ display: "flex" }}>
              <div>
                <div style={{ display: "flex" }}>
                  <h6>Plan Id :</h6>
                  <label>{this.state.activeItemId}</label>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Plan Name :</h6>
                  <label>{this.state.activeItemName}</label>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Plan Description :</h6>
                  <label>{this.state.activeItemDescription}</label>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Benefits Covered :</h6>
                  <label>sanchita</label>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={3} md={6} style={{ display: "flex" }}>
            <div>
            <div style={{ display: "flex" }}>
                  <h6>Status : </h6>
                  <label>{this.state.activeItemStatus}</label>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Sum Insured : </h6>
                  <label>{this.state.activeItemSumInsured}</label>
                </div>
                <div style={{ display: "flex" }}>
                  <h6>Total Amount : </h6>
                  <label>{this.state.activeTotalAmount}</label>
                </div>
                </div>
            </Grid>
          </div>
          <button onClick={this.closeModel}>Close</button>
        </Modal>
      </div>
      </div>
    );
  }
}

export default ProductList
