import Checkbox from 'components/Checkbox';
import { DATA } from 'utils/constants';

type ListCheckType = {
  category: string;
  setList: React.Dispatch<React.SetStateAction<string[]>>;
  checked: boolean;
};

function ListCheck({ category, setList, checked }: ListCheckType) {
  const onEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setList((v) => [...v, category]);
    else setList((v) => v.filter((v) => v !== category));
  };

  return (
    <Checkbox onChange={onEdit} checked={checked}>
      {DATA.CATEGORY_NAME[category]}
    </Checkbox>
  );
}

export default ListCheck;
