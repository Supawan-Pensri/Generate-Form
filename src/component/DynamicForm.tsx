import { useForm } from 'react-hook-form';
import { FormField } from '../types/formSchema';

type Props = {
    schema: FormField[];
};

export default function DynamicForm({ schema }: Props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log('Submitted Data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {schema.map((field) => {
                return (
                    <div key={field.name}>
                        <label className="block mb-1">
                            {field.label}
                            {field.required && <span className="text-red-500"> *</span>}
                        </label>

                        {field.type === 'textarea' ? (
                            <textarea
                                {...register(field.name, { required: field.required })}
                                className="border p-2 w-full"
                            />
                        ) : field.type === 'checkbox' ? (
                            <input
                                type="checkbox"
                                {...register(field.name, { required: field.required })}
                                className="mr-2"
                            />
                        ) : field.type === 'select' && field.options ? (
                            <select
                                {...register(field.name, { required: field.required })}
                                className="border p-2 w-full"
                            >
                                <option value="">-- เลือก --</option>
                                {field.options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type}
                                {...register(field.name, { required: field.required })}
                                className="border p-2 w-full"
                            />
                        )}
                    </div>
                );
            })}

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </form>
    );
}
