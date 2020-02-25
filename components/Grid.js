import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => cols ? `repeat(${cols}, 1fr)` : 'repeat(4, 1fr)'};
  grid-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
