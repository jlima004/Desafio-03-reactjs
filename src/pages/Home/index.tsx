import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaPredicate } from 'react-media-hook'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { PostList } from './components/PostList'
import { BlogContext } from '../../contexts/BlogContext'

import { HomeContainer, ProfileContainer } from './styled'

export function Home() {
  const { user } = useContext(BlogContext)

  const biggerThan715 = useMediaPredicate('(min-width: 715px)')
  const biggerThan570 = useMediaPredicate('(min-width: 570px)')

  return (
    <HomeContainer>
      <ProfileContainer>
        <div>
          <img className="avatar" src={user?.avatar_url} alt="" />
          <div className="profileContent">
            <div className="profileTitle">
              <strong>{user?.name}</strong>
              <a href={user?.html_url} target="_blank" rel="noreferrer">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>

            {biggerThan570 && (
              <p>
                {user?.bio && user.bio.length > 153
                  ? user.bio.slice(0, 152) + '...'
                  : user?.bio}
              </p>
            )}

            {biggerThan715 && (
              <footer className="profileInfo">
                {user?.login && (
                  <div>
                    <FontAwesomeIcon icon={faGithub} />
                    <p>{user.login}</p>
                  </div>
                )}
                {user?.company && (
                  <div>
                    <FontAwesomeIcon icon={faBuilding} />
                    <p>{user.company}</p>
                  </div>
                )}
                {user?.followers && (
                  <div>
                    <FontAwesomeIcon icon={faUserGroup} />
                    <p>{user.followers} seguidores</p>
                  </div>
                )}
              </footer>
            )}
          </div>
        </div>

        {!biggerThan715 && (
          <footer className="profileInfo">
            {user?.login && (
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <p>{user.login}</p>
              </div>
            )}
            {user?.company && (
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <p>{user.company}</p>
              </div>
            )}
            {user?.followers && (
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <p>{user.followers} seguidores</p>
              </div>
            )}
          </footer>
        )}
      </ProfileContainer>

      <PostList />
    </HomeContainer>
  )
}
