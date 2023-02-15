import { getPersonCredits } from 'api/personData';
import { useData } from 'hooks/useData';

import HorizontalContainer from '../HorizontalContainer';
import Movie from '../Movie';
import VerticalContainer from '../VerticalContainer';

function Crew({ id, direction }: { id: string; direction: 'vertical' | 'horizontal' }) {
  const { data: credits } = useData({
    callback: getPersonCredits,
    initailValue: null,
    id,
  });

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
