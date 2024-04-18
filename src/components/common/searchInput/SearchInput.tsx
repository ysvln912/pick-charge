import Input from "../input/input";
import SearchIcon from "../icons/SearchIcon";

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <Input>
      <Input.Base color="primary">
        <Input.Left>
          <SearchIcon />
        </Input.Left>
        <Input.Center placeholder={placeholder} />
      </Input.Base>
    </Input>
  );
}
