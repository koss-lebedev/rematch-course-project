import styled from 'styled-components'

export const Panel = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  padding: 2rem;
  box-shadow: 0 1rem 4rem 0 rgba(106, 95, 199, 0.07);
  font-size: 1.5rem;
  text-align: center;
  z-index: 1;
`

export const Badge = styled.span`
  background: #F24571;
  color: white;
  font-weight: bold;
  padding: 0.2rem 0.7rem;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
`