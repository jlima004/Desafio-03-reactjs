import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  PostContainer,
  PostContentContainer,
  PostInfoContainer,
} from './styles'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import postContentMd from '../../postContent.md'

export function Post() {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    fetch(postContentMd)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])
  return (
    <PostContainer>
      <PostInfoContainer>
        <div className="postInfoHeader">
          <Link to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <a href={'https://github.com/'} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <strong>JavaScript data types and data structures</strong>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>cameronwll</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>Há 1 dia</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <p>5 comentários</p>
          </div>
        </footer>
      </PostInfoContainer>

      <PostContentContainer>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </PostContentContainer>
    </PostContainer>
  )
}
