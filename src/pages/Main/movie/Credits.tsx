import { useCredits } from 'hooks/useCredits';

import HorizontalContainer from '../HorizontalContainer';
import Person from '../Person';
import VerticalContainer from '../VerticalContainer';

function Credits({ id, direction }: { id: string; direction: 'vertical' | 'horizontal' }) {
  const credits = useCredits(id);

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
      {credits.map((person) => (
        <Person {...person} key={person.department ? person.id + person.department : person.id} />
      ))}
    </HorizontalContainer>
  );
}

export default Credits;
