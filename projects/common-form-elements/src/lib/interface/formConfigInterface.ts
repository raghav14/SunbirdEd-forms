import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

export enum FieldConfigInputType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  LABEL = 'label',
  NESTED_SELECT = 'nested_select'
}

export enum FieldConfigValidationType {
  REQUIRED = 'required',
  MAXLENGTH = 'maxLength',
  MINLENGTH = 'minLength',
  PATTERN = 'pattern'
}

export  type FieldConfigOptionsBuilder = (context?: FormControl) => Observable<FieldConfigOption[]> | Promise<FieldConfigOption[]>;

export interface FieldConfigOption {
  label: string;
  value: any;
}

export  interface FieldConfigOptionAssociations {
  [key: string]: FieldConfigOption[];
}

export interface FieldConfig {
  code: string;
  type: FieldConfigInputType;
  default?: any;
  context?: string;
  children?: { [key: string]: FieldConfig[] };
  templateOptions: {
    label?: string,
    placeHolder?: string,
    multiple?: boolean,
    hidden?: boolean,
    options?: FieldConfigOption[] | FieldConfigOptionsBuilder | FieldConfigOptionAssociations,
    labelHtml?: {
      contents: string,
      values: {[key: string]: string}
    }
  };
  validations?: [
    {
      type: FieldConfigValidationType,
      value: string | boolean,
      message: string
    }
  ];
}
