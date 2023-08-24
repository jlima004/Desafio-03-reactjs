/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string
  readonly VITE_USER_LOGIN: string
  readonly VITE_GITHUB_REPOSITORY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
