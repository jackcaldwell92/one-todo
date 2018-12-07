import styled from '../../styled-components';

const TodoDiv = styled.div`
  align-content: center;
  background: #f8f8f8;
  border-radius: 2rem;
  display: grid;
  fill: ${props => props.theme.offWhite};
  font-family: 'Work Sans', sans-serif;
  font-size: 1.1rem;
  height: 50px;
  justify-items: center;
  width: 19rem;
  cursor: pointer;
`;

export default TodoDiv;
