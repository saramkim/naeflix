import { getPersonCredits } from 'api/personData';
import HorizontalContainer from 'components/HorizontalContainer';
import VerticalContainer from 'components/VerticalContainer';
import { useData } from 'hooks/useData';

import Movie from '../Movie';

function Crew({ id, direction }: { id: string; direction: 'vertical' | 'horizontal' }) {
  const [credits] = useData({
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
