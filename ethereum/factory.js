import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), "0xA4face541A9A49cDe0F787B08D83385f05ba4441");
export default instance;