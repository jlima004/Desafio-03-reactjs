import { styled } from 'styled-components'

export const PostListConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div.postListHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  form {
    input[type='text'] {
      width: 100%;
      height: 50px;
      padding: 0.75rem 1rem;

      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};
      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;
    }

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PostListIterator = styled.div`
  margin-top: 2.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  div.postCard {
    max-width: 26rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;

    background: ${(props) => props.theme['base-post']};
    border: 0;
    border-radius: 10px;

    div.cardTitle {
      display: flex;
      gap: 1rem;

      strong {
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-title']};
      }
      span {
        font-size: 0.875rem;
        text-wrap: nowrap;
        color: ${(props) => props.theme['base-span']};
      }
    }

    p {
    }
  }
`