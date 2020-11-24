import { inherits } from "util";
import { Consumer } from "../base-classes/consumer";

export class TransferConsumer extends Consumer {

    GetMSISDN(message: string): string {
        throw new Error('Not implemented');
    }

}