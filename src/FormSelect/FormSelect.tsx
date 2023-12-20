import { Form, Select } from 'antd';
import { FieldValues, useController } from 'react-hook-form';
import { FormSelectProps } from './form-select.type';

export default <T extends FieldValues>({
  defaultValue,
  control,
  name,
  label,
  mode,
  rules,
  ...rest
}: FormSelectProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    // @ts-ignore
    <div className={`${rules?.required.value ? 'requiredInput' : ''}`}>
      <Form.Item
        labelCol={{ span: 24 }}
        label={label}
        validateStatus={error && 'error'}
        help={error && error.message}
      >
        <Select data-cy="form-select" mode={mode} {...rest} {...field} />
      </Form.Item>
    </div>
  );
};
