export interface Address {
  STREET?: string;
  CITY?: string;
  COUNTRY?: string;
  NOTE?: string;
  STATE_PROVINCE?: string;
  ZIP_CODE?: string;
}

export enum EntityAliasQuality {
  AKA = 'a.k.a.',
  Empty = '',
  FKA = 'f.k.a.',
}

export interface ENTITYALIASElement {
  QUALITY: EntityAliasQuality;
  ALIAS_NAME: string;
}

export interface LastDayUpdated {
  VALUE: string[] | string;
}

export enum VALUEEnum {
  UNList = 'UN List',
}

export interface ListType {
  VALUE: VALUEEnum;
}

export enum UnListType {
  AlQaida = 'Al-Qaida',
  Car = 'CAR',
  Dprk = 'DPRK',
  Drc = 'DRC',
  GB = 'GB',
  Iran = 'Iran',
  Iraq = 'Iraq',
  Libya = 'Libya',
  Mali = 'Mali',
  Somalia = 'Somalia',
  SouthSudan = 'SouthSudan',
  Sudan = 'Sudan',
  Taliban = 'Taliban',
  Yemen = 'Yemen',
}

export enum Gender {
  Female = 'Female',
  GenderMale = 'MALE',
  Male = 'Male',
  Unknown = 'Unknown',
}

export enum IndividualAliasQuality {
  Empty = '',
  Good = 'Good',
  Low = 'Low',
}

export interface INDIVIDUALALIASElement {
  QUALITY: IndividualAliasQuality;
  ALIAS_NAME: string;
  NOTE?: string;
  DATE_OF_BIRTH?: string;
  CITY_OF_BIRTH?: string;
  COUNTRY_OF_BIRTH?: string;
}

export enum TypeOfDate {
  Approximately = 'APPROXIMATELY',
  Between = 'BETWEEN',
  Empty = '',
  Exact = 'EXACT',
}

export interface INDIVIDUALDATEOFBIRTHElement {
  TYPE_OF_DATE: TypeOfDate;
  DATE?: string;
  YEAR?: string;
  NOTE?: string;
  FROM_YEAR?: string;
  TO_YEAR?: string;
}

export enum TypeOfDocument {
  NationalIdentificationNo = 'National identification no.',
  NationalIdentificationNumber = 'National Identification Number',
  NuméroDePasseport = 'Numéro de passeport',
  NúmeroDePasaporte = 'Número de pasaporte',
  Passport = 'Passport',
}

export interface INDIVIDUALDOCUMENTClass {
  TYPE_OF_DOCUMENT: TypeOfDocument;
  NUMBER?: string;
  NOTE?: string;
  COUNTRY_OF_ISSUE?: string;
  TYPE_OF_DOCUMENT2?: string;
  ISSUING_COUNTRY?: string;
  DATE_OF_ISSUE?: Date;
  CITY_OF_ISSUE?: string;
}

export interface INDIVIDUALPLACEOFBIRTHElement {
  CITY?: string;
  STATE_PROVINCE?: string;
  COUNTRY?: string;
  NOTE?: string;
}

export interface Individual {
  _key: string;
  DATAID: string;
  VERSIONNUM: string;
  FIRST_NAME: string;
  SECOND_NAME?: string;
  THIRD_NAME?: string;
  UN_LIST_TYPE: UnListType;
  REFERENCE_NUMBER: string;
  LISTED_ON: string;
  COMMENTS1: string;
  DESIGNATION?: LastDayUpdated;
  NATIONALITY?: LastDayUpdated;
  LIST_TYPE: ListType;
  LAST_DAY_UPDATED: LastDayUpdated;
  INDIVIDUAL_ALIAS?: INDIVIDUALALIASElement[] | INDIVIDUALALIASElement;
  INDIVIDUAL_ADDRESS: Address[] | Address;
  INDIVIDUAL_DATE_OF_BIRTH: INDIVIDUALDATEOFBIRTHElement[] | INDIVIDUALDATEOFBIRTHElement;
  INDIVIDUAL_PLACE_OF_BIRTH: INDIVIDUALPLACEOFBIRTHElement[] | INDIVIDUALPLACEOFBIRTHElement | string;
  INDIVIDUAL_DOCUMENT: Array<INDIVIDUALDOCUMENTClass | string> | INDIVIDUALDOCUMENTClass | string;
  SORT_KEY: string;
  SORT_KEY_LAST_MOD: string;
  NAME_ORIGINAL_SCRIPT?: string;
  FOURTH_NAME?: string;
  GENDER?: Gender;
  TITLE?: LastDayUpdated;
  SUBMITTED_BY?: string;
}

export interface Individuals {
  INDIVIDUAL: Individual[];
}

export interface Entity {
  _key: string;
  DATAID: string;
  VERSIONNUM: string;
  FIRST_NAME: string;
  UN_LIST_TYPE: UnListType;
  REFERENCE_NUMBER: string;
  LISTED_ON: string;
  COMMENTS1: string;
  LIST_TYPE: ListType;
  LAST_DAY_UPDATED: LastDayUpdated;
  ENTITY_ALIAS?: ENTITYALIASElement[] | ENTITYALIASElement;
  ENTITY_ADDRESS: Address[] | Address | string;
  SORT_KEY: string;
  SORT_KEY_LAST_MOD: string;
  NAME_ORIGINAL_SCRIPT?: string;
  SUBMITTED_ON?: Date;
}

export interface Entities {
  ENTITY: Entity[];
}

export interface ConsolidatedList {
  INDIVIDUALS: Individuals[];
  ENTITIES: Entities[];
  _dateGenerated: Date;
}

export interface Welcome8 {
  CONSOLIDATED_LIST: ConsolidatedList;
}
