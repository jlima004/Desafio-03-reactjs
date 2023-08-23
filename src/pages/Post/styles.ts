import { styled } from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  width: 54rem;
  margin: 0 auto;
  position: relative;
  top: -5.5rem;

  @media (max-width: 960px) {
    width: auto;
  }
`
export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 10.5rem;
  padding: 2rem;

  border: 0;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  filter: drop-shadow(1px 3px 6px rgba(4, 15, 26, 0.8));

  div.postInfoHeader {
    display: flex;
    justify-content: space-between;
    a {
      font-size: 0.75rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: 1.25rem;
      line-height: 0;
      width: fit-content;
      border-bottom: 1px solid transparent;

      transition: border-bottom-color 0.3s;

      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
      }
    }
  }

  strong {
    margin-top: 0.75rem;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  footer {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(props) => props.theme['base-span']};

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }

    @media (max-width: 570px) {
      font-size: 0.875rem;
      gap: 1rem;
    }
  }
`

export const PostContentContainer = styled.div``
