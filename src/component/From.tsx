import { useState } from 'react';
import DynamicForm from './DynamicForm';
import { FormField } from '../types/formSchema';

export default function From() {
    const [formSchema, setFormSchema] = useState<FormField[] | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const text = await file.text();
        try {
            const json = JSON.parse(text);
            setFormSchema(json);
        } catch (err) {
            alert('Invalid JSON format');
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Upload JSON to Generate Form</h1>
            <input type="file" accept="application/json" onChange={handleFileChange} />
            <hr className="my-6" />
            {formSchema && <DynamicForm schema={formSchema} />}
        </div>
    );
}