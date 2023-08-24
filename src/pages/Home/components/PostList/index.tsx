import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BlogContext } from '../../../../contexts/BlogContext'

import { PostListConatiner, PostListIterator } from './styles'

const searchIssuesSchema = z.object({
  query: z.string(),
})

type searchIssuesInputs = z.infer<typeof searchIssuesSchema>

export function PostList() {
  const { issues, fetchIssues } = useContext(BlogContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchIssuesInputs>({
    resolver: zodResolver(searchIssuesSchema),
  })

  function handleSearchIssuesSubmitted(data: searchIssuesInputs) {
    fetchIssues(data.query)
  }

  return (
    <PostListConatiner>
      <div className="postListHeader">
        <strong>Publicações</strong>
        <span>{issues.length} publicações</span>
      </div>

      <form onSubmit={handleSubmit(handleSearchIssuesSubmitted)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          disabled={isSubmitting}
        />
      </form>

      <PostListIterator>
        {issues.map((post) => (
          <Link key={post.number} to={`/post/${post.number}`}>
            <div className="postCard">
              <div className="cardTitle">
                <strong>{post.title}</strong>
                <span
                  title={format(
                    new Date(post.created_at),
                    "dd 'de' MMMM 'de' yyyy",
                    {
                      locale: ptBR,
                    },
                  )}
                >
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>
              <p className="postCardContent">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.body && post.body.length > 181
                    ? post.body.slice(0, 181) + '...'
                    : post.body}
                </ReactMarkdown>
              </p>
            </div>
          </Link>
        ))}
      </PostListIterator>
    </PostListConatiner>
  )
}
