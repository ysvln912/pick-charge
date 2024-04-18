import Input from "@/components/common/input/input";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";

interface SearchInputProps {
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  onChange?: () => void;
  name?: string;
  value?: string;
}

export default function SearchInput({
  placeholder,
  onChange,
  error,
  name,
  errorMessage,
  value,
}: SearchInputProps) {
  return (
    <Input>
      <Input.Base color="primary">
        <Input.Left>
          <SearchIcon />
        </Input.Left>
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
