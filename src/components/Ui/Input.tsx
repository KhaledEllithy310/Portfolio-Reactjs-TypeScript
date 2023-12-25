import { InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFormFields } from "../../Interfaces";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof IFormFields;
  id: string;
  label: string;
  type: string;
  register: UseFormRegister<IFormFields>;
  errors: FieldErrors<IFormFields>;
}
const Input = ({ id, label, name, type, register, errors }: IInputProps) => {
  return (
    <section key={id} className="">
      <section className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-white capitalize"
        >
          {label}
        </label>
      </section>
      <section>
        <input
          id={id}
          type={type}
          // required
          {...register(name)}
          className="block w-full rounded-md border-0  p-2 bg-secondary text-white shadow-sm  placeholder:text-gray-400 focus:outline-2 outline-primary  sm:text-sm sm:leading-6"
        />
        <p
          className={`text-red-600 ${
            errors[name] ? "flow-root" : "no"
          } capitalize text-sm pt-1 h-6`}
        >
          {errors[name]?.message}
        </p>
      </section>
    </section>
  );
};

export default Input;
