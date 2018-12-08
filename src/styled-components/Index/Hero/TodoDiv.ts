import styled from '../../styled-components';

const TodoDiv = styled.div`
  align-items: center;
  background: ${props => props.theme.stone};
  border-radius: 2rem;
  display: flex;
  font-family: 'Work Sans', sans-serif;
  height: 50px;
  justify-content: space-between;
  width: 8.5rem;
  cursor: pointer;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export default TodoDiv;
