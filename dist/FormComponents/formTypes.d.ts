import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
export interface FormComponentProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  rules?: {
    [K in keyof RegisterOptions]: RegisterOptions[K];
  } & {
    required?: {
      value: boolean;
      message: string;
    };
  };
  controlClassName?: string;
  label?: string;
}
export type LabelItem = {
  value: any;
  label: any;
};
