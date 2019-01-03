import styled from 'styled-components'

export const Wrapper = styled.article`
  background: white;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 1rem 4rem 0 rgba(106, 95, 199, 0.07);
  display: flex;
  align-items: center;
`

export const LeftColumn = styled.div`

`

export const MiddleColumn = styled.div`
  flex: auto;
  padding-right: 2rem;
`

export const RightColumn = styled.div`

`

export const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 6rem;
  margin-right: 3rem;
  filter: grayscale(1);
`

export const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #2E3041;
  margin-bottom: 1rem;
  text-transform: capitalize;
`

export const Location = styled.p`
  color: #7C93A9;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-transform: capitalize;
`