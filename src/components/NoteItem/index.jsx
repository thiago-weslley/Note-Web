import { FiPlus, FiX } from "react-icons/fi";

import { NoteItemContainer } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <NoteItemContainer isNew={isNew}>
      <input
        placeholder="Novo link"
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus title="Adicionar" /> : <FiX title="Excluir" />}
      </button>
    </NoteItemContainer>
  );
}
