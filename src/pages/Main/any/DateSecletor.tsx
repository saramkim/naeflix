import SelectBox from 'components/SelectBox';

type DateSelectorType = {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
};

function DateSelector({ date, setDate }: DateSelectorType) {
  return (
    <SelectBox setValue={setDate} fontSize={20} top={30} right={30} defaultValue={date}>
      <option value=''>모든 시대</option>
      <option value='2020'>2020년대</option>
      <option value='2010'>2010년대</option>
      <option value='2000'>2000년대</option>
      <option value='1990'>1990년대</option>
      <option value='1980'>1980년대</option>
      <option value='1970'>1970년대</option>
      <option value='1960'>1960년대</option>
    </SelectBox>
  );
}

export default DateSelector;
