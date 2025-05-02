import { useState } from 'react';
import DynamicForm from './DynamicForm';
import { FormField } from '../types/formSchema';

export default function From() {
    const [formSchema, setFormSchema] = useState<FormField[] | null>([]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const text = await file.text();
        try {
            const json = JSON.parse(text);
            setFormSchema(json.fields);
        } catch (err) {
            alert('Invalid JSON format');
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-md mt-10">
            <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                Upload JSON to Generate Form
            </h1>

            <div className="flex flex-col items-center space-y-4">
                <label
                    htmlFor="json-upload"
                    className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Select JSON File
                    <input
                        id="json-upload"
                        type="file"
                        accept="application/json"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>
            </div>

            <hr className="my-8 border-gray-300" />

            {formSchema && (
                <div className="mt-4">
                    <DynamicForm schema={formSchema} />
                </div>
            )}
        </div>

    );
}