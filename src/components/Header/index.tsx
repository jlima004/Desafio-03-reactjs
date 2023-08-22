import { useMediaPredicate } from 'react-media-hook'

import { HeaderContainer } from './styled'

import imgLogo from '../../assets/logo.svg'
import leftEffect from '../../assets/header-effect-left.svg'
import rightEffect from '../../assets/header-effect-right.svg'

export function Header() {
  const biggerThan960 = useMediaPredicate('(min-width: 960px)')

  return (
    <HeaderContainer>
      <img className="logo" src={imgLogo} alt="" />

      {biggerThan960 && (
        <>
          <img className="leftEffect" src={leftEffect} alt="" />
          <img className="rightEffect" src={rightEffect} alt="" />
        </>
      )}

      <div className="leftElipseEffect" />
      <div className="rightElipseEffect" />
      <div className="retangleEffect" />
    </HeaderContainer>
  )
}
