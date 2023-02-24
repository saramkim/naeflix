import { getCredits } from 'api/personData';
import { CreditsDataType } from 'api/personType';
import HorizontalContainer from 'components/HorizontalContainer';
import VerticalContainer from 'components/VerticalContainer';
import { useData } from 'hooks/useData';

import Person from '../Person';

function Credits({ id, direction }: { id: string; direction: 'vertical' | 'horizontal' }) {
  const [credits] = useData<CreditsDataType[]>({
    callback: getCredits,
    initailValue: [],
    id,
  });

  if (direction === 'vertical')
    return (
      <VerticalContainer category='credits'>
        {credits.map((person) => (
          <Person {...person} key={person.department ? person.id + person.department : person.id} />
        ))}
      </VerticalContainer>
    );

  return (
    <HorizontalContainer category='credits'>
      {credits
        .filter(({ profile_path }) => profile_path)
        .map((person) => (
          <Person {...person} key={person.department ? person.id + person.department : person.id} />
        ))}
    </HorizontalContainer>
  );
}

export default Credits;
