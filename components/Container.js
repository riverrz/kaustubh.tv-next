import styled from 'styled-components';


export default styled.div`
  padding: 8% 15%;
  color: ${({ theme }) => theme === 'dark' ? '#111' : '#fff'};

  @media only screen and (max-width: 768px) {
    padding: 15%;
  }
`;