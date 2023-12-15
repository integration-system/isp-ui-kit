import { Form, InputNumber } from 'antd';
import { FieldValues, useController } from 'react-hook-form';
import { FormInputNumberProps } from './form-input-number.type';

export default <T extends FieldValues>({
  control,
  name,
  rules,
  label,
  controlClassName = '',
  ...rest
}: FormInputNumberProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });
  return (
    <Form.Item
      className={controlClassName}
      labelCol={{ span: 24 }}
      label={label}
      validateStatus={error && 'error'}
      help={error && error.message}
    >
      {/* @ts-ignore */}
      <InputNumber {...rest} {...field} autoComplete="off" />
    </Form.Item>
  );
};
