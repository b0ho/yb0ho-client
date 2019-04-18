import React from "react";
import styled from "styled-components";
import { LEFT } from "../Components/queries";
import Img from "../Components/Img";
import { useQuery } from "react-apollo-hooks";

const Container = styled.div``;

const Images = () => {
  const { data, error, loading } = useQuery(LEFT);
  return (
    <Container>
      data.images.map(image => (
      <Img title={images.title} />
      )}
    </Container>
  );
};

export default Images;
