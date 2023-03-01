import SelectBox from 'components/SelectBox';

type CountrySelectorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

function CountrySelector({ setCountry }: CountrySelectorType) {
  return (
    <SelectBox setValue={setCountry} fontSize={20} top={30} right={30}>
      <option value=''>모든 영화</option>
      <option value='ko'>한국 영화</option>
      <option value='foreign'>외국 영화</option>
    </SelectBox>
  );
}

export default CountrySelector;
