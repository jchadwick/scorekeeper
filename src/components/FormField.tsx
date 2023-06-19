export const FormField = ({ label, name, ...props }: FormFieldProps) => {
    return (
        <div className="flex flex-col">
        <label htmlFor={name}>{label}</label>
        <input
            className="border border-gray-400 rounded"
            id={name}
            name={name}
            {...props}
        />
        </div>
    );
    };
}