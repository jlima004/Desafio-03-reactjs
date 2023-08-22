/* eslint-disable react/no-unknown-property */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import imgAvatar from '../../assets/avatar.png'
import { PostList } from './components/PostList'

import { HomeContainer, ProfileContainer } from './styled'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img className="avatar" src={imgAvatar} alt="" />
        <div className="profileContent">
          <div className="profileTitle">
            <strong>Cameron Williamson</strong>
            <a href={'https://github.com/'} target="_blank" rel="noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div className="profileInfo">
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <p>cameronwll</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <p>Rocketseat</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>32 seguidores</p>
            </div>
          </div>
        </div>
      </ProfileContainer>

      <PostList />
    </HomeContainer>
  )
}
