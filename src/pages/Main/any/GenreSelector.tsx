import SelectBox from 'components/SelectBox';
import { GENRE } from 'utils/constants';

type GenreSelectorType = { setGenre: React.Dispatch<React.SetStateAction<string>> };

function GenreSelector({ setGenre }: GenreSelectorType) {
  return (
    <SelectBox setValue={setGenre} fontSize={20} top={30} right={160}>
      <option value=''>모든 장르</option>
      {GENRE.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </SelectBox>
  );
}

export default GenreSelector;
