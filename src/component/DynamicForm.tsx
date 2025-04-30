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
                        <label className="block mb-1">{field.label}</label>
                        {field.type === 'textarea' ? (
                            <textarea
                                {...register(field.name, { required: field.required })}
                                className="border p-2 w-full"
                            />
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
            </button>
        </form>
    );
}
