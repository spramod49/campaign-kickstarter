import React,{Component} from "react";
import  { Card,Button } from "semantic-ui-react";
import factory  from "../ethereum/factory";
import Layout from "../components/Layout"
import { Link } from "../routes";

class campaignIndex extends Component{

  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return {campaigns};
  }

  async componentDidMount(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }

  renderCampaigns(){
    const items = this.props.campaigns.map((address)=>{
      return {
        header: address,
      description: (
      <Link route={`/campaigns/${address}`}>
        <a>View Campaign</a>
      </Link>
    ),
        fluid:true
      }
    });
    return <Card.Group items={items}/>;
  }

  render(){
    return (
    <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                content="Create Campaign"
                icon="add circle"
                floated="right"
                primary
              />
              </a>
          </Link>
          {this.renderCampaigns()}


        </div>
    </Layout>
    );
  }
}

export default campaignIndex;

// export default () => {
// return (<h1>This is the new campaign index.js</h1>);
// };