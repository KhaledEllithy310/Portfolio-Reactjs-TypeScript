export interface INavigation {
  name: string;
  to: string;
}

export interface IFormFields {
  email: string;
  message: string;
  name: string;
  subject: string;
}

export interface IFormInputs {
  name: keyof IFormFields;
  id: string;
  label: string;
  type: string;
}

export interface IFormFieldsWithNameOnly extends Omit<IFormFields, "name"> {}
