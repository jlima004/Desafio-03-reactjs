import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'

interface User {
  id: number
  name: string
  avatar_url: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: string
}

export interface Issue {
  number: number
  title: string
  html_url: string
  body: string
  comments: number
  user: { login: string }
  created_at: string
}

interface BlogContextType {
  user: User | null
  issues: Issue[]
  fetchIssues: (query?: string) => void
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchUser() {
    const response = await api.get(`/users/${import.meta.env.VITE_USER_LOGIN}`)

    setUser(response.data)
  }

  async function fetchIssues(query?: string) {
    if (!query) query = ''

    const response = await api.get(
      `/search/issues?q=${query}%20repo:${import.meta.env.VITE_USER_LOGIN}/${
        import.meta.env.VITE_GITHUB_REPOSITORY
      }`,
    )

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchUser()
    fetchIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ user, issues, fetchIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
