import oasis from '@oasislabs/client';
import { delivery } from "./delivery";

export class OasisConnection {
    state;

    constructor() {
        this.state = new delivery();
    }

    public connectToOasis() {
        console.log("LOG: creating oasis connection");
        const headers = new Map();
        headers.set('X-OASIS-LOGIN-TOKEN', this.state.token);
        headers.set('X-OASIS-SESSION-KEY', 'test-session');

        const gateway = new oasis.gateways.Gateway(this.state.gateway, null, { headers });
        oasis.setGateway(gateway);
        console.log("LOG: oasis connection created");
    }
}