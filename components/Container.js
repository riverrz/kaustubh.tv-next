import styled from 'styled-components';


export default styled.div`
  padding: 8% 15%;
  color: ${({ theme }) => console.log(theme) || theme === 'dark' ? '#111' : '#fff'};
`;