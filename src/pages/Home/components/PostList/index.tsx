import { PostListConatiner, PostListIterator } from './styles'

const cardContentText = `Programming languages all have built-in data structures, but these
often differ from one language to another. This article attempts to
list the built-in data structures available in JavaScript and what
properties they have. These can be used to build other data
structures. Wherever possible, comparisons with other languages are
drawn.`

export function PostList() {
  return (
    <PostListConatiner>
      <div className="postListHeader">
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>

      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>

      <PostListIterator>
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <div key={post} className="postCard">
            <div className="cardTitle">
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </div>
            <p>
              {cardContentText.length > 181
                ? cardContentText.slice(0, 181) + '...'
                : cardContentText}
            </p>
          </div>
        ))}
      </PostListIterator>
    </PostListConatiner>
  )
}
