import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: .7rem 0;

  & > * + * {
    margin-top: .7rem;
  }
`
