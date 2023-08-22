import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  max-width: 54rem;
  margin: 0 auto;
  position: relative;
  top: -5.5rem;
`

export const ProfileContainer = styled.div`
  min-height: 13.25rem;
  padding: 2rem 2rem 1.875rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  border: 0;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  img.avatar {
    max-width: 9.25rem;
    max-height: 9.25rem;
  }

  div.profileContent {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div.profileTitle {
      display: flex;
      justify-content: space-between;
      strong {
        font-size: 1.5rem;
        line-height: 1.3;
        color: ${(props) => props.theme['base-title']};
      }

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
        border-bottom: 1px solid transparent;

        transition: border-bottom-color 0.3s;

        &:hover {
          border-bottom-color: ${(props) => props.theme.blue};
        }
      }
    }

    div.profileInfo {
      margin-top: 1rem;
      display: flex;
      gap: 1.5rem;

      div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${(props) => props.theme['base-subtitle']};

        svg {
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
`
