import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import MoviesWithStars from '../MoviesWithStars';
import WatchedMovies from '../WatchedMovies';

const CategoryLayout = styled.div`
  padding: 50px;
`;

function Category() {
  const { category } = useParams();

  if (category === 'watched')
    return (
      <CategoryLayout>
        <WatchedMovies direction='vertical' />
      </CategoryLayout>
    );

  return (
    <CategoryLayout>
      <MoviesWithStars direction='vertical' category={category!} />
    </CategoryLayout>
  );
}

export default Category;
