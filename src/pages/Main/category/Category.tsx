import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import MoviesWithStars from '../MoviesWithStars';
import TopRatedMovies from '../TopRatedMovies';

const CategoryLayout = styled.div`
  padding: 50px;
  min-height: calc(100vh - 479px);
`;

function Category() {
  const { category } = useParams();

  if (category === 'top-rated')
    return (
      <CategoryLayout>
        <TopRatedMovies direction='vertical' />
      </CategoryLayout>
    );

  return (
    <CategoryLayout>
      <MoviesWithStars direction='vertical' category={category!} />
    </CategoryLayout>
  );
}

export default Category;
