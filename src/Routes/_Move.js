import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HOME_PAGE } from "../Components/queries";
import Movie from "../Components/Movie";
import { useQuery } from "react-apollo-hooks";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const _Move = () => {
  const { data, error, loading } = useQuery(HOME_PAGE);
  return (
    <Container>
      <Helmet>
        <title>Home | MovieQL</title>
      </Helmet>
      {loading && "Loading"}
      {error && "Something is wrong"}
      {!loading &&
        data &&
        data.movies &&
        data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          />
        ))}
    </Container>
  );
};

export default _Move;
