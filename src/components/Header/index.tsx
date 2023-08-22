import { HeaderContainer } from './styled'

import imgLogo from '../../assets/logo.svg'
import leftEffect from '../../assets/header-effect-left.svg'
import rightEffect from '../../assets/header-effect-right.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img className="leftEffect" src={leftEffect} alt="" />
      <img className="logo" src={imgLogo} alt="" />
      <img className="rightEffect" src={rightEffect} alt="" />

      <div className="leftElipseEffect" />
      <div className="rightElipseEffect" />
      <div className="retangleEffect" />
    </HeaderContainer>
  )
}
