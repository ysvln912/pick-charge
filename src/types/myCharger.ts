export interface IChargerInfo {
  address: IAddress;
  keyword: string;
  detailed: string;
  speed: string;
  fare: string;
  chargerType: string | null;
  content: string;
}

export interface IAddress {
  name: string;
  location: string;
}

export interface ISearchResult {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface IError {
  isError: boolean;
  errorMessage: string;
}
export interface IErrors {
  address: IError;
  fare: IError;
  chargerType: IError;
}
