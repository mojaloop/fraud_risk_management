// package: tmsservice
// file: tms.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Amount extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Amount.AsObject;
    static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Amount;
    static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
}

export namespace Amount {
    export type AsObject = {
    }
}

export class ComplexName extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComplexName.AsObject;
    static toObject(includeInstance: boolean, msg: ComplexName): ComplexName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComplexName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComplexName;
    static deserializeBinaryFromReader(message: ComplexName, reader: jspb.BinaryReader): ComplexName;
}

export namespace ComplexName {
    export type AsObject = {
    }
}

export class CustomerCreditTransferInitiationV11 extends jspb.Message { 

    hasGroupheader(): boolean;
    clearGroupheader(): void;
    getGroupheader(): GroupHeader | undefined;
    setGroupheader(value?: GroupHeader): CustomerCreditTransferInitiationV11;

    hasPaymentinformation(): boolean;
    clearPaymentinformation(): void;
    getPaymentinformation(): PaymentInformation | undefined;
    setPaymentinformation(value?: PaymentInformation): CustomerCreditTransferInitiationV11;

    hasSupplementarydata(): boolean;
    clearSupplementarydata(): void;
    getSupplementarydata(): SupplementaryData | undefined;
    setSupplementarydata(value?: SupplementaryData): CustomerCreditTransferInitiationV11;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerCreditTransferInitiationV11.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerCreditTransferInitiationV11): CustomerCreditTransferInitiationV11.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerCreditTransferInitiationV11, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerCreditTransferInitiationV11;
    static deserializeBinaryFromReader(message: CustomerCreditTransferInitiationV11, reader: jspb.BinaryReader): CustomerCreditTransferInitiationV11;
}

export namespace CustomerCreditTransferInitiationV11 {
    export type AsObject = {
        groupheader?: GroupHeader.AsObject,
        paymentinformation?: PaymentInformation.AsObject,
        supplementarydata?: SupplementaryData.AsObject,
    }
}

export class Error extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Error.DataMessage | undefined;
    setData(value?: Error.DataMessage): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        data?: Error.DataMessage.AsObject,
    }


    export class DataMessage extends jspb.Message { 
        getError(): string;
        setError(value: string): DataMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DataMessage.AsObject;
        static toObject(includeInstance: boolean, msg: DataMessage): DataMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DataMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DataMessage;
        static deserializeBinaryFromReader(message: DataMessage, reader: jspb.BinaryReader): DataMessage;
    }

    export namespace DataMessage {
        export type AsObject = {
            error: string,
        }
    }

}

export class GroupHeader extends jspb.Message { 

    hasInitiatingparty(): boolean;
    clearInitiatingparty(): void;
    getInitiatingparty(): GroupHeader.InitiatingPartyMessage | undefined;
    setInitiatingparty(value?: GroupHeader.InitiatingPartyMessage): GroupHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupHeader.AsObject;
    static toObject(includeInstance: boolean, msg: GroupHeader): GroupHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupHeader;
    static deserializeBinaryFromReader(message: GroupHeader, reader: jspb.BinaryReader): GroupHeader;
}

export namespace GroupHeader {
    export type AsObject = {
        initiatingparty?: GroupHeader.InitiatingPartyMessage.AsObject,
    }


    export class InitiatingPartyMessage extends jspb.Message { 

        hasIdentification(): boolean;
        clearIdentification(): void;
        getIdentification(): GroupHeader.InitiatingPartyMessage.IdentificationMessage | undefined;
        setIdentification(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage): InitiatingPartyMessage;
        getName(): string;
        setName(value: string): InitiatingPartyMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): InitiatingPartyMessage.AsObject;
        static toObject(includeInstance: boolean, msg: InitiatingPartyMessage): InitiatingPartyMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: InitiatingPartyMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): InitiatingPartyMessage;
        static deserializeBinaryFromReader(message: InitiatingPartyMessage, reader: jspb.BinaryReader): InitiatingPartyMessage;
    }

    export namespace InitiatingPartyMessage {
        export type AsObject = {
            identification?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.AsObject,
            name: string,
        }


        export class IdentificationMessage extends jspb.Message { 

            hasContactdetails(): boolean;
            clearContactdetails(): void;
            getContactdetails(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage | undefined;
            setContactdetails(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage): IdentificationMessage;
            getIdentification(): string;
            setIdentification(value: string): IdentificationMessage;

            hasOther(): boolean;
            clearOther(): void;
            getOther(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage | undefined;
            setOther(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage): IdentificationMessage;

            hasPrivateidentification(): boolean;
            clearPrivateidentification(): void;
            getPrivateidentification(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage | undefined;
            setPrivateidentification(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage): IdentificationMessage;

            hasSchemename(): boolean;
            clearSchemename(): void;
            getSchemename(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage | undefined;
            setSchemename(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage): IdentificationMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): IdentificationMessage.AsObject;
            static toObject(includeInstance: boolean, msg: IdentificationMessage): IdentificationMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: IdentificationMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): IdentificationMessage;
            static deserializeBinaryFromReader(message: IdentificationMessage, reader: jspb.BinaryReader): IdentificationMessage;
        }

        export namespace IdentificationMessage {
            export type AsObject = {
                contactdetails?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.AsObject,
                identification: string,
                other?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.AsObject,
                privateidentification?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.AsObject,
                schemename?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.AsObject,
            }


            export class ContactDetailsMessage extends jspb.Message { 
                getMobilenumber(): string;
                setMobilenumber(value: string): ContactDetailsMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
            }

            export namespace ContactDetailsMessage {
                export type AsObject = {
                    mobilenumber: string,
                }
            }

            export class OtherMessage extends jspb.Message { 

                hasContactdetails(): boolean;
                clearContactdetails(): void;
                getContactdetails(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage | undefined;
                setContactdetails(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage): OtherMessage;
                getIdentification(): string;
                setIdentification(value: string): OtherMessage;

                hasPrivateidentification(): boolean;
                clearPrivateidentification(): void;
                getPrivateidentification(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage | undefined;
                setPrivateidentification(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage): OtherMessage;

                hasSchemename(): boolean;
                clearSchemename(): void;
                getSchemename(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage | undefined;
                setSchemename(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage): OtherMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): OtherMessage.AsObject;
                static toObject(includeInstance: boolean, msg: OtherMessage): OtherMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: OtherMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): OtherMessage;
                static deserializeBinaryFromReader(message: OtherMessage, reader: jspb.BinaryReader): OtherMessage;
            }

            export namespace OtherMessage {
                export type AsObject = {
                    contactdetails?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.AsObject,
                    identification: string,
                    privateidentification?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.AsObject,
                    schemename?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.AsObject,
                }


                export class ContactDetailsMessage extends jspb.Message { 
                    getMobilenumber(): string;
                    setMobilenumber(value: string): ContactDetailsMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                    static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
                }

                export namespace ContactDetailsMessage {
                    export type AsObject = {
                        mobilenumber: string,
                    }
                }

                export class PrivateIdentificationMessage extends jspb.Message { 

                    hasDateandplaceofbirth(): boolean;
                    clearDateandplaceofbirth(): void;
                    getDateandplaceofbirth(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                    setDateandplaceofbirth(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                    static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
                }

                export namespace PrivateIdentificationMessage {
                    export type AsObject = {
                        dateandplaceofbirth?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                    }


                    export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                        getBirthdate(): string;
                        setBirthdate(value: string): DateAndPlaceOfBirthMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                        static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                    }

                    export namespace DateAndPlaceOfBirthMessage {
                        export type AsObject = {
                            birthdate: string,
                        }
                    }

                }

                export class SchemeNameMessage extends jspb.Message { 
                    getProprietary(): string;
                    setProprietary(value: string): SchemeNameMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                    static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
                }

                export namespace SchemeNameMessage {
                    export type AsObject = {
                        proprietary: string,
                    }
                }

            }

            export class PrivateIdentificationMessage extends jspb.Message { 

                hasDateandplaceofbirth(): boolean;
                clearDateandplaceofbirth(): void;
                getDateandplaceofbirth(): GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                setDateandplaceofbirth(value?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
            }

            export namespace PrivateIdentificationMessage {
                export type AsObject = {
                    dateandplaceofbirth?: GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                }


                export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                    getBirthdate(): string;
                    setBirthdate(value: string): DateAndPlaceOfBirthMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                    static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                }

                export namespace DateAndPlaceOfBirthMessage {
                    export type AsObject = {
                        birthdate: string,
                    }
                }

            }

            export class SchemeNameMessage extends jspb.Message { 
                getProprietary(): string;
                setProprietary(value: string): SchemeNameMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
            }

            export namespace SchemeNameMessage {
                export type AsObject = {
                    proprietary: string,
                }
            }

        }

    }

}

export class Health extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Health.AsObject;
    static toObject(includeInstance: boolean, msg: Health): Health.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Health, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Health;
    static deserializeBinaryFromReader(message: Health, reader: jspb.BinaryReader): Health;
}

export namespace Health {
    export type AsObject = {
    }
}

export class MojaloopQuotePostRequest extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): Amount | undefined;
    setAmount(value?: Amount): MojaloopQuotePostRequest;
    getAmounttype(): string;
    setAmounttype(value: string): MojaloopQuotePostRequest;

    hasPayee(): boolean;
    clearPayee(): void;
    getPayee(): Payee | undefined;
    setPayee(value?: Payee): MojaloopQuotePostRequest;

    hasPayer(): boolean;
    clearPayer(): void;
    getPayer(): Payer | undefined;
    setPayer(value?: Payer): MojaloopQuotePostRequest;
    getQuoteid(): string;
    setQuoteid(value: string): MojaloopQuotePostRequest;
    getTransactionid(): string;
    setTransactionid(value: string): MojaloopQuotePostRequest;

    hasTransactiontype(): boolean;
    clearTransactiontype(): void;
    getTransactiontype(): TransactionType | undefined;
    setTransactiontype(value?: TransactionType): MojaloopQuotePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MojaloopQuotePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MojaloopQuotePostRequest): MojaloopQuotePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MojaloopQuotePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MojaloopQuotePostRequest;
    static deserializeBinaryFromReader(message: MojaloopQuotePostRequest, reader: jspb.BinaryReader): MojaloopQuotePostRequest;
}

export namespace MojaloopQuotePostRequest {
    export type AsObject = {
        amount?: Amount.AsObject,
        amounttype: string,
        payee?: Payee.AsObject,
        payer?: Payer.AsObject,
        quoteid: string,
        transactionid: string,
        transactiontype?: TransactionType.AsObject,
    }
}

export class PartyIdInfo extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyIdInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PartyIdInfo): PartyIdInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyIdInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyIdInfo;
    static deserializeBinaryFromReader(message: PartyIdInfo, reader: jspb.BinaryReader): PartyIdInfo;
}

export namespace PartyIdInfo {
    export type AsObject = {
    }
}

export class Payee extends jspb.Message { 

    hasPartyidinfo(): boolean;
    clearPartyidinfo(): void;
    getPartyidinfo(): PartyIdInfo | undefined;
    setPartyidinfo(value?: PartyIdInfo): Payee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payee.AsObject;
    static toObject(includeInstance: boolean, msg: Payee): Payee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payee;
    static deserializeBinaryFromReader(message: Payee, reader: jspb.BinaryReader): Payee;
}

export namespace Payee {
    export type AsObject = {
        partyidinfo?: PartyIdInfo.AsObject,
    }
}

export class Payer extends jspb.Message { 

    hasPartyidinfo(): boolean;
    clearPartyidinfo(): void;
    getPartyidinfo(): PartyIdInfo | undefined;
    setPartyidinfo(value?: PartyIdInfo): Payer;

    hasPersonalinfo(): boolean;
    clearPersonalinfo(): void;
    getPersonalinfo(): PersonalInfo | undefined;
    setPersonalinfo(value?: PersonalInfo): Payer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payer.AsObject;
    static toObject(includeInstance: boolean, msg: Payer): Payer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payer;
    static deserializeBinaryFromReader(message: Payer, reader: jspb.BinaryReader): Payer;
}

export namespace Payer {
    export type AsObject = {
        partyidinfo?: PartyIdInfo.AsObject,
        personalinfo?: PersonalInfo.AsObject,
    }
}

export class PaymentInformation extends jspb.Message { 

    hasCredittransfertransactioninformation(): boolean;
    clearCredittransfertransactioninformation(): void;
    getCredittransfertransactioninformation(): PaymentInformation.CreditTransferTransactionInformationMessage | undefined;
    setCredittransfertransactioninformation(value?: PaymentInformation.CreditTransferTransactionInformationMessage): PaymentInformation;

    hasDebtor(): boolean;
    clearDebtor(): void;
    getDebtor(): PaymentInformation.DebtorMessage | undefined;
    setDebtor(value?: PaymentInformation.DebtorMessage): PaymentInformation;

    hasDebtoraccount(): boolean;
    clearDebtoraccount(): void;
    getDebtoraccount(): PaymentInformation.DebtorAccountMessage | undefined;
    setDebtoraccount(value?: PaymentInformation.DebtorAccountMessage): PaymentInformation;

    hasDebtoragent(): boolean;
    clearDebtoragent(): void;
    getDebtoragent(): PaymentInformation.DebtorAgentMessage | undefined;
    setDebtoragent(value?: PaymentInformation.DebtorAgentMessage): PaymentInformation;
    getPaymentinformationidentification(): string;
    setPaymentinformationidentification(value: string): PaymentInformation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaymentInformation.AsObject;
    static toObject(includeInstance: boolean, msg: PaymentInformation): PaymentInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaymentInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaymentInformation;
    static deserializeBinaryFromReader(message: PaymentInformation, reader: jspb.BinaryReader): PaymentInformation;
}

export namespace PaymentInformation {
    export type AsObject = {
        credittransfertransactioninformation?: PaymentInformation.CreditTransferTransactionInformationMessage.AsObject,
        debtor?: PaymentInformation.DebtorMessage.AsObject,
        debtoraccount?: PaymentInformation.DebtorAccountMessage.AsObject,
        debtoragent?: PaymentInformation.DebtorAgentMessage.AsObject,
        paymentinformationidentification: string,
    }


    export class CreditTransferTransactionInformationMessage extends jspb.Message { 

        hasAmount(): boolean;
        clearAmount(): void;
        getAmount(): PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage | undefined;
        setAmount(value?: PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage): CreditTransferTransactionInformationMessage;

        hasCreditor(): boolean;
        clearCreditor(): void;
        getCreditor(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage | undefined;
        setCreditor(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage): CreditTransferTransactionInformationMessage;

        hasCreditoraccount(): boolean;
        clearCreditoraccount(): void;
        getCreditoraccount(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage | undefined;
        setCreditoraccount(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage): CreditTransferTransactionInformationMessage;

        hasCreditoragent(): boolean;
        clearCreditoragent(): void;
        getCreditoragent(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage | undefined;
        setCreditoragent(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage): CreditTransferTransactionInformationMessage;

        hasPaymentidentification(): boolean;
        clearPaymentidentification(): void;
        getPaymentidentification(): PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage | undefined;
        setPaymentidentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage): CreditTransferTransactionInformationMessage;

        hasPaymenttypeinformation(): boolean;
        clearPaymenttypeinformation(): void;
        getPaymenttypeinformation(): PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage | undefined;
        setPaymenttypeinformation(value?: PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage): CreditTransferTransactionInformationMessage;

        hasRegulatoryreporting(): boolean;
        clearRegulatoryreporting(): void;
        getRegulatoryreporting(): PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage | undefined;
        setRegulatoryreporting(value?: PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage): CreditTransferTransactionInformationMessage;

        hasRemittanceinformation(): boolean;
        clearRemittanceinformation(): void;
        getRemittanceinformation(): PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage | undefined;
        setRemittanceinformation(value?: PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage): CreditTransferTransactionInformationMessage;

        hasSupplementarydata(): boolean;
        clearSupplementarydata(): void;
        getSupplementarydata(): PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage | undefined;
        setSupplementarydata(value?: PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage): CreditTransferTransactionInformationMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CreditTransferTransactionInformationMessage.AsObject;
        static toObject(includeInstance: boolean, msg: CreditTransferTransactionInformationMessage): CreditTransferTransactionInformationMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CreditTransferTransactionInformationMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CreditTransferTransactionInformationMessage;
        static deserializeBinaryFromReader(message: CreditTransferTransactionInformationMessage, reader: jspb.BinaryReader): CreditTransferTransactionInformationMessage;
    }

    export namespace CreditTransferTransactionInformationMessage {
        export type AsObject = {
            amount?: PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.AsObject,
            creditor?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.AsObject,
            creditoraccount?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.AsObject,
            creditoragent?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.AsObject,
            paymentidentification?: PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.AsObject,
            paymenttypeinformation?: PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.AsObject,
            regulatoryreporting?: PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.AsObject,
            remittanceinformation?: PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.AsObject,
            supplementarydata?: PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.AsObject,
        }


        export class AmountMessage extends jspb.Message { 

            hasEquivalentamount(): boolean;
            clearEquivalentamount(): void;
            getEquivalentamount(): PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage | undefined;
            setEquivalentamount(value?: PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage): AmountMessage;

            hasInstructedamount(): boolean;
            clearInstructedamount(): void;
            getInstructedamount(): PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage | undefined;
            setInstructedamount(value?: PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage): AmountMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AmountMessage.AsObject;
            static toObject(includeInstance: boolean, msg: AmountMessage): AmountMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AmountMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AmountMessage;
            static deserializeBinaryFromReader(message: AmountMessage, reader: jspb.BinaryReader): AmountMessage;
        }

        export namespace AmountMessage {
            export type AsObject = {
                equivalentamount?: PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.AsObject,
                instructedamount?: PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.AsObject,
            }


            export class EquivalentAmountMessage extends jspb.Message { 
                getAmount(): number;
                setAmount(value: number): EquivalentAmountMessage;
                getCurrencyoftransfer(): string;
                setCurrencyoftransfer(value: string): EquivalentAmountMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): EquivalentAmountMessage.AsObject;
                static toObject(includeInstance: boolean, msg: EquivalentAmountMessage): EquivalentAmountMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: EquivalentAmountMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): EquivalentAmountMessage;
                static deserializeBinaryFromReader(message: EquivalentAmountMessage, reader: jspb.BinaryReader): EquivalentAmountMessage;
            }

            export namespace EquivalentAmountMessage {
                export type AsObject = {
                    amount: number,
                    currencyoftransfer: string,
                }
            }

            export class InstructedAmountMessage extends jspb.Message { 

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): InstructedAmountMessage.AsObject;
                static toObject(includeInstance: boolean, msg: InstructedAmountMessage): InstructedAmountMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: InstructedAmountMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): InstructedAmountMessage;
                static deserializeBinaryFromReader(message: InstructedAmountMessage, reader: jspb.BinaryReader): InstructedAmountMessage;
            }

            export namespace InstructedAmountMessage {
                export type AsObject = {
                }
            }

        }

        export class CreditorAccountMessage extends jspb.Message { 

            hasIdentification(): boolean;
            clearIdentification(): void;
            getIdentification(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage | undefined;
            setIdentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage): CreditorAccountMessage;
            getName(): string;
            setName(value: string): CreditorAccountMessage;
            getProxy(): string;
            setProxy(value: string): CreditorAccountMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CreditorAccountMessage.AsObject;
            static toObject(includeInstance: boolean, msg: CreditorAccountMessage): CreditorAccountMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CreditorAccountMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CreditorAccountMessage;
            static deserializeBinaryFromReader(message: CreditorAccountMessage, reader: jspb.BinaryReader): CreditorAccountMessage;
        }

        export namespace CreditorAccountMessage {
            export type AsObject = {
                identification?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.AsObject,
                name: string,
                proxy: string,
            }


            export class IdentificationMessage extends jspb.Message { 

                hasContactdetails(): boolean;
                clearContactdetails(): void;
                getContactdetails(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage | undefined;
                setContactdetails(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage): IdentificationMessage;
                getIdentification(): string;
                setIdentification(value: string): IdentificationMessage;

                hasOther(): boolean;
                clearOther(): void;
                getOther(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage | undefined;
                setOther(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage): IdentificationMessage;

                hasPrivateidentification(): boolean;
                clearPrivateidentification(): void;
                getPrivateidentification(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage | undefined;
                setPrivateidentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage): IdentificationMessage;

                hasSchemename(): boolean;
                clearSchemename(): void;
                getSchemename(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage | undefined;
                setSchemename(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage): IdentificationMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): IdentificationMessage.AsObject;
                static toObject(includeInstance: boolean, msg: IdentificationMessage): IdentificationMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: IdentificationMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): IdentificationMessage;
                static deserializeBinaryFromReader(message: IdentificationMessage, reader: jspb.BinaryReader): IdentificationMessage;
            }

            export namespace IdentificationMessage {
                export type AsObject = {
                    contactdetails?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.AsObject,
                    identification: string,
                    other?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.AsObject,
                    privateidentification?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.AsObject,
                    schemename?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.AsObject,
                }


                export class ContactDetailsMessage extends jspb.Message { 
                    getMobilenumber(): string;
                    setMobilenumber(value: string): ContactDetailsMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                    static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
                }

                export namespace ContactDetailsMessage {
                    export type AsObject = {
                        mobilenumber: string,
                    }
                }

                export class OtherMessage extends jspb.Message { 

                    hasContactdetails(): boolean;
                    clearContactdetails(): void;
                    getContactdetails(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage | undefined;
                    setContactdetails(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage): OtherMessage;
                    getIdentification(): string;
                    setIdentification(value: string): OtherMessage;

                    hasPrivateidentification(): boolean;
                    clearPrivateidentification(): void;
                    getPrivateidentification(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage | undefined;
                    setPrivateidentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage): OtherMessage;

                    hasSchemename(): boolean;
                    clearSchemename(): void;
                    getSchemename(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage | undefined;
                    setSchemename(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage): OtherMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): OtherMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: OtherMessage): OtherMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: OtherMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): OtherMessage;
                    static deserializeBinaryFromReader(message: OtherMessage, reader: jspb.BinaryReader): OtherMessage;
                }

                export namespace OtherMessage {
                    export type AsObject = {
                        contactdetails?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.AsObject,
                        identification: string,
                        privateidentification?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.AsObject,
                        schemename?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.AsObject,
                    }


                    export class ContactDetailsMessage extends jspb.Message { 
                        getMobilenumber(): string;
                        setMobilenumber(value: string): ContactDetailsMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                        static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
                    }

                    export namespace ContactDetailsMessage {
                        export type AsObject = {
                            mobilenumber: string,
                        }
                    }

                    export class PrivateIdentificationMessage extends jspb.Message { 

                        hasDateandplaceofbirth(): boolean;
                        clearDateandplaceofbirth(): void;
                        getDateandplaceofbirth(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                        setDateandplaceofbirth(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                        static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
                    }

                    export namespace PrivateIdentificationMessage {
                        export type AsObject = {
                            dateandplaceofbirth?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                        }


                        export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                            getBirthdate(): string;
                            setBirthdate(value: string): DateAndPlaceOfBirthMessage;

                            serializeBinary(): Uint8Array;
                            toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                            static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                            static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                            static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                            static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                        }

                        export namespace DateAndPlaceOfBirthMessage {
                            export type AsObject = {
                                birthdate: string,
                            }
                        }

                    }

                    export class SchemeNameMessage extends jspb.Message { 
                        getProprietary(): string;
                        setProprietary(value: string): SchemeNameMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                        static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
                    }

                    export namespace SchemeNameMessage {
                        export type AsObject = {
                            proprietary: string,
                        }
                    }

                }

                export class PrivateIdentificationMessage extends jspb.Message { 

                    hasDateandplaceofbirth(): boolean;
                    clearDateandplaceofbirth(): void;
                    getDateandplaceofbirth(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                    setDateandplaceofbirth(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                    static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
                }

                export namespace PrivateIdentificationMessage {
                    export type AsObject = {
                        dateandplaceofbirth?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                    }


                    export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                        getBirthdate(): string;
                        setBirthdate(value: string): DateAndPlaceOfBirthMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                        static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                    }

                    export namespace DateAndPlaceOfBirthMessage {
                        export type AsObject = {
                            birthdate: string,
                        }
                    }

                }

                export class SchemeNameMessage extends jspb.Message { 
                    getProprietary(): string;
                    setProprietary(value: string): SchemeNameMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                    static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
                }

                export namespace SchemeNameMessage {
                    export type AsObject = {
                        proprietary: string,
                    }
                }

            }

        }

        export class CreditorAgentMessage extends jspb.Message { 

            hasFinancialinstitutionidentification(): boolean;
            clearFinancialinstitutionidentification(): void;
            getFinancialinstitutionidentification(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage | undefined;
            setFinancialinstitutionidentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage): CreditorAgentMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CreditorAgentMessage.AsObject;
            static toObject(includeInstance: boolean, msg: CreditorAgentMessage): CreditorAgentMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CreditorAgentMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CreditorAgentMessage;
            static deserializeBinaryFromReader(message: CreditorAgentMessage, reader: jspb.BinaryReader): CreditorAgentMessage;
        }

        export namespace CreditorAgentMessage {
            export type AsObject = {
                financialinstitutionidentification?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.AsObject,
            }


            export class FinancialInstitutionIdentificationMessage extends jspb.Message { 

                hasClearingsystemmemberidentification(): boolean;
                clearClearingsystemmemberidentification(): void;
                getClearingsystemmemberidentification(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage | undefined;
                setClearingsystemmemberidentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage): FinancialInstitutionIdentificationMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): FinancialInstitutionIdentificationMessage.AsObject;
                static toObject(includeInstance: boolean, msg: FinancialInstitutionIdentificationMessage): FinancialInstitutionIdentificationMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: FinancialInstitutionIdentificationMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): FinancialInstitutionIdentificationMessage;
                static deserializeBinaryFromReader(message: FinancialInstitutionIdentificationMessage, reader: jspb.BinaryReader): FinancialInstitutionIdentificationMessage;
            }

            export namespace FinancialInstitutionIdentificationMessage {
                export type AsObject = {
                    clearingsystemmemberidentification?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.AsObject,
                }


                export class ClearingSystemMemberIdentificationMessage extends jspb.Message { 
                    getMemberidentification(): string;
                    setMemberidentification(value: string): ClearingSystemMemberIdentificationMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): ClearingSystemMemberIdentificationMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: ClearingSystemMemberIdentificationMessage): ClearingSystemMemberIdentificationMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: ClearingSystemMemberIdentificationMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): ClearingSystemMemberIdentificationMessage;
                    static deserializeBinaryFromReader(message: ClearingSystemMemberIdentificationMessage, reader: jspb.BinaryReader): ClearingSystemMemberIdentificationMessage;
                }

                export namespace ClearingSystemMemberIdentificationMessage {
                    export type AsObject = {
                        memberidentification: string,
                    }
                }

            }

        }

        export class CreditorMessage extends jspb.Message { 

            hasIdentification(): boolean;
            clearIdentification(): void;
            getIdentification(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage | undefined;
            setIdentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage): CreditorMessage;
            getName(): string;
            setName(value: string): CreditorMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CreditorMessage.AsObject;
            static toObject(includeInstance: boolean, msg: CreditorMessage): CreditorMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CreditorMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CreditorMessage;
            static deserializeBinaryFromReader(message: CreditorMessage, reader: jspb.BinaryReader): CreditorMessage;
        }

        export namespace CreditorMessage {
            export type AsObject = {
                identification?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.AsObject,
                name: string,
            }


            export class IdentificationMessage extends jspb.Message { 

                hasContactdetails(): boolean;
                clearContactdetails(): void;
                getContactdetails(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage | undefined;
                setContactdetails(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage): IdentificationMessage;
                getIdentification(): string;
                setIdentification(value: string): IdentificationMessage;

                hasOther(): boolean;
                clearOther(): void;
                getOther(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage | undefined;
                setOther(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage): IdentificationMessage;

                hasPrivateidentification(): boolean;
                clearPrivateidentification(): void;
                getPrivateidentification(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage | undefined;
                setPrivateidentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage): IdentificationMessage;

                hasSchemename(): boolean;
                clearSchemename(): void;
                getSchemename(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage | undefined;
                setSchemename(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage): IdentificationMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): IdentificationMessage.AsObject;
                static toObject(includeInstance: boolean, msg: IdentificationMessage): IdentificationMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: IdentificationMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): IdentificationMessage;
                static deserializeBinaryFromReader(message: IdentificationMessage, reader: jspb.BinaryReader): IdentificationMessage;
            }

            export namespace IdentificationMessage {
                export type AsObject = {
                    contactdetails?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.AsObject,
                    identification: string,
                    other?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.AsObject,
                    privateidentification?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.AsObject,
                    schemename?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.AsObject,
                }


                export class ContactDetailsMessage extends jspb.Message { 
                    getMobilenumber(): string;
                    setMobilenumber(value: string): ContactDetailsMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                    static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
                }

                export namespace ContactDetailsMessage {
                    export type AsObject = {
                        mobilenumber: string,
                    }
                }

                export class OtherMessage extends jspb.Message { 

                    hasContactdetails(): boolean;
                    clearContactdetails(): void;
                    getContactdetails(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage | undefined;
                    setContactdetails(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage): OtherMessage;
                    getIdentification(): string;
                    setIdentification(value: string): OtherMessage;

                    hasPrivateidentification(): boolean;
                    clearPrivateidentification(): void;
                    getPrivateidentification(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage | undefined;
                    setPrivateidentification(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage): OtherMessage;

                    hasSchemename(): boolean;
                    clearSchemename(): void;
                    getSchemename(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage | undefined;
                    setSchemename(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage): OtherMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): OtherMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: OtherMessage): OtherMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: OtherMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): OtherMessage;
                    static deserializeBinaryFromReader(message: OtherMessage, reader: jspb.BinaryReader): OtherMessage;
                }

                export namespace OtherMessage {
                    export type AsObject = {
                        contactdetails?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.AsObject,
                        identification: string,
                        privateidentification?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.AsObject,
                        schemename?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.AsObject,
                    }


                    export class ContactDetailsMessage extends jspb.Message { 
                        getMobilenumber(): string;
                        setMobilenumber(value: string): ContactDetailsMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                        static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
                    }

                    export namespace ContactDetailsMessage {
                        export type AsObject = {
                            mobilenumber: string,
                        }
                    }

                    export class PrivateIdentificationMessage extends jspb.Message { 

                        hasDateandplaceofbirth(): boolean;
                        clearDateandplaceofbirth(): void;
                        getDateandplaceofbirth(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                        setDateandplaceofbirth(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                        static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
                    }

                    export namespace PrivateIdentificationMessage {
                        export type AsObject = {
                            dateandplaceofbirth?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                        }


                        export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                            getBirthdate(): string;
                            setBirthdate(value: string): DateAndPlaceOfBirthMessage;
                            getCityofbirth(): string;
                            setCityofbirth(value: string): DateAndPlaceOfBirthMessage;
                            getCountryofbirth(): string;
                            setCountryofbirth(value: string): DateAndPlaceOfBirthMessage;
                            getProvinceofbirth(): string;
                            setProvinceofbirth(value: string): DateAndPlaceOfBirthMessage;

                            serializeBinary(): Uint8Array;
                            toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                            static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                            static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                            static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                            static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                        }

                        export namespace DateAndPlaceOfBirthMessage {
                            export type AsObject = {
                                birthdate: string,
                                cityofbirth: string,
                                countryofbirth: string,
                                provinceofbirth: string,
                            }
                        }

                    }

                    export class SchemeNameMessage extends jspb.Message { 
                        getProprietary(): string;
                        setProprietary(value: string): SchemeNameMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                        static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
                    }

                    export namespace SchemeNameMessage {
                        export type AsObject = {
                            proprietary: string,
                        }
                    }

                }

                export class PrivateIdentificationMessage extends jspb.Message { 

                    hasDateandplaceofbirth(): boolean;
                    clearDateandplaceofbirth(): void;
                    getDateandplaceofbirth(): PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                    setDateandplaceofbirth(value?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                    static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
                }

                export namespace PrivateIdentificationMessage {
                    export type AsObject = {
                        dateandplaceofbirth?: PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                    }


                    export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                        getBirthdate(): string;
                        setBirthdate(value: string): DateAndPlaceOfBirthMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                        static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                    }

                    export namespace DateAndPlaceOfBirthMessage {
                        export type AsObject = {
                            birthdate: string,
                        }
                    }

                }

                export class SchemeNameMessage extends jspb.Message { 
                    getProprietary(): string;
                    setProprietary(value: string): SchemeNameMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                    static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
                }

                export namespace SchemeNameMessage {
                    export type AsObject = {
                        proprietary: string,
                    }
                }

            }

        }

        export class PaymentIdentificationMessage extends jspb.Message { 
            getEndtoendidentification(): string;
            setEndtoendidentification(value: string): PaymentIdentificationMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PaymentIdentificationMessage.AsObject;
            static toObject(includeInstance: boolean, msg: PaymentIdentificationMessage): PaymentIdentificationMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PaymentIdentificationMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PaymentIdentificationMessage;
            static deserializeBinaryFromReader(message: PaymentIdentificationMessage, reader: jspb.BinaryReader): PaymentIdentificationMessage;
        }

        export namespace PaymentIdentificationMessage {
            export type AsObject = {
                endtoendidentification: string,
            }
        }

        export class PaymentTypeInformationMessage extends jspb.Message { 

            hasCategorypurpose(): boolean;
            clearCategorypurpose(): void;
            getCategorypurpose(): PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage | undefined;
            setCategorypurpose(value?: PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage): PaymentTypeInformationMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PaymentTypeInformationMessage.AsObject;
            static toObject(includeInstance: boolean, msg: PaymentTypeInformationMessage): PaymentTypeInformationMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PaymentTypeInformationMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PaymentTypeInformationMessage;
            static deserializeBinaryFromReader(message: PaymentTypeInformationMessage, reader: jspb.BinaryReader): PaymentTypeInformationMessage;
        }

        export namespace PaymentTypeInformationMessage {
            export type AsObject = {
                categorypurpose?: PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.AsObject,
            }


            export class CategoryPurposeMessage extends jspb.Message { 
                getProprietary(): string;
                setProprietary(value: string): CategoryPurposeMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): CategoryPurposeMessage.AsObject;
                static toObject(includeInstance: boolean, msg: CategoryPurposeMessage): CategoryPurposeMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: CategoryPurposeMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): CategoryPurposeMessage;
                static deserializeBinaryFromReader(message: CategoryPurposeMessage, reader: jspb.BinaryReader): CategoryPurposeMessage;
            }

            export namespace CategoryPurposeMessage {
                export type AsObject = {
                    proprietary: string,
                }
            }

        }

        export class RegulatoryReportingMessage extends jspb.Message { 

            hasDetails(): boolean;
            clearDetails(): void;
            getDetails(): PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage | undefined;
            setDetails(value?: PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage): RegulatoryReportingMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RegulatoryReportingMessage.AsObject;
            static toObject(includeInstance: boolean, msg: RegulatoryReportingMessage): RegulatoryReportingMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RegulatoryReportingMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RegulatoryReportingMessage;
            static deserializeBinaryFromReader(message: RegulatoryReportingMessage, reader: jspb.BinaryReader): RegulatoryReportingMessage;
        }

        export namespace RegulatoryReportingMessage {
            export type AsObject = {
                details?: PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.AsObject,
            }


            export class DetailsMessage extends jspb.Message { 
                getCode(): string;
                setCode(value: string): DetailsMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): DetailsMessage.AsObject;
                static toObject(includeInstance: boolean, msg: DetailsMessage): DetailsMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: DetailsMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): DetailsMessage;
                static deserializeBinaryFromReader(message: DetailsMessage, reader: jspb.BinaryReader): DetailsMessage;
            }

            export namespace DetailsMessage {
                export type AsObject = {
                    code: string,
                }
            }

        }

        export class RemittanceInformationMessage extends jspb.Message { 

            hasStructured(): boolean;
            clearStructured(): void;
            getStructured(): PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage | undefined;
            setStructured(value?: PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage): RemittanceInformationMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RemittanceInformationMessage.AsObject;
            static toObject(includeInstance: boolean, msg: RemittanceInformationMessage): RemittanceInformationMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RemittanceInformationMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RemittanceInformationMessage;
            static deserializeBinaryFromReader(message: RemittanceInformationMessage, reader: jspb.BinaryReader): RemittanceInformationMessage;
        }

        export namespace RemittanceInformationMessage {
            export type AsObject = {
                structured?: PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.AsObject,
            }


            export class StructuredMessage extends jspb.Message { 
                getAdditionalremittanceinformation(): string;
                setAdditionalremittanceinformation(value: string): StructuredMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): StructuredMessage.AsObject;
                static toObject(includeInstance: boolean, msg: StructuredMessage): StructuredMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: StructuredMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): StructuredMessage;
                static deserializeBinaryFromReader(message: StructuredMessage, reader: jspb.BinaryReader): StructuredMessage;
            }

            export namespace StructuredMessage {
                export type AsObject = {
                    additionalremittanceinformation: string,
                }
            }

        }

        export class SupplementaryDataMessage extends jspb.Message { 
            getFeesAmount(): number;
            setFeesAmount(value: number): SupplementaryDataMessage;
            getFeesCurrency(): string;
            setFeesCurrency(value: string): SupplementaryDataMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SupplementaryDataMessage.AsObject;
            static toObject(includeInstance: boolean, msg: SupplementaryDataMessage): SupplementaryDataMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SupplementaryDataMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SupplementaryDataMessage;
            static deserializeBinaryFromReader(message: SupplementaryDataMessage, reader: jspb.BinaryReader): SupplementaryDataMessage;
        }

        export namespace SupplementaryDataMessage {
            export type AsObject = {
                feesAmount: number,
                feesCurrency: string,
            }
        }

    }

    export class DebtorAccountMessage extends jspb.Message { 

        hasIdentification(): boolean;
        clearIdentification(): void;
        getIdentification(): PaymentInformation.DebtorAccountMessage.IdentificationMessage | undefined;
        setIdentification(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage): DebtorAccountMessage;
        getName(): string;
        setName(value: string): DebtorAccountMessage;
        getProxy(): string;
        setProxy(value: string): DebtorAccountMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DebtorAccountMessage.AsObject;
        static toObject(includeInstance: boolean, msg: DebtorAccountMessage): DebtorAccountMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DebtorAccountMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DebtorAccountMessage;
        static deserializeBinaryFromReader(message: DebtorAccountMessage, reader: jspb.BinaryReader): DebtorAccountMessage;
    }

    export namespace DebtorAccountMessage {
        export type AsObject = {
            identification?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.AsObject,
            name: string,
            proxy: string,
        }


        export class IdentificationMessage extends jspb.Message { 

            hasContactdetails(): boolean;
            clearContactdetails(): void;
            getContactdetails(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage | undefined;
            setContactdetails(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage): IdentificationMessage;
            getIdentification(): string;
            setIdentification(value: string): IdentificationMessage;

            hasOther(): boolean;
            clearOther(): void;
            getOther(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage | undefined;
            setOther(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage): IdentificationMessage;

            hasPrivateidentification(): boolean;
            clearPrivateidentification(): void;
            getPrivateidentification(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage | undefined;
            setPrivateidentification(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage): IdentificationMessage;

            hasSchemename(): boolean;
            clearSchemename(): void;
            getSchemename(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage | undefined;
            setSchemename(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage): IdentificationMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): IdentificationMessage.AsObject;
            static toObject(includeInstance: boolean, msg: IdentificationMessage): IdentificationMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: IdentificationMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): IdentificationMessage;
            static deserializeBinaryFromReader(message: IdentificationMessage, reader: jspb.BinaryReader): IdentificationMessage;
        }

        export namespace IdentificationMessage {
            export type AsObject = {
                contactdetails?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.AsObject,
                identification: string,
                other?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.AsObject,
                privateidentification?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.AsObject,
                schemename?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.AsObject,
            }


            export class ContactDetailsMessage extends jspb.Message { 
                getMobilenumber(): string;
                setMobilenumber(value: string): ContactDetailsMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
            }

            export namespace ContactDetailsMessage {
                export type AsObject = {
                    mobilenumber: string,
                }
            }

            export class OtherMessage extends jspb.Message { 

                hasContactdetails(): boolean;
                clearContactdetails(): void;
                getContactdetails(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage | undefined;
                setContactdetails(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage): OtherMessage;
                getIdentification(): string;
                setIdentification(value: string): OtherMessage;

                hasPrivateidentification(): boolean;
                clearPrivateidentification(): void;
                getPrivateidentification(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage | undefined;
                setPrivateidentification(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage): OtherMessage;

                hasSchemename(): boolean;
                clearSchemename(): void;
                getSchemename(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage | undefined;
                setSchemename(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage): OtherMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): OtherMessage.AsObject;
                static toObject(includeInstance: boolean, msg: OtherMessage): OtherMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: OtherMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): OtherMessage;
                static deserializeBinaryFromReader(message: OtherMessage, reader: jspb.BinaryReader): OtherMessage;
            }

            export namespace OtherMessage {
                export type AsObject = {
                    contactdetails?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.AsObject,
                    identification: string,
                    privateidentification?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.AsObject,
                    schemename?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.AsObject,
                }


                export class ContactDetailsMessage extends jspb.Message { 
                    getMobilenumber(): string;
                    setMobilenumber(value: string): ContactDetailsMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                    static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
                }

                export namespace ContactDetailsMessage {
                    export type AsObject = {
                        mobilenumber: string,
                    }
                }

                export class PrivateIdentificationMessage extends jspb.Message { 

                    hasDateandplaceofbirth(): boolean;
                    clearDateandplaceofbirth(): void;
                    getDateandplaceofbirth(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                    setDateandplaceofbirth(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                    static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
                }

                export namespace PrivateIdentificationMessage {
                    export type AsObject = {
                        dateandplaceofbirth?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                    }


                    export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                        getBirthdate(): string;
                        setBirthdate(value: string): DateAndPlaceOfBirthMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                        static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                    }

                    export namespace DateAndPlaceOfBirthMessage {
                        export type AsObject = {
                            birthdate: string,
                        }
                    }

                }

                export class SchemeNameMessage extends jspb.Message { 
                    getProprietary(): string;
                    setProprietary(value: string): SchemeNameMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                    static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
                }

                export namespace SchemeNameMessage {
                    export type AsObject = {
                        proprietary: string,
                    }
                }

            }

            export class PrivateIdentificationMessage extends jspb.Message { 

                hasDateandplaceofbirth(): boolean;
                clearDateandplaceofbirth(): void;
                getDateandplaceofbirth(): PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                setDateandplaceofbirth(value?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
            }

            export namespace PrivateIdentificationMessage {
                export type AsObject = {
                    dateandplaceofbirth?: PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                }


                export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                    getBirthdate(): string;
                    setBirthdate(value: string): DateAndPlaceOfBirthMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                    static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                }

                export namespace DateAndPlaceOfBirthMessage {
                    export type AsObject = {
                        birthdate: string,
                    }
                }

            }

            export class SchemeNameMessage extends jspb.Message { 
                getProprietary(): string;
                setProprietary(value: string): SchemeNameMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
            }

            export namespace SchemeNameMessage {
                export type AsObject = {
                    proprietary: string,
                }
            }

        }

    }

    export class DebtorAgentMessage extends jspb.Message { 

        hasFinancialinstitutionidentification(): boolean;
        clearFinancialinstitutionidentification(): void;
        getFinancialinstitutionidentification(): PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage | undefined;
        setFinancialinstitutionidentification(value?: PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage): DebtorAgentMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DebtorAgentMessage.AsObject;
        static toObject(includeInstance: boolean, msg: DebtorAgentMessage): DebtorAgentMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DebtorAgentMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DebtorAgentMessage;
        static deserializeBinaryFromReader(message: DebtorAgentMessage, reader: jspb.BinaryReader): DebtorAgentMessage;
    }

    export namespace DebtorAgentMessage {
        export type AsObject = {
            financialinstitutionidentification?: PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.AsObject,
        }


        export class FinancialInstitutionIdentificationMessage extends jspb.Message { 

            hasClearingsystemmemberidentification(): boolean;
            clearClearingsystemmemberidentification(): void;
            getClearingsystemmemberidentification(): PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage | undefined;
            setClearingsystemmemberidentification(value?: PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage): FinancialInstitutionIdentificationMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): FinancialInstitutionIdentificationMessage.AsObject;
            static toObject(includeInstance: boolean, msg: FinancialInstitutionIdentificationMessage): FinancialInstitutionIdentificationMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: FinancialInstitutionIdentificationMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): FinancialInstitutionIdentificationMessage;
            static deserializeBinaryFromReader(message: FinancialInstitutionIdentificationMessage, reader: jspb.BinaryReader): FinancialInstitutionIdentificationMessage;
        }

        export namespace FinancialInstitutionIdentificationMessage {
            export type AsObject = {
                clearingsystemmemberidentification?: PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.AsObject,
            }


            export class ClearingSystemMemberIdentificationMessage extends jspb.Message { 
                getMemberidentification(): string;
                setMemberidentification(value: string): ClearingSystemMemberIdentificationMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ClearingSystemMemberIdentificationMessage.AsObject;
                static toObject(includeInstance: boolean, msg: ClearingSystemMemberIdentificationMessage): ClearingSystemMemberIdentificationMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ClearingSystemMemberIdentificationMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ClearingSystemMemberIdentificationMessage;
                static deserializeBinaryFromReader(message: ClearingSystemMemberIdentificationMessage, reader: jspb.BinaryReader): ClearingSystemMemberIdentificationMessage;
            }

            export namespace ClearingSystemMemberIdentificationMessage {
                export type AsObject = {
                    memberidentification: string,
                }
            }

        }

    }

    export class DebtorMessage extends jspb.Message { 

        hasIdentification(): boolean;
        clearIdentification(): void;
        getIdentification(): PaymentInformation.DebtorMessage.IdentificationMessage | undefined;
        setIdentification(value?: PaymentInformation.DebtorMessage.IdentificationMessage): DebtorMessage;
        getName(): string;
        setName(value: string): DebtorMessage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DebtorMessage.AsObject;
        static toObject(includeInstance: boolean, msg: DebtorMessage): DebtorMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DebtorMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DebtorMessage;
        static deserializeBinaryFromReader(message: DebtorMessage, reader: jspb.BinaryReader): DebtorMessage;
    }

    export namespace DebtorMessage {
        export type AsObject = {
            identification?: PaymentInformation.DebtorMessage.IdentificationMessage.AsObject,
            name: string,
        }


        export class IdentificationMessage extends jspb.Message { 

            hasContactdetails(): boolean;
            clearContactdetails(): void;
            getContactdetails(): PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage | undefined;
            setContactdetails(value?: PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage): IdentificationMessage;
            getIdentification(): string;
            setIdentification(value: string): IdentificationMessage;

            hasOther(): boolean;
            clearOther(): void;
            getOther(): PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage | undefined;
            setOther(value?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage): IdentificationMessage;

            hasPrivateidentification(): boolean;
            clearPrivateidentification(): void;
            getPrivateidentification(): PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage | undefined;
            setPrivateidentification(value?: PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage): IdentificationMessage;

            hasSchemename(): boolean;
            clearSchemename(): void;
            getSchemename(): PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage | undefined;
            setSchemename(value?: PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage): IdentificationMessage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): IdentificationMessage.AsObject;
            static toObject(includeInstance: boolean, msg: IdentificationMessage): IdentificationMessage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: IdentificationMessage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): IdentificationMessage;
            static deserializeBinaryFromReader(message: IdentificationMessage, reader: jspb.BinaryReader): IdentificationMessage;
        }

        export namespace IdentificationMessage {
            export type AsObject = {
                contactdetails?: PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.AsObject,
                identification: string,
                other?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.AsObject,
                privateidentification?: PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.AsObject,
                schemename?: PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.AsObject,
            }


            export class ContactDetailsMessage extends jspb.Message { 
                getMobilenumber(): string;
                setMobilenumber(value: string): ContactDetailsMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
            }

            export namespace ContactDetailsMessage {
                export type AsObject = {
                    mobilenumber: string,
                }
            }

            export class OtherMessage extends jspb.Message { 

                hasContactdetails(): boolean;
                clearContactdetails(): void;
                getContactdetails(): PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage | undefined;
                setContactdetails(value?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage): OtherMessage;
                getIdentification(): string;
                setIdentification(value: string): OtherMessage;

                hasPrivateidentification(): boolean;
                clearPrivateidentification(): void;
                getPrivateidentification(): PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage | undefined;
                setPrivateidentification(value?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage): OtherMessage;

                hasSchemename(): boolean;
                clearSchemename(): void;
                getSchemename(): PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage | undefined;
                setSchemename(value?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage): OtherMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): OtherMessage.AsObject;
                static toObject(includeInstance: boolean, msg: OtherMessage): OtherMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: OtherMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): OtherMessage;
                static deserializeBinaryFromReader(message: OtherMessage, reader: jspb.BinaryReader): OtherMessage;
            }

            export namespace OtherMessage {
                export type AsObject = {
                    contactdetails?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.AsObject,
                    identification: string,
                    privateidentification?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.AsObject,
                    schemename?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.AsObject,
                }


                export class ContactDetailsMessage extends jspb.Message { 
                    getMobilenumber(): string;
                    setMobilenumber(value: string): ContactDetailsMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): ContactDetailsMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: ContactDetailsMessage): ContactDetailsMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: ContactDetailsMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): ContactDetailsMessage;
                    static deserializeBinaryFromReader(message: ContactDetailsMessage, reader: jspb.BinaryReader): ContactDetailsMessage;
                }

                export namespace ContactDetailsMessage {
                    export type AsObject = {
                        mobilenumber: string,
                    }
                }

                export class PrivateIdentificationMessage extends jspb.Message { 

                    hasDateandplaceofbirth(): boolean;
                    clearDateandplaceofbirth(): void;
                    getDateandplaceofbirth(): PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                    setDateandplaceofbirth(value?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                    static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
                }

                export namespace PrivateIdentificationMessage {
                    export type AsObject = {
                        dateandplaceofbirth?: PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                    }


                    export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                        getBirthdate(): string;
                        setBirthdate(value: string): DateAndPlaceOfBirthMessage;

                        serializeBinary(): Uint8Array;
                        toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                        static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                        static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                        static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                        static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                    }

                    export namespace DateAndPlaceOfBirthMessage {
                        export type AsObject = {
                            birthdate: string,
                        }
                    }

                }

                export class SchemeNameMessage extends jspb.Message { 
                    getProprietary(): string;
                    setProprietary(value: string): SchemeNameMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                    static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
                }

                export namespace SchemeNameMessage {
                    export type AsObject = {
                        proprietary: string,
                    }
                }

            }

            export class PrivateIdentificationMessage extends jspb.Message { 

                hasDateandplaceofbirth(): boolean;
                clearDateandplaceofbirth(): void;
                getDateandplaceofbirth(): PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage | undefined;
                setDateandplaceofbirth(value?: PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage): PrivateIdentificationMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): PrivateIdentificationMessage.AsObject;
                static toObject(includeInstance: boolean, msg: PrivateIdentificationMessage): PrivateIdentificationMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: PrivateIdentificationMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): PrivateIdentificationMessage;
                static deserializeBinaryFromReader(message: PrivateIdentificationMessage, reader: jspb.BinaryReader): PrivateIdentificationMessage;
            }

            export namespace PrivateIdentificationMessage {
                export type AsObject = {
                    dateandplaceofbirth?: PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.AsObject,
                }


                export class DateAndPlaceOfBirthMessage extends jspb.Message { 
                    getBirthdate(): string;
                    setBirthdate(value: string): DateAndPlaceOfBirthMessage;
                    getCityofbirth(): string;
                    setCityofbirth(value: string): DateAndPlaceOfBirthMessage;
                    getCountryofbirth(): string;
                    setCountryofbirth(value: string): DateAndPlaceOfBirthMessage;
                    getProvinceofbirth(): string;
                    setProvinceofbirth(value: string): DateAndPlaceOfBirthMessage;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): DateAndPlaceOfBirthMessage.AsObject;
                    static toObject(includeInstance: boolean, msg: DateAndPlaceOfBirthMessage): DateAndPlaceOfBirthMessage.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: DateAndPlaceOfBirthMessage, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): DateAndPlaceOfBirthMessage;
                    static deserializeBinaryFromReader(message: DateAndPlaceOfBirthMessage, reader: jspb.BinaryReader): DateAndPlaceOfBirthMessage;
                }

                export namespace DateAndPlaceOfBirthMessage {
                    export type AsObject = {
                        birthdate: string,
                        cityofbirth: string,
                        countryofbirth: string,
                        provinceofbirth: string,
                    }
                }

            }

            export class SchemeNameMessage extends jspb.Message { 
                getProprietary(): string;
                setProprietary(value: string): SchemeNameMessage;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): SchemeNameMessage.AsObject;
                static toObject(includeInstance: boolean, msg: SchemeNameMessage): SchemeNameMessage.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: SchemeNameMessage, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): SchemeNameMessage;
                static deserializeBinaryFromReader(message: SchemeNameMessage, reader: jspb.BinaryReader): SchemeNameMessage;
            }

            export namespace SchemeNameMessage {
                export type AsObject = {
                    proprietary: string,
                }
            }

        }

    }

}

export class PersonalInfo extends jspb.Message { 

    hasComplexname(): boolean;
    clearComplexname(): void;
    getComplexname(): ComplexName | undefined;
    setComplexname(value?: ComplexName): PersonalInfo;
    getDateofbirth(): string;
    setDateofbirth(value: string): PersonalInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonalInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PersonalInfo): PersonalInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonalInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonalInfo;
    static deserializeBinaryFromReader(message: PersonalInfo, reader: jspb.BinaryReader): PersonalInfo;
}

export namespace PersonalInfo {
    export type AsObject = {
        complexname?: ComplexName.AsObject,
        dateofbirth: string,
    }
}

export class ExecuteRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): CustomerCreditTransferInitiationV11 | undefined;
    setBody(value?: CustomerCreditTransferInitiationV11): ExecuteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteRequest): ExecuteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteRequest;
    static deserializeBinaryFromReader(message: ExecuteRequest, reader: jspb.BinaryReader): ExecuteRequest;
}

export namespace ExecuteRequest {
    export type AsObject = {
        body?: CustomerCreditTransferInitiationV11.AsObject,
    }
}

export class SupplementaryData extends jspb.Message { 
    getGeocodeLatitude(): string;
    setGeocodeLatitude(value: string): SupplementaryData;
    getGeocodeLongitude(): string;
    setGeocodeLongitude(value: string): SupplementaryData;
    getPayeeMerchantclassificationcode(): string;
    setPayeeMerchantclassificationcode(value: string): SupplementaryData;
    getPayerMerchantclassificationcode(): string;
    setPayerMerchantclassificationcode(value: string): SupplementaryData;
    getTransactiontypeInitiatortype(): string;
    setTransactiontypeInitiatortype(value: string): SupplementaryData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupplementaryData.AsObject;
    static toObject(includeInstance: boolean, msg: SupplementaryData): SupplementaryData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupplementaryData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupplementaryData;
    static deserializeBinaryFromReader(message: SupplementaryData, reader: jspb.BinaryReader): SupplementaryData;
}

export namespace SupplementaryData {
    export type AsObject = {
        geocodeLatitude: string,
        geocodeLongitude: string,
        payeeMerchantclassificationcode: string,
        payerMerchantclassificationcode: string,
        transactiontypeInitiatortype: string,
    }
}

export class Transaction extends jspb.Message { 
    getAuthenticationtype(): string;
    setAuthenticationtype(value: string): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        authenticationtype: string,
    }
}

export class ExecuteResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): CustomerCreditTransferInitiationV11 | undefined;
    setBody(value?: CustomerCreditTransferInitiationV11): ExecuteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteResponse): ExecuteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteResponse;
    static deserializeBinaryFromReader(message: ExecuteResponse, reader: jspb.BinaryReader): ExecuteResponse;
}

export namespace ExecuteResponse {
    export type AsObject = {
        body?: CustomerCreditTransferInitiationV11.AsObject,
    }
}

export class TransactionType extends jspb.Message { 
    getTransactioninitiator(): string;
    setTransactioninitiator(value: string): TransactionType;
    getTransactioninitiatortype(): string;
    setTransactioninitiatortype(value: string): TransactionType;
    getTransactionscenario(): string;
    setTransactionscenario(value: string): TransactionType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionType.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionType): TransactionType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionType;
    static deserializeBinaryFromReader(message: TransactionType, reader: jspb.BinaryReader): TransactionType;
}

export namespace TransactionType {
    export type AsObject = {
        transactioninitiator: string,
        transactioninitiatortype: string,
        transactionscenario: string,
    }
}
