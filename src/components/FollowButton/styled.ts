import styled from 'styled-components'

export const Button = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? '#22d827' : '#107EFF'};
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.4rem;
  border-radius: 10rem;
  width: 12rem;

  &:hover {
    cursor: pointer;
    background: ${props => props.isActive ? '#4af54f' : '#00a1ff'};
  }
`