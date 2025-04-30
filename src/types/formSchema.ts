export type FormField = {
    name: string;
    label: string;
    type: 'text' | 'number' | 'email' | 'password' | 'textarea' | 'checkbox' | 'select';
    required?: boolean;
    options?: { label: string; value: string }[]; // เฉพาะ type 'select'
};
