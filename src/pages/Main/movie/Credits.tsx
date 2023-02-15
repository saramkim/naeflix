import { getCredits } from 'api/personData';
import { CreditsDataType } from 'api/personType';
import { useData } from 'hooks/useData';

import HorizontalContainer from '../HorizontalContainer';
import Person from '../Person';
import VerticalContainer from '../VerticalContainer';

function Credits({ id, direction }: { id: string; direction: 'vertical' | 'horizontal' }) {
  const { data: credits } = useData<CreditsDataType[]>({
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
