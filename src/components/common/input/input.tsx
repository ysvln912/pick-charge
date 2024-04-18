import Label from "@/components/common/label/Label";
import InputCenter from "./Center/InputCenter";
import InputField from "./Field/inputFiled";
import InputRight from "./Right/inputRight";
import InputLeft from "./Left/inputLeft";
import InputBase from "./Base/InputBase";

const Input = Object.assign(InputField, {
  Label: Label,
  Base: InputBase,
  Left: InputLeft,
  Right: InputRight,
  Center: InputCenter,
});

export default Input;

/**
 * @example
 *  searchInput.tsx / labelInput.tsx 참고
 */
