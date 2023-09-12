import { ButtonContainer } from "./styles";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <ButtonContainer type="button" isActive={isActive} {...rest}>
      {title}
    </ButtonContainer>
  );
}
