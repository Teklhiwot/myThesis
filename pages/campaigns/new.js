import React, { Component } from 'react';
import {Form, Button, Input, Message }  from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from   '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    diseaseName: '',
    reportingHealthFaclity: '',
    reportingLocation: '',
    reportingdate: '',
    PaitentName: '',
    PaitentGender: '',
    PaitentAge: '',
    minimumContribution: '',
    errorMessage: '',
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try{
    const accounts =await web3.eth.getAccounts();
    await factory.methods
    .createCampaign(this.state.minimumContribution)
    .send({
       from: accounts[0]
    });
    Router.pushRoute('/');
  } catch (err){
    this.setState({ errorMessage: err.message });
  }

  this.setState({ loading: false });

  };
  render()
  {
    return (
    <Layout>
      <h3>Create Report</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
      <label>Name of the Disease</label>
       <Input
        value={this.state.diseaseName}
        onChange={event =>
          this.setState({ diseaseName: event.target.value })}
        />
      </Form.Field>
      <Form.Field>
      <label>Reporting Health Facility</label>
      <Input
       value={this.state.reportingHealthFaclity}
       onChange={event =>
         this.setState({ reportingHealthFaclity: event.target.value })}
       />
            </Form.Field>
      <Form.Field>
      <label>Reporting location</label>
       <Input
       value={this.state.reportingLocation}
       onChange={event =>
         this.setState({ reportingLocation: event.target.value })}
       />
      </Form.Field>
      <Form.Field>
      <label>Reporting date</label>
       <Input
       value={this.state.reportingdate}
       onChange={event =>
         this.setState({ reportingdate: event.target.value })}
 />
      </Form.Field>
      <Form.Field>
      <label>Name of the Paitent</label>
       <Input
       value={this.state.PaitentName}
       onChange={event =>
         this.setState({ PaitentName: event.target.value })}

        />
      </Form.Field>
      <Form.Field>
      <label>Gender of the Paitent</label>
       <Input
       value={this.state.PaitentGender}
       onChange={event =>
         this.setState({ PaitentGender: event.target.value })}
        />
      </Form.Field>
      <Form.Field>
      <label>Age of the Paitent</label>
       <Input
       value={this.state.PaitentAge}
       onChange={event =>
         this.setState({ PaitentAge: event.target.value })}

        />
      </Form.Field>
       <Form.Field>
          <label>Minimu Contribution</label>
          <Input label="wei"
          labelPosition="right"
          value={this.state.minimumContribution}
          onChange={event =>
            this.setState({ minimumContribution: event.target.value })}
           />
       </Form.Field>
       <Message error header="Opps !" content={this.state.errorMessage} />
       <Button loading={this.state.loading} primary>Create!</Button>
      </Form>
    </Layout>
    );
  }
}
export default CampaignNew;
