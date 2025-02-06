// components/inputs/Checkbox.tsx
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckboxProps {
  id: string;
  label: React.ReactNode;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  disabled,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          className="checkbox checkbox-sm checkbox-primary"
        />
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      </div>
      {errors[id] && (
        <span className="text-red-500 text-xs">To pole jest wymagane</span>
      )}
    </div>
  );
};

export default Checkbox;
