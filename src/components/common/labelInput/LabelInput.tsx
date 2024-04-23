import Input from "@/components/common/input/input";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
interface LabelInputProps {
  label: string;
  placeholder?: string;
  error?: boolean;
  onChange?: () => void;
  name?: string;
  value?: string;
  errorMessage?: string;
}

export default function LabelInput({
  placeholder,
  label,
  error,
  name,
  value,
  errorMessage,
  onChange,
}: LabelInputProps) {
  return (
    <Input>
      <Input.Label htmlFor={name}>{label}</Input.Label>
      <Input.Base error={error}>
        <Input.Center
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      </Input.Base>
      <ErrorMessage visible={error}>{errorMessage}</ErrorMessage>
    </Input>
  );
}
