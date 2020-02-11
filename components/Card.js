import styled from "styled-components";

const Card = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      {children}
    </div>
  );
};

export default styled(Card)`
  background-color: #eee;
  color: #222;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    transform: translateY(-20px);
  }
`;
