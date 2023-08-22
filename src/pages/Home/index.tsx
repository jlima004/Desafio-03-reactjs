import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaPredicate } from 'react-media-hook'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import imgAvatar from '../../assets/avatar.png'
import { PostList } from './components/PostList'

import { HomeContainer, ProfileContainer } from './styled'

const profileContentText = `Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
viverra massa quam dignissim aenean malesuada suscipit. Nunc,
volutpat pulvinar vel mass.`

export function Home() {
  const biggerThan715 = useMediaPredicate('(min-width: 715px)')
  const biggerThan570 = useMediaPredicate('(min-width: 570px)')

  return (
    <HomeContainer>
      <ProfileContainer>
        <div>
          <img className="avatar" src={imgAvatar} alt="" />
          <div className="profileContent">
            <div className="profileTitle">
              <strong>Cameron Williamson</strong>
              <a href={'https://github.com/'} target="_blank" rel="noreferrer">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>

            {biggerThan570 && (
              <p>
                {profileContentText.length > 153
                  ? profileContentText.slice(0, 152) + '...'
                  : profileContentText}
              </p>
            )}

            {biggerThan715 && (
              <footer className="profileInfo">
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
              </footer>
            )}
          </div>
        </div>

        {!biggerThan715 && (
          <footer className="profileInfo">
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
          </footer>
        )}
      </ProfileContainer>

      <PostList />
    </HomeContainer>
  )
}
