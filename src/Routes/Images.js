import React, { Fragment } from "react";
import styled from "styled-components";
import { LEFT } from "../Components/queries";
import Img from "../Components/Img";
import { useQuery } from "react-apollo-hooks";

const Container = styled.div``;

const Images = () => {
  const { data, error, loading } = useQuery(LEFT);
  return (
    <Fragment>
      <Container>
        {loading && "Loading"}
        {error && "Something is wrong"}
        {!loading &&
          data &&
          data.images &&
          data.images.map(image => (
            <Img title={image.title} location={image.location} />
          ))}
      </Container>
    </Fragment>
  );
};

export default Images;
