import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../../lib/axios'
import { Issue } from '../../contexts/BlogContext'

import {
  PostContainer,
  PostContentContainer,
  PostInfoContainer,
} from './styles'

export function Post() {
  const [issue, setIssue] = useState<Issue>()

  const { number } = useParams()

  const fetchIssue = useCallback(async () => {
    const response = await api.get(
      `/repos/${import.meta.env.VITE_USER_LOGIN}/${
        import.meta.env.VITE_GITHUB_REPOSITORY
      }/issues/${number}`,
    )

    if (response) setIssue(response.data)
  }, [number])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <PostContainer>
      <PostInfoContainer>
        <div className="postInfoHeader">
          <Link to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <a href={issue?.html_url} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <strong>{issue?.title}</strong>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{issue?.user.login}</p>
          </div>
          {issue && (
            <div
              title={format(
                new Date(issue.created_at),
                "dd 'de' MMMM 'de' yyyy",
                {
                  locale: ptBR,
                },
              )}
            >
              <FontAwesomeIcon icon={faCalendarDay} />
              <p>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </p>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faComment} />
            <p>
              {issue?.comments
                ? issue.comments > 1
                  ? issue?.comments + ' comentários'
                  : issue.comments + ' comentário'
                : 'nenhum comentário'}
            </p>
          </div>
        </footer>
      </PostInfoContainer>

      <PostContentContainer>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {issue?.body as string}
        </ReactMarkdown>
      </PostContentContainer>
    </PostContainer>
  )
}
