import { usePersonCredits } from 'hooks/usePersonCredits';

import HorizontalContainer from '../HorizontalContainer';
import Movie from '../Movie';
import VerticalContainer from '../VerticalContainer';

function Crew({ id, direction }: { id: string; direction: 'vertical' | 'horizontal' }) {
  const credits = usePersonCredits(id);

  if (credits) {
    const { crew } = credits;

    if (direction === 'vertical')
      return (
        <VerticalContainer category='crew'>
          {crew.map((data) => (
            <Movie {...data} key={data.id} />
          ))}
        </VerticalContainer>
      );

    return (
      <HorizontalContainer category='crew'>
        {crew.map((data) => (
          <Movie {...data} key={data.id} />
        ))}
      </HorizontalContainer>
    );
  }

  return null;
}

export default Crew;
