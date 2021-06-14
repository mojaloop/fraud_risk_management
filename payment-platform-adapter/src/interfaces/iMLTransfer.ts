export class Amount {
    amount = "";;
    currency = "";
}

export class iMLTransfer {
    transactionId = "";
    transferId = "";
    payeeFsp = "";
    payerFsp = "";
    amount = new Amount();
    ilpPacket = "";
    condition = "";
    expiration = "";
    extensionList = "";
}