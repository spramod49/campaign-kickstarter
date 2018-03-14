import React, { Component } from "react";
import { Form, Button,Message,Input } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign"
import {Router,Link} from "../../../routes";
import Layout from "../../../components/Layout";
import web3 from "../../../ethereum/web3";
class RequestNew extends Component{
  state={
    value:'',
    description:'',
    recepient:'',
    loading:false,
    errorMessage:''
  }
  static async getInitialProps(props){
    const {address} = props.query;
    return {address};
  }

  onSubmit = async (event)=>{
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    const  {description,value,recepient} = this.state;
    this.setState({loading:true});
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(description, web3.utils.toWei(value,'ether'), recepient).send({
        from:accounts[0]
      }
      );
      Router.pushRoute(`/campaigns/${this.props.address}/requests`)
    } catch (error) {
      this.setState({errorMessage:error.message});
    }
    this.setState({loading:false});
  }

  render(){
    return (
      <Layout>
        <h3>Create a request!</h3>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event=>this.setState({description:event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={event=>this.setState({value:event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Recepient</label>
            <Input
              value={this.state.recepient}
              onChange={event=>this.setState({recepient:event.target.value})}
            />
          </Form.Field>
          <Button primary loading={this.state.loading}>Create</Button>
          <Message error header='Oops!' content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;