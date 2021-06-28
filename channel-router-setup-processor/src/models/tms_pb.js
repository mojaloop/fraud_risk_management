// source: tms.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.tmsservice.Amount', null, global);
goog.exportSymbol('proto.tmsservice.ComplexName', null, global);
goog.exportSymbol('proto.tmsservice.CustomerCreditTransferInitiationV11', null, global);
goog.exportSymbol('proto.tmsservice.Error', null, global);
goog.exportSymbol('proto.tmsservice.Error.DataMessage', null, global);
goog.exportSymbol('proto.tmsservice.ExecuteRequest', null, global);
goog.exportSymbol('proto.tmsservice.ExecuteResponse', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.Health', null, global);
goog.exportSymbol('proto.tmsservice.MojaloopQuotePostRequest', null, global);
goog.exportSymbol('proto.tmsservice.PartyIdInfo', null, global);
goog.exportSymbol('proto.tmsservice.Payee', null, global);
goog.exportSymbol('proto.tmsservice.Payer', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAgentMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage', null, global);
goog.exportSymbol('proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage', null, global);
goog.exportSymbol('proto.tmsservice.PersonalInfo', null, global);
goog.exportSymbol('proto.tmsservice.SupplementaryData', null, global);
goog.exportSymbol('proto.tmsservice.Transaction', null, global);
goog.exportSymbol('proto.tmsservice.TransactionType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.Amount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.Amount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.Amount.displayName = 'proto.tmsservice.Amount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.ComplexName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.ComplexName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.ComplexName.displayName = 'proto.tmsservice.ComplexName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.CustomerCreditTransferInitiationV11 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.CustomerCreditTransferInitiationV11, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.CustomerCreditTransferInitiationV11.displayName = 'proto.tmsservice.CustomerCreditTransferInitiationV11';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.Error.displayName = 'proto.tmsservice.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.Error.DataMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.Error.DataMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.Error.DataMessage.displayName = 'proto.tmsservice.Error.DataMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.displayName = 'proto.tmsservice.GroupHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.displayName = 'proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.Health = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.Health, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.Health.displayName = 'proto.tmsservice.Health';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.MojaloopQuotePostRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.MojaloopQuotePostRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.MojaloopQuotePostRequest.displayName = 'proto.tmsservice.MojaloopQuotePostRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PartyIdInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PartyIdInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PartyIdInfo.displayName = 'proto.tmsservice.PartyIdInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.Payee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.Payee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.Payee.displayName = 'proto.tmsservice.Payee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.Payer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.Payer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.Payer.displayName = 'proto.tmsservice.Payer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.displayName = 'proto.tmsservice.PaymentInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.displayName = 'proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAgentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAgentMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAgentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.displayName = 'proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.PersonalInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.PersonalInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.PersonalInfo.displayName = 'proto.tmsservice.PersonalInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.ExecuteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.ExecuteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.ExecuteRequest.displayName = 'proto.tmsservice.ExecuteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.SupplementaryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.SupplementaryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.SupplementaryData.displayName = 'proto.tmsservice.SupplementaryData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.Transaction.displayName = 'proto.tmsservice.Transaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.ExecuteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.ExecuteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.ExecuteResponse.displayName = 'proto.tmsservice.ExecuteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tmsservice.TransactionType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tmsservice.TransactionType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tmsservice.TransactionType.displayName = 'proto.tmsservice.TransactionType';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.Amount.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.Amount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.Amount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Amount.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.Amount}
 */
proto.tmsservice.Amount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.Amount;
  return proto.tmsservice.Amount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.Amount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.Amount}
 */
proto.tmsservice.Amount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.Amount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.Amount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.Amount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Amount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.ComplexName.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.ComplexName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.ComplexName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.ComplexName.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.ComplexName}
 */
proto.tmsservice.ComplexName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.ComplexName;
  return proto.tmsservice.ComplexName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.ComplexName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.ComplexName}
 */
proto.tmsservice.ComplexName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.ComplexName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.ComplexName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.ComplexName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.ComplexName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.CustomerCreditTransferInitiationV11.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.CustomerCreditTransferInitiationV11} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupheader: (f = msg.getGroupheader()) && proto.tmsservice.GroupHeader.toObject(includeInstance, f),
    paymentinformation: (f = msg.getPaymentinformation()) && proto.tmsservice.PaymentInformation.toObject(includeInstance, f),
    supplementarydata: (f = msg.getSupplementarydata()) && proto.tmsservice.SupplementaryData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.CustomerCreditTransferInitiationV11}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.CustomerCreditTransferInitiationV11;
  return proto.tmsservice.CustomerCreditTransferInitiationV11.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.CustomerCreditTransferInitiationV11} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.CustomerCreditTransferInitiationV11}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.GroupHeader;
      reader.readMessage(value,proto.tmsservice.GroupHeader.deserializeBinaryFromReader);
      msg.setGroupheader(value);
      break;
    case 2:
      var value = new proto.tmsservice.PaymentInformation;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.deserializeBinaryFromReader);
      msg.setPaymentinformation(value);
      break;
    case 3:
      var value = new proto.tmsservice.SupplementaryData;
      reader.readMessage(value,proto.tmsservice.SupplementaryData.deserializeBinaryFromReader);
      msg.setSupplementarydata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.CustomerCreditTransferInitiationV11.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.CustomerCreditTransferInitiationV11} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupheader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.GroupHeader.serializeBinaryToWriter
    );
  }
  f = message.getPaymentinformation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tmsservice.PaymentInformation.serializeBinaryToWriter
    );
  }
  f = message.getSupplementarydata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.SupplementaryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupHeader GroupHeader = 1;
 * @return {?proto.tmsservice.GroupHeader}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.getGroupheader = function() {
  return /** @type{?proto.tmsservice.GroupHeader} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader, 1));
};


/**
 * @param {?proto.tmsservice.GroupHeader|undefined} value
 * @return {!proto.tmsservice.CustomerCreditTransferInitiationV11} returns this
*/
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.setGroupheader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.CustomerCreditTransferInitiationV11} returns this
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.clearGroupheader = function() {
  return this.setGroupheader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.hasGroupheader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PaymentInformation PaymentInformation = 2;
 * @return {?proto.tmsservice.PaymentInformation}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.getPaymentinformation = function() {
  return /** @type{?proto.tmsservice.PaymentInformation} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation, 2));
};


/**
 * @param {?proto.tmsservice.PaymentInformation|undefined} value
 * @return {!proto.tmsservice.CustomerCreditTransferInitiationV11} returns this
*/
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.setPaymentinformation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.CustomerCreditTransferInitiationV11} returns this
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.clearPaymentinformation = function() {
  return this.setPaymentinformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.hasPaymentinformation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SupplementaryData SupplementaryData = 3;
 * @return {?proto.tmsservice.SupplementaryData}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.getSupplementarydata = function() {
  return /** @type{?proto.tmsservice.SupplementaryData} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.SupplementaryData, 3));
};


/**
 * @param {?proto.tmsservice.SupplementaryData|undefined} value
 * @return {!proto.tmsservice.CustomerCreditTransferInitiationV11} returns this
*/
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.setSupplementarydata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.CustomerCreditTransferInitiationV11} returns this
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.clearSupplementarydata = function() {
  return this.setSupplementarydata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.CustomerCreditTransferInitiationV11.prototype.hasSupplementarydata = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.tmsservice.Error.DataMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.Error}
 */
proto.tmsservice.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.Error;
  return proto.tmsservice.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.Error}
 */
proto.tmsservice.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.Error.DataMessage;
      reader.readMessage(value,proto.tmsservice.Error.DataMessage.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.Error.DataMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.Error.DataMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.Error.DataMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.Error.DataMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Error.DataMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.Error.DataMessage}
 */
proto.tmsservice.Error.DataMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.Error.DataMessage;
  return proto.tmsservice.Error.DataMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.Error.DataMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.Error.DataMessage}
 */
proto.tmsservice.Error.DataMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.Error.DataMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.Error.DataMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.Error.DataMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Error.DataMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.tmsservice.Error.DataMessage.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.Error.DataMessage} returns this
 */
proto.tmsservice.Error.DataMessage.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DataMessage data = 1;
 * @return {?proto.tmsservice.Error.DataMessage}
 */
proto.tmsservice.Error.prototype.getData = function() {
  return /** @type{?proto.tmsservice.Error.DataMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.Error.DataMessage, 1));
};


/**
 * @param {?proto.tmsservice.Error.DataMessage|undefined} value
 * @return {!proto.tmsservice.Error} returns this
*/
proto.tmsservice.Error.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.Error} returns this
 */
proto.tmsservice.Error.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.Error.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    initiatingparty: (f = msg.getInitiatingparty()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader}
 */
proto.tmsservice.GroupHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader;
  return proto.tmsservice.GroupHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader}
 */
proto.tmsservice.GroupHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.deserializeBinaryFromReader);
      msg.setInitiatingparty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitiatingparty();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    identification: (f = msg.getIdentification()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.deserializeBinaryFromReader);
      msg.setIdentification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    other: (f = msg.getOther()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.toObject(includeInstance, f),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader);
      msg.setOther(value);
      break;
    case 4:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 5:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOther();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 4:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 3;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, 3));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 4;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, 4));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage;
  return proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OtherMessage Other = 3;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.getOther = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage, 3));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.OtherMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.setOther = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.clearOther = function() {
  return this.setOther(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.hasOther = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 4;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage, 4));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 5;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage, 5));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional IdentificationMessage Identification = 1;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.prototype.getIdentification = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage.IdentificationMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage} returns this
*/
proto.tmsservice.GroupHeader.InitiatingPartyMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.GroupHeader.InitiatingPartyMessage} returns this
 */
proto.tmsservice.GroupHeader.InitiatingPartyMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional InitiatingPartyMessage InitiatingParty = 1;
 * @return {?proto.tmsservice.GroupHeader.InitiatingPartyMessage}
 */
proto.tmsservice.GroupHeader.prototype.getInitiatingparty = function() {
  return /** @type{?proto.tmsservice.GroupHeader.InitiatingPartyMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.GroupHeader.InitiatingPartyMessage, 1));
};


/**
 * @param {?proto.tmsservice.GroupHeader.InitiatingPartyMessage|undefined} value
 * @return {!proto.tmsservice.GroupHeader} returns this
*/
proto.tmsservice.GroupHeader.prototype.setInitiatingparty = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.GroupHeader} returns this
 */
proto.tmsservice.GroupHeader.prototype.clearInitiatingparty = function() {
  return this.setInitiatingparty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.GroupHeader.prototype.hasInitiatingparty = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.Health.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.Health.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.Health} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Health.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.Health}
 */
proto.tmsservice.Health.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.Health;
  return proto.tmsservice.Health.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.Health} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.Health}
 */
proto.tmsservice.Health.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.Health.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.Health.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.Health} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Health.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.MojaloopQuotePostRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.MojaloopQuotePostRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.MojaloopQuotePostRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && proto.tmsservice.Amount.toObject(includeInstance, f),
    amounttype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payee: (f = msg.getPayee()) && proto.tmsservice.Payee.toObject(includeInstance, f),
    payer: (f = msg.getPayer()) && proto.tmsservice.Payer.toObject(includeInstance, f),
    quoteid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    transactionid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    transactiontype: (f = msg.getTransactiontype()) && proto.tmsservice.TransactionType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.MojaloopQuotePostRequest}
 */
proto.tmsservice.MojaloopQuotePostRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.MojaloopQuotePostRequest;
  return proto.tmsservice.MojaloopQuotePostRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.MojaloopQuotePostRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.MojaloopQuotePostRequest}
 */
proto.tmsservice.MojaloopQuotePostRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.Amount;
      reader.readMessage(value,proto.tmsservice.Amount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmounttype(value);
      break;
    case 3:
      var value = new proto.tmsservice.Payee;
      reader.readMessage(value,proto.tmsservice.Payee.deserializeBinaryFromReader);
      msg.setPayee(value);
      break;
    case 4:
      var value = new proto.tmsservice.Payer;
      reader.readMessage(value,proto.tmsservice.Payer.deserializeBinaryFromReader);
      msg.setPayer(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionid(value);
      break;
    case 7:
      var value = new proto.tmsservice.TransactionType;
      reader.readMessage(value,proto.tmsservice.TransactionType.deserializeBinaryFromReader);
      msg.setTransactiontype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.MojaloopQuotePostRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.MojaloopQuotePostRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.MojaloopQuotePostRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.Amount.serializeBinaryToWriter
    );
  }
  f = message.getAmounttype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.Payee.serializeBinaryToWriter
    );
  }
  f = message.getPayer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.Payer.serializeBinaryToWriter
    );
  }
  f = message.getQuoteid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTransactionid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTransactiontype();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.tmsservice.TransactionType.serializeBinaryToWriter
    );
  }
};


/**
 * optional Amount amount = 1;
 * @return {?proto.tmsservice.Amount}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.getAmount = function() {
  return /** @type{?proto.tmsservice.Amount} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.Amount, 1));
};


/**
 * @param {?proto.tmsservice.Amount|undefined} value
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
*/
proto.tmsservice.MojaloopQuotePostRequest.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string amountType = 2;
 * @return {string}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.getAmounttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.setAmounttype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Payee payee = 3;
 * @return {?proto.tmsservice.Payee}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.getPayee = function() {
  return /** @type{?proto.tmsservice.Payee} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.Payee, 3));
};


/**
 * @param {?proto.tmsservice.Payee|undefined} value
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
*/
proto.tmsservice.MojaloopQuotePostRequest.prototype.setPayee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.clearPayee = function() {
  return this.setPayee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.hasPayee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Payer payer = 4;
 * @return {?proto.tmsservice.Payer}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.getPayer = function() {
  return /** @type{?proto.tmsservice.Payer} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.Payer, 4));
};


/**
 * @param {?proto.tmsservice.Payer|undefined} value
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
*/
proto.tmsservice.MojaloopQuotePostRequest.prototype.setPayer = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.clearPayer = function() {
  return this.setPayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.hasPayer = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string quoteId = 5;
 * @return {string}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.getQuoteid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.setQuoteid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string transactionId = 6;
 * @return {string}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.getTransactionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.setTransactionid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional TransactionType transactionType = 7;
 * @return {?proto.tmsservice.TransactionType}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.getTransactiontype = function() {
  return /** @type{?proto.tmsservice.TransactionType} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.TransactionType, 7));
};


/**
 * @param {?proto.tmsservice.TransactionType|undefined} value
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
*/
proto.tmsservice.MojaloopQuotePostRequest.prototype.setTransactiontype = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.MojaloopQuotePostRequest} returns this
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.clearTransactiontype = function() {
  return this.setTransactiontype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.MojaloopQuotePostRequest.prototype.hasTransactiontype = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PartyIdInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PartyIdInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PartyIdInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PartyIdInfo.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PartyIdInfo}
 */
proto.tmsservice.PartyIdInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PartyIdInfo;
  return proto.tmsservice.PartyIdInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PartyIdInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PartyIdInfo}
 */
proto.tmsservice.PartyIdInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PartyIdInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PartyIdInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PartyIdInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PartyIdInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.Payee.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.Payee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.Payee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Payee.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyidinfo: (f = msg.getPartyidinfo()) && proto.tmsservice.PartyIdInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.Payee}
 */
proto.tmsservice.Payee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.Payee;
  return proto.tmsservice.Payee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.Payee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.Payee}
 */
proto.tmsservice.Payee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PartyIdInfo;
      reader.readMessage(value,proto.tmsservice.PartyIdInfo.deserializeBinaryFromReader);
      msg.setPartyidinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.Payee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.Payee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.Payee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Payee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyidinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PartyIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PartyIdInfo partyIdInfo = 1;
 * @return {?proto.tmsservice.PartyIdInfo}
 */
proto.tmsservice.Payee.prototype.getPartyidinfo = function() {
  return /** @type{?proto.tmsservice.PartyIdInfo} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PartyIdInfo, 1));
};


/**
 * @param {?proto.tmsservice.PartyIdInfo|undefined} value
 * @return {!proto.tmsservice.Payee} returns this
*/
proto.tmsservice.Payee.prototype.setPartyidinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.Payee} returns this
 */
proto.tmsservice.Payee.prototype.clearPartyidinfo = function() {
  return this.setPartyidinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.Payee.prototype.hasPartyidinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.Payer.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.Payer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.Payer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Payer.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyidinfo: (f = msg.getPartyidinfo()) && proto.tmsservice.PartyIdInfo.toObject(includeInstance, f),
    personalinfo: (f = msg.getPersonalinfo()) && proto.tmsservice.PersonalInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.Payer}
 */
proto.tmsservice.Payer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.Payer;
  return proto.tmsservice.Payer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.Payer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.Payer}
 */
proto.tmsservice.Payer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PartyIdInfo;
      reader.readMessage(value,proto.tmsservice.PartyIdInfo.deserializeBinaryFromReader);
      msg.setPartyidinfo(value);
      break;
    case 2:
      var value = new proto.tmsservice.PersonalInfo;
      reader.readMessage(value,proto.tmsservice.PersonalInfo.deserializeBinaryFromReader);
      msg.setPersonalinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.Payer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.Payer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.Payer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Payer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyidinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PartyIdInfo.serializeBinaryToWriter
    );
  }
  f = message.getPersonalinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tmsservice.PersonalInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PartyIdInfo partyIdInfo = 1;
 * @return {?proto.tmsservice.PartyIdInfo}
 */
proto.tmsservice.Payer.prototype.getPartyidinfo = function() {
  return /** @type{?proto.tmsservice.PartyIdInfo} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PartyIdInfo, 1));
};


/**
 * @param {?proto.tmsservice.PartyIdInfo|undefined} value
 * @return {!proto.tmsservice.Payer} returns this
*/
proto.tmsservice.Payer.prototype.setPartyidinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.Payer} returns this
 */
proto.tmsservice.Payer.prototype.clearPartyidinfo = function() {
  return this.setPartyidinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.Payer.prototype.hasPartyidinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PersonalInfo personalInfo = 2;
 * @return {?proto.tmsservice.PersonalInfo}
 */
proto.tmsservice.Payer.prototype.getPersonalinfo = function() {
  return /** @type{?proto.tmsservice.PersonalInfo} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PersonalInfo, 2));
};


/**
 * @param {?proto.tmsservice.PersonalInfo|undefined} value
 * @return {!proto.tmsservice.Payer} returns this
*/
proto.tmsservice.Payer.prototype.setPersonalinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.Payer} returns this
 */
proto.tmsservice.Payer.prototype.clearPersonalinfo = function() {
  return this.setPersonalinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.Payer.prototype.hasPersonalinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    credittransfertransactioninformation: (f = msg.getCredittransfertransactioninformation()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.toObject(includeInstance, f),
    debtor: (f = msg.getDebtor()) && proto.tmsservice.PaymentInformation.DebtorMessage.toObject(includeInstance, f),
    debtoraccount: (f = msg.getDebtoraccount()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.toObject(includeInstance, f),
    debtoragent: (f = msg.getDebtoragent()) && proto.tmsservice.PaymentInformation.DebtorAgentMessage.toObject(includeInstance, f),
    paymentinformationidentification: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation}
 */
proto.tmsservice.PaymentInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation;
  return proto.tmsservice.PaymentInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation}
 */
proto.tmsservice.PaymentInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.deserializeBinaryFromReader);
      msg.setCredittransfertransactioninformation(value);
      break;
    case 2:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.deserializeBinaryFromReader);
      msg.setDebtor(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.deserializeBinaryFromReader);
      msg.setDebtoraccount(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.DebtorAgentMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAgentMessage.deserializeBinaryFromReader);
      msg.setDebtoragent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentinformationidentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredittransfertransactioninformation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.serializeBinaryToWriter
    );
  }
  f = message.getDebtor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.serializeBinaryToWriter
    );
  }
  f = message.getDebtoraccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.serializeBinaryToWriter
    );
  }
  f = message.getDebtoragent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.DebtorAgentMessage.serializeBinaryToWriter
    );
  }
  f = message.getPaymentinformationidentification();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.toObject(includeInstance, f),
    creditor: (f = msg.getCreditor()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.toObject(includeInstance, f),
    creditoraccount: (f = msg.getCreditoraccount()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.toObject(includeInstance, f),
    creditoragent: (f = msg.getCreditoragent()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.toObject(includeInstance, f),
    paymentidentification: (f = msg.getPaymentidentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.toObject(includeInstance, f),
    paymenttypeinformation: (f = msg.getPaymenttypeinformation()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.toObject(includeInstance, f),
    regulatoryreporting: (f = msg.getRegulatoryreporting()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.toObject(includeInstance, f),
    remittanceinformation: (f = msg.getRemittanceinformation()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.toObject(includeInstance, f),
    supplementarydata: (f = msg.getSupplementarydata()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 2:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.deserializeBinaryFromReader);
      msg.setCreditor(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.deserializeBinaryFromReader);
      msg.setCreditoraccount(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.deserializeBinaryFromReader);
      msg.setCreditoragent(value);
      break;
    case 5:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.deserializeBinaryFromReader);
      msg.setPaymentidentification(value);
      break;
    case 6:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.deserializeBinaryFromReader);
      msg.setPaymenttypeinformation(value);
      break;
    case 7:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.deserializeBinaryFromReader);
      msg.setRegulatoryreporting(value);
      break;
    case 8:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.deserializeBinaryFromReader);
      msg.setRemittanceinformation(value);
      break;
    case 9:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.deserializeBinaryFromReader);
      msg.setSupplementarydata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.serializeBinaryToWriter
    );
  }
  f = message.getCreditor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.serializeBinaryToWriter
    );
  }
  f = message.getCreditoraccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.serializeBinaryToWriter
    );
  }
  f = message.getCreditoragent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.serializeBinaryToWriter
    );
  }
  f = message.getPaymentidentification();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getPaymenttypeinformation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.serializeBinaryToWriter
    );
  }
  f = message.getRegulatoryreporting();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.serializeBinaryToWriter
    );
  }
  f = message.getRemittanceinformation();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSupplementarydata();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    equivalentamount: (f = msg.getEquivalentamount()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.toObject(includeInstance, f),
    instructedamount: (f = msg.getInstructedamount()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.deserializeBinaryFromReader);
      msg.setEquivalentamount(value);
      break;
    case 2:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.deserializeBinaryFromReader);
      msg.setInstructedamount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEquivalentamount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.serializeBinaryToWriter
    );
  }
  f = message.getInstructedamount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    currencyoftransfer: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyoftransfer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getCurrencyoftransfer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional float Amount = 1;
 * @return {number}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string CurrencyOfTransfer = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.prototype.getCurrencyoftransfer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage.prototype.setCurrencyoftransfer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional EquivalentAmountMessage EquivalentAmount = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.getEquivalentamount = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.EquivalentAmountMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.setEquivalentamount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.clearEquivalentamount = function() {
  return this.setEquivalentamount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.hasEquivalentamount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InstructedAmountMessage InstructedAmount = 2;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.getInstructedamount = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage, 2));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.InstructedAmountMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.setInstructedamount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.clearInstructedamount = function() {
  return this.setInstructedamount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage.prototype.hasInstructedamount = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    identification: (f = msg.getIdentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    proxy: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.deserializeBinaryFromReader);
      msg.setIdentification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProxy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    other: (f = msg.getOther()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.toObject(includeInstance, f),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader);
      msg.setOther(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 5:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOther();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 3;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 4;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OtherMessage Other = 3;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.getOther = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.OtherMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.setOther = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.clearOther = function() {
  return this.setOther(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.hasOther = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 4;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 5;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage, 5));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional IdentificationMessage Identification = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.getIdentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.IdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Proxy = 3;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.getProxy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage.prototype.setProxy = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    financialinstitutionidentification: (f = msg.getFinancialinstitutionidentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.deserializeBinaryFromReader);
      msg.setFinancialinstitutionidentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinancialinstitutionidentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    clearingsystemmemberidentification: (f = msg.getClearingsystemmemberidentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.deserializeBinaryFromReader);
      msg.setClearingsystemmemberidentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClearingsystemmemberidentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberidentification: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemberidentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberidentification();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MemberIdentification = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.prototype.getMemberidentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.prototype.setMemberidentification = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ClearingSystemMemberIdentificationMessage ClearingSystemMemberIdentification = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.getClearingsystemmemberidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.setClearingsystemmemberidentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.clearClearingsystemmemberidentification = function() {
  return this.setClearingsystemmemberidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.hasClearingsystemmemberidentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FinancialInstitutionIdentificationMessage FinancialInstitutionIdentification = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.prototype.getFinancialinstitutionidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.FinancialInstitutionIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.prototype.setFinancialinstitutionidentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.prototype.clearFinancialinstitutionidentification = function() {
  return this.setFinancialinstitutionidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage.prototype.hasFinancialinstitutionidentification = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    identification: (f = msg.getIdentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.deserializeBinaryFromReader);
      msg.setIdentification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    other: (f = msg.getOther()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.toObject(includeInstance, f),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader);
      msg.setOther(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 5:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOther();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cityofbirth: jspb.Message.getFieldWithDefault(msg, 2, ""),
    countryofbirth: jspb.Message.getFieldWithDefault(msg, 3, ""),
    provinceofbirth: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityofbirth(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryofbirth(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvinceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCityofbirth();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCountryofbirth();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProvinceofbirth();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CityOfBirth = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getCityofbirth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setCityofbirth = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string CountryOfBirth = 3;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getCountryofbirth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setCountryofbirth = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ProvinceOfBirth = 4;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getProvinceofbirth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setProvinceofbirth = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 3;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 4;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OtherMessage Other = 3;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.getOther = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.OtherMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.setOther = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.clearOther = function() {
  return this.setOther(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.hasOther = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 4;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 5;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage, 5));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional IdentificationMessage Identification = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.prototype.getIdentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.IdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    endtoendidentification: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndtoendidentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndtoendidentification();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string EndToEndIdentification = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.prototype.getEndtoendidentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage.prototype.setEndtoendidentification = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    categorypurpose: (f = msg.getCategorypurpose()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.deserializeBinaryFromReader);
      msg.setCategorypurpose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategorypurpose();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CategoryPurposeMessage CategoryPurpose = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.prototype.getCategorypurpose = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.CategoryPurposeMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.prototype.setCategorypurpose = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.prototype.clearCategorypurpose = function() {
  return this.setCategorypurpose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage.prototype.hasCategorypurpose = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    details: (f = msg.getDetails()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Code = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DetailsMessage Details = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.prototype.getDetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.DetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    structured: (f = msg.getStructured()) && proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.deserializeBinaryFromReader);
      msg.setStructured(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStructured();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    additionalremittanceinformation: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdditionalremittanceinformation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdditionalremittanceinformation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string AdditionalRemittanceInformation = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.prototype.getAdditionalremittanceinformation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage.prototype.setAdditionalremittanceinformation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StructuredMessage Structured = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.prototype.getStructured = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.StructuredMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.prototype.setStructured = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.prototype.clearStructured = function() {
  return this.setStructured(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage.prototype.hasStructured = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    feesAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    feesCurrency: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage;
  return proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFeesAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeesCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeesAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getFeesCurrency();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional float fees_amount = 1;
 * @return {number}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.prototype.getFeesAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.prototype.setFeesAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string fees_currency = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.prototype.getFeesCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage.prototype.setFeesCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AmountMessage Amount = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getAmount = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.AmountMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CreditorMessage Creditor = 2;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getCreditor = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage, 2));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setCreditor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearCreditor = function() {
  return this.setCreditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasCreditor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CreditorAccountMessage CreditorAccount = 3;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getCreditoraccount = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAccountMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setCreditoraccount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearCreditoraccount = function() {
  return this.setCreditoraccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasCreditoraccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CreditorAgentMessage CreditorAgent = 4;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getCreditoragent = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.CreditorAgentMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setCreditoragent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearCreditoragent = function() {
  return this.setCreditoragent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasCreditoragent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PaymentIdentificationMessage PaymentIdentification = 5;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getPaymentidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage, 5));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setPaymentidentification = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearPaymentidentification = function() {
  return this.setPaymentidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasPaymentidentification = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PaymentTypeInformationMessage PaymentTypeInformation = 6;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getPaymenttypeinformation = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage, 6));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.PaymentTypeInformationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setPaymenttypeinformation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearPaymenttypeinformation = function() {
  return this.setPaymenttypeinformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasPaymenttypeinformation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RegulatoryReportingMessage RegulatoryReporting = 7;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getRegulatoryreporting = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage, 7));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RegulatoryReportingMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setRegulatoryreporting = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearRegulatoryreporting = function() {
  return this.setRegulatoryreporting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasRegulatoryreporting = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RemittanceInformationMessage RemittanceInformation = 8;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getRemittanceinformation = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage, 8));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.RemittanceInformationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setRemittanceinformation = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearRemittanceinformation = function() {
  return this.setRemittanceinformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasRemittanceinformation = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SupplementaryDataMessage SupplementaryData = 9;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.getSupplementarydata = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage, 9));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.SupplementaryDataMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
*/
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.setSupplementarydata = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} returns this
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.clearSupplementarydata = function() {
  return this.setSupplementarydata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage.prototype.hasSupplementarydata = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    identification: (f = msg.getIdentification()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    proxy: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.deserializeBinaryFromReader);
      msg.setIdentification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProxy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    other: (f = msg.getOther()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.toObject(includeInstance, f),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader);
      msg.setOther(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 5:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOther();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 3;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 4;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage;
  return proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OtherMessage Other = 3;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.getOther = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.OtherMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.setOther = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.clearOther = function() {
  return this.setOther(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.hasOther = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 4;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 5;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage, 5));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional IdentificationMessage Identification = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.getIdentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage.IdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Proxy = 3;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.getProxy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAccountMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAccountMessage.prototype.setProxy = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAgentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    financialinstitutionidentification: (f = msg.getFinancialinstitutionidentification()) && proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAgentMessage;
  return proto.tmsservice.PaymentInformation.DebtorAgentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.deserializeBinaryFromReader);
      msg.setFinancialinstitutionidentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAgentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinancialinstitutionidentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    clearingsystemmemberidentification: (f = msg.getClearingsystemmemberidentification()) && proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage;
  return proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.deserializeBinaryFromReader);
      msg.setClearingsystemmemberidentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClearingsystemmemberidentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberidentification: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage;
  return proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemberidentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberidentification();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MemberIdentification = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.prototype.getMemberidentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage.prototype.setMemberidentification = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ClearingSystemMemberIdentificationMessage ClearingSystemMemberIdentification = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.getClearingsystemmemberidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.ClearingSystemMemberIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.setClearingsystemmemberidentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.clearClearingsystemmemberidentification = function() {
  return this.setClearingsystemmemberidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage.prototype.hasClearingsystemmemberidentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FinancialInstitutionIdentificationMessage FinancialInstitutionIdentification = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.prototype.getFinancialinstitutionidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAgentMessage.FinancialInstitutionIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorAgentMessage.prototype.setFinancialinstitutionidentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorAgentMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.prototype.clearFinancialinstitutionidentification = function() {
  return this.setFinancialinstitutionidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorAgentMessage.prototype.hasFinancialinstitutionidentification = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    identification: (f = msg.getIdentification()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.deserializeBinaryFromReader);
      msg.setIdentification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    other: (f = msg.getOther()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.toObject(includeInstance, f),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader);
      msg.setOther(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 5:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOther();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactdetails: (f = msg.getContactdetails()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(includeInstance, f),
    identification: jspb.Message.getFieldWithDefault(msg, 2, ""),
    privateidentification: (f = msg.getPrivateidentification()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(includeInstance, f),
    schemename: (f = msg.getSchemename()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader);
      msg.setContactdetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentification(value);
      break;
    case 3:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader);
      msg.setPrivateidentification(value);
      break;
    case 4:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader);
      msg.setSchemename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactdetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentification();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrivateidentification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter
    );
  }
  f = message.getSchemename();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mobilenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMobilenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MobileNumber = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.getMobilenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage.prototype.setMobilenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 3;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 4;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateandplaceofbirth: (f = msg.getDateandplaceofbirth()) && proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
      reader.readMessage(value,proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader);
      msg.setDateandplaceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateandplaceofbirth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    birthdate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cityofbirth: jspb.Message.getFieldWithDefault(msg, 2, ""),
    countryofbirth: jspb.Message.getFieldWithDefault(msg, 3, ""),
    provinceofbirth: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityofbirth(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryofbirth(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvinceofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCityofbirth();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCountryofbirth();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProvinceofbirth();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Birthdate = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CityOfBirth = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getCityofbirth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setCityofbirth = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string CountryOfBirth = 3;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getCountryofbirth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setCountryofbirth = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ProvinceOfBirth = 4;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.getProvinceofbirth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage.prototype.setProvinceofbirth = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional DateAndPlaceOfBirthMessage DateAndPlaceOfBirth = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.getDateandplaceofbirth = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.DateAndPlaceOfBirthMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.setDateandplaceofbirth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.clearDateandplaceofbirth = function() {
  return this.setDateandplaceofbirth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage.prototype.hasDateandplaceofbirth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    proprietary: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage;
  return proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProprietary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProprietary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Proprietary = 1;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.prototype.getProprietary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage.prototype.setProprietary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContactDetailsMessage ContactDetails = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.getContactdetails = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.ContactDetailsMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.setContactdetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.clearContactdetails = function() {
  return this.setContactdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.hasContactdetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Identification = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.getIdentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OtherMessage Other = 3;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.getOther = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.OtherMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.setOther = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.clearOther = function() {
  return this.setOther(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.hasOther = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PrivateIdentificationMessage PrivateIdentification = 4;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.getPrivateidentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.PrivateIdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.setPrivateidentification = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.clearPrivateidentification = function() {
  return this.setPrivateidentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.hasPrivateidentification = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SchemeNameMessage SchemeName = 5;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.getSchemename = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage, 5));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.SchemeNameMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.setSchemename = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.clearSchemename = function() {
  return this.setSchemename(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage.prototype.hasSchemename = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional IdentificationMessage Identification = 1;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.prototype.getIdentification = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage.IdentificationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage} returns this
*/
proto.tmsservice.PaymentInformation.DebtorMessage.prototype.setIdentification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.prototype.clearIdentification = function() {
  return this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.DebtorMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation.DebtorMessage} returns this
 */
proto.tmsservice.PaymentInformation.DebtorMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CreditTransferTransactionInformationMessage CreditTransferTransactionInformation = 1;
 * @return {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage}
 */
proto.tmsservice.PaymentInformation.prototype.getCredittransfertransactioninformation = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage, 1));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.CreditTransferTransactionInformationMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation} returns this
*/
proto.tmsservice.PaymentInformation.prototype.setCredittransfertransactioninformation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation} returns this
 */
proto.tmsservice.PaymentInformation.prototype.clearCredittransfertransactioninformation = function() {
  return this.setCredittransfertransactioninformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.prototype.hasCredittransfertransactioninformation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DebtorMessage Debtor = 2;
 * @return {?proto.tmsservice.PaymentInformation.DebtorMessage}
 */
proto.tmsservice.PaymentInformation.prototype.getDebtor = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorMessage, 2));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation} returns this
*/
proto.tmsservice.PaymentInformation.prototype.setDebtor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation} returns this
 */
proto.tmsservice.PaymentInformation.prototype.clearDebtor = function() {
  return this.setDebtor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.prototype.hasDebtor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DebtorAccountMessage DebtorAccount = 3;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAccountMessage}
 */
proto.tmsservice.PaymentInformation.prototype.getDebtoraccount = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAccountMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAccountMessage, 3));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAccountMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation} returns this
*/
proto.tmsservice.PaymentInformation.prototype.setDebtoraccount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation} returns this
 */
proto.tmsservice.PaymentInformation.prototype.clearDebtoraccount = function() {
  return this.setDebtoraccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.prototype.hasDebtoraccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DebtorAgentMessage DebtorAgent = 4;
 * @return {?proto.tmsservice.PaymentInformation.DebtorAgentMessage}
 */
proto.tmsservice.PaymentInformation.prototype.getDebtoragent = function() {
  return /** @type{?proto.tmsservice.PaymentInformation.DebtorAgentMessage} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.PaymentInformation.DebtorAgentMessage, 4));
};


/**
 * @param {?proto.tmsservice.PaymentInformation.DebtorAgentMessage|undefined} value
 * @return {!proto.tmsservice.PaymentInformation} returns this
*/
proto.tmsservice.PaymentInformation.prototype.setDebtoragent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PaymentInformation} returns this
 */
proto.tmsservice.PaymentInformation.prototype.clearDebtoragent = function() {
  return this.setDebtoragent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PaymentInformation.prototype.hasDebtoragent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string PaymentInformationIdentification = 5;
 * @return {string}
 */
proto.tmsservice.PaymentInformation.prototype.getPaymentinformationidentification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PaymentInformation} returns this
 */
proto.tmsservice.PaymentInformation.prototype.setPaymentinformationidentification = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.PersonalInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.PersonalInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.PersonalInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PersonalInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    complexname: (f = msg.getComplexname()) && proto.tmsservice.ComplexName.toObject(includeInstance, f),
    dateofbirth: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.PersonalInfo}
 */
proto.tmsservice.PersonalInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.PersonalInfo;
  return proto.tmsservice.PersonalInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.PersonalInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.PersonalInfo}
 */
proto.tmsservice.PersonalInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.ComplexName;
      reader.readMessage(value,proto.tmsservice.ComplexName.deserializeBinaryFromReader);
      msg.setComplexname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateofbirth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.PersonalInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.PersonalInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.PersonalInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.PersonalInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComplexname();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.ComplexName.serializeBinaryToWriter
    );
  }
  f = message.getDateofbirth();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ComplexName complexName = 1;
 * @return {?proto.tmsservice.ComplexName}
 */
proto.tmsservice.PersonalInfo.prototype.getComplexname = function() {
  return /** @type{?proto.tmsservice.ComplexName} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.ComplexName, 1));
};


/**
 * @param {?proto.tmsservice.ComplexName|undefined} value
 * @return {!proto.tmsservice.PersonalInfo} returns this
*/
proto.tmsservice.PersonalInfo.prototype.setComplexname = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.PersonalInfo} returns this
 */
proto.tmsservice.PersonalInfo.prototype.clearComplexname = function() {
  return this.setComplexname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.PersonalInfo.prototype.hasComplexname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string dateOfBirth = 2;
 * @return {string}
 */
proto.tmsservice.PersonalInfo.prototype.getDateofbirth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.PersonalInfo} returns this
 */
proto.tmsservice.PersonalInfo.prototype.setDateofbirth = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.ExecuteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.ExecuteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.ExecuteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.ExecuteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: (f = msg.getBody()) && proto.tmsservice.CustomerCreditTransferInitiationV11.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.ExecuteRequest}
 */
proto.tmsservice.ExecuteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.ExecuteRequest;
  return proto.tmsservice.ExecuteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.ExecuteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.ExecuteRequest}
 */
proto.tmsservice.ExecuteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.CustomerCreditTransferInitiationV11;
      reader.readMessage(value,proto.tmsservice.CustomerCreditTransferInitiationV11.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.ExecuteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.ExecuteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.ExecuteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.ExecuteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.CustomerCreditTransferInitiationV11.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerCreditTransferInitiationV11 body = 1;
 * @return {?proto.tmsservice.CustomerCreditTransferInitiationV11}
 */
proto.tmsservice.ExecuteRequest.prototype.getBody = function() {
  return /** @type{?proto.tmsservice.CustomerCreditTransferInitiationV11} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.CustomerCreditTransferInitiationV11, 1));
};


/**
 * @param {?proto.tmsservice.CustomerCreditTransferInitiationV11|undefined} value
 * @return {!proto.tmsservice.ExecuteRequest} returns this
*/
proto.tmsservice.ExecuteRequest.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.ExecuteRequest} returns this
 */
proto.tmsservice.ExecuteRequest.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.ExecuteRequest.prototype.hasBody = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.SupplementaryData.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.SupplementaryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.SupplementaryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.SupplementaryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    geocodeLatitude: jspb.Message.getFieldWithDefault(msg, 1, ""),
    geocodeLongitude: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payeeMerchantclassificationcode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    payerMerchantclassificationcode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transactiontypeInitiatortype: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.SupplementaryData}
 */
proto.tmsservice.SupplementaryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.SupplementaryData;
  return proto.tmsservice.SupplementaryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.SupplementaryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.SupplementaryData}
 */
proto.tmsservice.SupplementaryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeocodeLatitude(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeocodeLongitude(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeeMerchantclassificationcode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayerMerchantclassificationcode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactiontypeInitiatortype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.SupplementaryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.SupplementaryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.SupplementaryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.SupplementaryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeocodeLatitude();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGeocodeLongitude();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayeeMerchantclassificationcode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPayerMerchantclassificationcode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransactiontypeInitiatortype();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string geoCode_latitude = 1;
 * @return {string}
 */
proto.tmsservice.SupplementaryData.prototype.getGeocodeLatitude = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.SupplementaryData} returns this
 */
proto.tmsservice.SupplementaryData.prototype.setGeocodeLatitude = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string geoCode_longitude = 2;
 * @return {string}
 */
proto.tmsservice.SupplementaryData.prototype.getGeocodeLongitude = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.SupplementaryData} returns this
 */
proto.tmsservice.SupplementaryData.prototype.setGeocodeLongitude = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string payee_merchantClassificationCode = 3;
 * @return {string}
 */
proto.tmsservice.SupplementaryData.prototype.getPayeeMerchantclassificationcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.SupplementaryData} returns this
 */
proto.tmsservice.SupplementaryData.prototype.setPayeeMerchantclassificationcode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string payer_merchantClassificationCode = 4;
 * @return {string}
 */
proto.tmsservice.SupplementaryData.prototype.getPayerMerchantclassificationcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.SupplementaryData} returns this
 */
proto.tmsservice.SupplementaryData.prototype.setPayerMerchantclassificationcode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string transactionType_initiatorType = 5;
 * @return {string}
 */
proto.tmsservice.SupplementaryData.prototype.getTransactiontypeInitiatortype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.SupplementaryData} returns this
 */
proto.tmsservice.SupplementaryData.prototype.setTransactiontypeInitiatortype = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    authenticationtype: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.Transaction}
 */
proto.tmsservice.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.Transaction;
  return proto.tmsservice.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.Transaction}
 */
proto.tmsservice.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthenticationtype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthenticationtype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string AuthenticationType = 1;
 * @return {string}
 */
proto.tmsservice.Transaction.prototype.getAuthenticationtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.Transaction} returns this
 */
proto.tmsservice.Transaction.prototype.setAuthenticationtype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.ExecuteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.ExecuteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.ExecuteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.ExecuteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: (f = msg.getBody()) && proto.tmsservice.CustomerCreditTransferInitiationV11.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.ExecuteResponse}
 */
proto.tmsservice.ExecuteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.ExecuteResponse;
  return proto.tmsservice.ExecuteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.ExecuteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.ExecuteResponse}
 */
proto.tmsservice.ExecuteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tmsservice.CustomerCreditTransferInitiationV11;
      reader.readMessage(value,proto.tmsservice.CustomerCreditTransferInitiationV11.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.ExecuteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.ExecuteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.ExecuteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.ExecuteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tmsservice.CustomerCreditTransferInitiationV11.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerCreditTransferInitiationV11 body = 1;
 * @return {?proto.tmsservice.CustomerCreditTransferInitiationV11}
 */
proto.tmsservice.ExecuteResponse.prototype.getBody = function() {
  return /** @type{?proto.tmsservice.CustomerCreditTransferInitiationV11} */ (
    jspb.Message.getWrapperField(this, proto.tmsservice.CustomerCreditTransferInitiationV11, 1));
};


/**
 * @param {?proto.tmsservice.CustomerCreditTransferInitiationV11|undefined} value
 * @return {!proto.tmsservice.ExecuteResponse} returns this
*/
proto.tmsservice.ExecuteResponse.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tmsservice.ExecuteResponse} returns this
 */
proto.tmsservice.ExecuteResponse.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tmsservice.ExecuteResponse.prototype.hasBody = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tmsservice.TransactionType.prototype.toObject = function(opt_includeInstance) {
  return proto.tmsservice.TransactionType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tmsservice.TransactionType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.TransactionType.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactioninitiator: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactioninitiatortype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transactionscenario: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tmsservice.TransactionType}
 */
proto.tmsservice.TransactionType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tmsservice.TransactionType;
  return proto.tmsservice.TransactionType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tmsservice.TransactionType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tmsservice.TransactionType}
 */
proto.tmsservice.TransactionType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactioninitiator(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactioninitiatortype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionscenario(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tmsservice.TransactionType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tmsservice.TransactionType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tmsservice.TransactionType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tmsservice.TransactionType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactioninitiator();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactioninitiatortype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransactionscenario();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string TransactionInitiator = 1;
 * @return {string}
 */
proto.tmsservice.TransactionType.prototype.getTransactioninitiator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.TransactionType} returns this
 */
proto.tmsservice.TransactionType.prototype.setTransactioninitiator = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TransactionInitiatorType = 2;
 * @return {string}
 */
proto.tmsservice.TransactionType.prototype.getTransactioninitiatortype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.TransactionType} returns this
 */
proto.tmsservice.TransactionType.prototype.setTransactioninitiatortype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string TransactionScenario = 3;
 * @return {string}
 */
proto.tmsservice.TransactionType.prototype.getTransactionscenario = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tmsservice.TransactionType} returns this
 */
proto.tmsservice.TransactionType.prototype.setTransactionscenario = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.tmsservice);
