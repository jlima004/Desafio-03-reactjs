import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  position: absolute;
  width: 100vw;
  background: ${(props) => props.theme['base-profile']};

  img.leftEffect {
    max-width: 25.562rem;
    position: absolute;
    left: 0;
    top: 4.375rem;
  }

  img.rightEffect {
    max-width: 23.187rem;
    position: absolute;
    right: 0;
    top: 1.875rem;
  }

  div.leftElipseEffect {
    width: 14.75rem;
    height: 14.75rem;
    position: absolute;
    top: -6rem;
    left: -8.125rem;

    border: 0;
    border-radius: 100%;
    background: rgba(20, 88, 156, 0.7);

    filter: blur(10.75rem);
  }
  div.rightElipseEffect {
    width: 9.703rem;
    height: 9.703rem;
    position: absolute;
    top: -3.258rem;
    right: 0;

    border: 0;
    border-radius: 100%;
    background: rgba(20, 88, 156, 0.7);
    filter: blur(9.703rem);
  }

  div.retangleEffect {
    width: 55.687rem;
    height: 3.25rem;
    position: absolute;
    bottom: 0.562rem;
    left: calc(50vw - 27.843rem);

    background: rgba(20, 88, 156, 0.7);
    filter: blur(6rem);
  }

  img.logo {
    max-width: 9.25rem;
    display: block;
    margin: 4rem auto 0;
  }
`
