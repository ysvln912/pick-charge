import Input from "@/components/common/input/input";
import SearchIcon from "@/components/common/icons/SearchIcon";

interface SearchInputProps {
  placeholder?: string;
  onChange?: () => void;
  name?: string;
  value?: string;
}

export default function SearchInput({
  placeholder,
  onChange,
  name,
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
    </Input>
  );
}
