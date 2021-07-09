import axios from "axios";
import { env } from "process";
import { PPAResponseRoot } from "./models/PPAResponce";
import { SwaggerApiResponse } from "./models/SwaggerApiResponce";
//#region json maps
const config = require("./someconfig.json");
const PPAJsonData = require("./josnData/PPA-Json-Data.json");
const tmsJsonData = require("./josnData/off-transaction-monitoring-service.json");
const OffChannelOrchestratorJsonData =
    require("./josnData/off-channel-orchestrator.json");
//#endregion


//#region Payment platform adapter

export async function getPPAResponse() {

    const url =
        getUrl()
        + 'off-payment-platform-adapter'
        + getMeshedNameSpace()
        + '/execute';
    const apiReturn = await axios.post(url, PPAJsonData);
    const root: PPAResponseRoot = apiReturn.data;

    return root;

}
//#endregion

//#region off transaction monitoring service
export async function getTMSResponse() {

    const url =
        getUrl()
        + 'off-transaction-monitoring-service'
        + getMeshedNameSpace() + '/monitor/transaction';
    const apiReturn = await axios.post(url, tmsJsonData);
    const root: SwaggerApiResponse = apiReturn.data;
    return root;

}


//#endregion

//#region 

export async function getOffChannelOrchestrator() {
  
    const url =
        getUrl()
        + 'off-channel-orchestrator'
        + getNoneMeshedNameSpace()
        + '/execute';
    const apiReturn = await axios.post(url, OffChannelOrchestratorJsonData);
 

    return apiReturn.data;

}
//#endregion
//#region url functions
function getUrl() {
    return config['url'];
}

function getNoneMeshedNameSpace() {
    return config['noneMeshedNameSpace'];
}

function getMeshedNameSpace() {
    return config['meshedNameSpace'];
}
//#endregion