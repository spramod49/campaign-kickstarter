import React, {Component} from "react";
import  { Form, Input, Message ,Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign'
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component{

  state={
    value:'',
    errorMessage:'',
    loading:false
  };

  onSubmit= async (event)=>{
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    this.setState({loading:false,errorMessage:''})
    try {
      this.setState({loading:true});
      const accounts  = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value:web3.utils.toWei(this.state.value,'ether')
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`)
    } catch (error) {
      this.setState({errorMessage:error.message});
    }
    this.setState({loading:false,value:''})
  }

  render(){
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            onChange={event=>{this.setState({value:event.target.value})}}
            value={this.state.value}
          />
        </Form.Field>
        <Message error header='Oops!' content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;