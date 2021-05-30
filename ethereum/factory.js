import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xA3c44a04004ea172a32F629B02e5E0ed28aDa4f2'
);

export default instance;
