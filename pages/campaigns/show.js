import React , {Component} from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import  GridRow, { Card, Grid, GridColumn, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import  ContributeForm  from "../../components/ContributeForm";
import {Link} from "../../routes";
class ShowCampaign extends Component{

  static async getInitialProps(props){
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address:props.query.address,
      minimumContribution: summary[0],
      balance:summary[1],
      requestsCount:summary[2],
      approversCount:summary[3],
      manager:summary[4]
    };
}
  renderCards(){

    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header:manager,
        meta:'Address of Manager',
        description: 'The manager created this address and can create withdraw requests',
        style: {overflowWrap:'break-word'}
      },
      {
        header:minimumContribution,
        meta:'Minimum Contribution (wei)',
        description: 'You must contribute atleast this much wei to become a contributor',
      },
      {
        header:requestsCount,
        meta:'Number of withdraw requests',
        description: 'A request tries to withdraw money from the contract and send it to the concerned vendor',
      },
      {
        header:approversCount,
        meta:'Approvers',
        description: 'Number of people that have donated to the campaign',
      },
      {
        header:web3.utils.fromWei(balance,'ether'),
        meta:'Campaign Balance (Ether)',
        description: 'The balance is how much money the campaign has to spend',
      }
    ];

    return <Card.Group items={items} />;
  }

  render(){
    return (
      <Layout>
        <h1>Show Campaign</h1>
        <Grid>
          <Grid.Row>
          <GridColumn width={10}>
            {this.renderCards()}
          </GridColumn>
          <GridColumn width={6}>
            <ContributeForm address={this.props.address}/>
          </GridColumn>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>
                    View Requests
                  </Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default ShowCampaign;