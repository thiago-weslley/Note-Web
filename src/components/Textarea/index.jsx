import { TextareaContainer } from "./styles";

export function Textarea({ value, ...rest }) {
  return <TextareaContainer {...rest}>{value}</TextareaContainer>;
}
