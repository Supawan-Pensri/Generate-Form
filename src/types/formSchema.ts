export type FieldType = 'text' | 'email' | 'number' | 'checkbox' | 'textarea';

export interface FormField {
    type: FieldType;
    name: string;
    label: string;
    required?: boolean;
}
