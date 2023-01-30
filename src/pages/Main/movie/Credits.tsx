import { useCredits } from 'hooks/useCredits';

import HorizontalContainer from '../HorizontalContainer';

import Person from './Person';

function Credits({ id }: { id: string }) {
  const credits = useCredits(id);

  return (
    <HorizontalContainer category='credits' viewAll={false}>
      {credits.map((person) => (
        <Person {...person} key={person.department ? person.id + person.department : person.id} />
      ))}
    </HorizontalContainer>
  );
}

export default Credits;
