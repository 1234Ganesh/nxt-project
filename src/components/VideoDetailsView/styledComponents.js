import styled from 'styled-components'

export const VideoFDetailsViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-width: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and(min-width:768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
