export interface Student {
  id: string;
  first_name: string;
  last_name: string;
  guardian: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    tax_id: string;
  };
  cohort: string;
  school: {
    id: string;
    name: string;
    logo: null;
    country: string;
    city: null;
    address: string;
    zip_code: null;
  };
  monthly_grant_type: null;
  monthly_grant_value: null;
  inscription_grant_value: null;
  inscription_grant_type: null;
}

export interface Order {
  id: string;
  concept: string;
  name: string;
  price: string;
  price_currency: string;
  due: string;
  status: string;
  interest: string;
  payin: null | {
    id: string;
    created: string;
  };
}
