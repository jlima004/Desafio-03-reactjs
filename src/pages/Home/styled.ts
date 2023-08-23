import { styled } from 'styled-components'

export const HomeContainer = styled.div`
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

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 13.25rem;
  padding: 2rem 2rem 1.875rem 2.5rem;

  border: 0;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  filter: drop-shadow(1px 3px 6px rgba(4, 15, 26, 0.8));

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    img.avatar {
      max-width: 9.25rem;
      max-height: 9.25rem;

      @media (max-width: 570px) {
        max-width: 7rem;
        max-height: 7rem;
      }
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
          width: fit-content;
          border-bottom: 1px solid transparent;

          transition: border-bottom-color 0.3s;

          &:hover {
            border-bottom-color: ${(props) => props.theme.blue};
          }
        }

        @media (max-width: 690px) {
          flex-direction: column;
        }
      }
    }
  }

  footer.profileInfo {
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(props) => props.theme['base-subtitle']};

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
