import React from "react";
import { useFormContext, ValidationRule } from "react-hook-form";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { AutoResizeTextarea } from "./AutoResizeTextarea";
export type FormTextareaProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: string | ValidationRule<boolean> | undefined;
};

const FormTextarea: React.FC<FormTextareaProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl id={props.id}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <AutoResizeTextarea
        {...register(props.name, { required: props.required })}
        placeholder={props.placeholder}
      />
      <ErrorMessage
        errors={errors}
        name={props.name}
        render={({ message }: { message: string }) => {
          return <FormErrorMessage>{message}</FormErrorMessage>;
        }}
      />
    </FormControl>
  );
};

export default FormTextarea;