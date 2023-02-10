import styled from 'styled-components';
import { DATA, STYLE } from 'utils/constants';

type CheckboxType = {
  category: string;
  setList: React.Dispatch<React.SetStateAction<string[]>>;
  checked: boolean;
};

const CheckboxLayout = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  width: fit-content;
`;

const Input = styled.input`
  font-size: inherit;
  cursor: pointer;
  appearance: none;
  border: 2px solid rgb(155, 155, 155);
  border-radius: 0.35em;
  width: 1.2em;
  height: 1.2em;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${STYLE.MAIN_COLOR};
  }
`;

const Text = styled.span`
  margin-left: 5px;
`;

function Checkbox({ category, setList, checked }: CheckboxType) {
  const onEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setList) {
      if (e.target.checked) setList((v) => [...v, category]);
      else setList((v) => v.filter((v) => v !== category));
    }
  };

  return (
    <CheckboxLayout>
      <Input type='checkbox' onChange={onEdit} checked={checked} />
      <Text>{DATA.CATEGORY_NAME[category]}</Text>
    </CheckboxLayout>
  );
}

export default Checkbox;
