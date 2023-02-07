import { usePersonCredits } from 'hooks/usePersonCredits';

import HorizontalContainer from '../HorizontalContainer';
import Movie from '../Movie';
import VerticalContainer from '../VerticalContainer';

function Cast({ id, direction }: { id: string; direction: 'vertical' | 'horizontal' }) {
  const credits = usePersonCredits(id);

  if (credits) {
    const { cast } = credits;

    if (direction === 'vertical')
      return (
        <VerticalContainer category='cast'>
          {cast.map((data) => (
            <Movie {...data} key={data.id} />
          ))}
        </VerticalContainer>
      );

    return (
      <HorizontalContainer category='cast'>
        {cast.map((data) => (
          <Movie {...data} key={data.id} />
        ))}
      </HorizontalContainer>
    );
  }

  return null;
}

export default Cast;
