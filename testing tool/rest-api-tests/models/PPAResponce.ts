export interface PPAResponseRoot {
    GroupHeader: GroupHeader
    PaymentInformation: PaymentInformation
    SupplementaryData: SupplementaryData2
}

export interface GroupHeader {
    InitiatingParty: InitiatingParty
}

export interface InitiatingParty {
    Name: string
    Identification: Identification
}

export interface Identification {
    Identification: string
    Other: Other
    SchemeName: SchemeName2
    PrivateIdentification: PrivateIdentification2
    ContactDetails: ContactDetails2
}

export interface Other {
    Identification: string
    SchemeName: SchemeName
    PrivateIdentification: PrivateIdentification
    ContactDetails: ContactDetails
}

export interface SchemeName {
    Proprietary: string
}

export interface PrivateIdentification {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth
}

export interface DateAndPlaceOfBirth {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails {
    MobileNumber: string
}

export interface SchemeName2 {
    Proprietary: string
}

export interface PrivateIdentification2 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth2
}

export interface DateAndPlaceOfBirth2 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails2 {
    MobileNumber: string
}

export interface PaymentInformation {
    PaymentInformationIdentification: string
    CreditTransferTransactionInformation: CreditTransferTransactionInformation
    DebtorAccount: DebtorAccount
    DebtorAgent: DebtorAgent
    Debtor: Debtor
}

export interface CreditTransferTransactionInformation {
    PaymentIdentification: PaymentIdentification
    CreditorAccount: CreditorAccount
    CreditorAgent: CreditorAgent
    Creditor: Creditor
    Amount: Amount
    SupplementaryData: SupplementaryData
    PaymentTypeInformation: PaymentTypeInformation
    RegulatoryReporting: RegulatoryReporting
    RemittanceInformation: RemittanceInformation
}

export interface PaymentIdentification {
    EndToEndIdentification: string
}

export interface CreditorAccount {
    Identification: Identification2
    Proxy: string
    Name: string
}

export interface Identification2 {
    Identification: string
    Other: Other2
    SchemeName: SchemeName4
    PrivateIdentification: PrivateIdentification4
    ContactDetails: ContactDetails4
}

export interface Other2 {
    Identification: string
    SchemeName: SchemeName3
    PrivateIdentification: PrivateIdentification3
    ContactDetails: ContactDetails3
}

export interface SchemeName3 {
    Proprietary: string
}

export interface PrivateIdentification3 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth3
}

export interface DateAndPlaceOfBirth3 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails3 {
    MobileNumber: string
}

export interface SchemeName4 {
    Proprietary: string
}

export interface PrivateIdentification4 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth4
}

export interface DateAndPlaceOfBirth4 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails4 {
    MobileNumber: string
}

export interface CreditorAgent {
    FinancialInstitutionIdentification: FinancialInstitutionIdentification
}

export interface FinancialInstitutionIdentification {
    ClearingSystemMemberIdentification: ClearingSystemMemberIdentification
}

export interface ClearingSystemMemberIdentification {
    MemberIdentification: string
}

export interface Creditor {
    Name: string
    Identification: Identification3
}

export interface Identification3 {
    Identification: string
    Other: Other3
    SchemeName: SchemeName6
    PrivateIdentification: PrivateIdentification6
    ContactDetails: ContactDetails6
}

export interface Other3 {
    Identification: string
    SchemeName: SchemeName5
    PrivateIdentification: PrivateIdentification5
    ContactDetails: ContactDetails5
}

export interface SchemeName5 {
    Proprietary: string
}

export interface PrivateIdentification5 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth5
}

export interface DateAndPlaceOfBirth5 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails5 {
    MobileNumber: string
}

export interface SchemeName6 {
    Proprietary: string
}

export interface PrivateIdentification6 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth6
}

export interface DateAndPlaceOfBirth6 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails6 {
    MobileNumber: string
}

export interface Amount {
    InstructedAmount: InstructedAmount
    EquivalentAmount: EquivalentAmount
}

export interface InstructedAmount { }

export interface EquivalentAmount {
    CurrencyOfTransfer: string
    Amount: number
}

export interface SupplementaryData {
    "fees.currency": string
    "fees.amount": number
}

export interface PaymentTypeInformation {
    CategoryPurpose: CategoryPurpose
}

export interface CategoryPurpose {
    Proprietary: string
}

export interface RegulatoryReporting {
    Details: Details
}

export interface Details {
    Code: string
}

export interface RemittanceInformation {
    Structured: Structured
}

export interface Structured {
    AdditionalRemittanceInformation: string
}

export interface DebtorAccount {
    Identification: Identification4
    Proxy: string
    Name: string
}

export interface Identification4 {
    Identification: string
    Other: Other4
    SchemeName: SchemeName8
    PrivateIdentification: PrivateIdentification8
    ContactDetails: ContactDetails8
}

export interface Other4 {
    Identification: string
    SchemeName: SchemeName7
    PrivateIdentification: PrivateIdentification7
    ContactDetails: ContactDetails7
}

export interface SchemeName7 {
    Proprietary: string
}

export interface PrivateIdentification7 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth7
}

export interface DateAndPlaceOfBirth7 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails7 {
    MobileNumber: string
}

export interface SchemeName8 {
    Proprietary: string
}

export interface PrivateIdentification8 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth8
}

export interface DateAndPlaceOfBirth8 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails8 {
    MobileNumber: string
}

export interface DebtorAgent {
    FinancialInstitutionIdentification: FinancialInstitutionIdentification2
}

export interface FinancialInstitutionIdentification2 {
    ClearingSystemMemberIdentification: ClearingSystemMemberIdentification2
}

export interface ClearingSystemMemberIdentification2 {
    MemberIdentification: string
}

export interface Debtor {
    Name: string
    Identification: Identification5
}

export interface Identification5 {
    Identification: string
    Other: Other5
    SchemeName: SchemeName10
    PrivateIdentification: PrivateIdentification10
    ContactDetails: ContactDetails10
}

export interface Other5 {
    Identification: string
    SchemeName: SchemeName9
    PrivateIdentification: PrivateIdentification9
    ContactDetails: ContactDetails9
}

export interface SchemeName9 {
    Proprietary: string
}

export interface PrivateIdentification9 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth9
}

export interface DateAndPlaceOfBirth9 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails9 {
    MobileNumber: string
}

export interface SchemeName10 {
    Proprietary: string
}

export interface PrivateIdentification10 {
    DateAndPlaceOfBirth: DateAndPlaceOfBirth10
}

export interface DateAndPlaceOfBirth10 {
    Birthdate: string
    ProvinceOfBirth: string
    CityOfBirth: string
    CountryOfBirth: string
}

export interface ContactDetails10 {
    MobileNumber: string
}

export interface SupplementaryData2 {
    "payee.merchantClassificationCode": string
    "payer.merchantClassificationCode": string
    "transactionType.initiatorType": string
    "geoCode.latitude": string
    "geoCode.longitude": string
}
