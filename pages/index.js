import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return{
      header: address,
      description: (
        <Link route={`campaigns/${address}`}>
          <a color="red">View Report</a>
        </Link>
      ),
      fluid: true
      };
    });

    return <Card.Group  items={items} />;
  }
  render() {
    return (
      <Layout>
    <div>

 <h3>Report List</h3>

  <Link route="/campaigns/new">
  <a>
    <Button color="teal" floated="right"
      content="Create Report"
      icon="add circle"

    />
    </a>
  </Link>
    {this.renderCampaigns()}
    </div>
    </Layout>
  );
  }
}

export default CampaignIndex;
