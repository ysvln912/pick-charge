import Label from "@/components/common/label/Label";
import InputCenter from "./Center/Center";
import InputField from "./Field/Filed";
import InputRight from "./Right/Right";
import InputLeft from "./Left/Left";
import InputBase from "./Base/Base";

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
