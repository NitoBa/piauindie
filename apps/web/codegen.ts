import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}/api/graphql`,
  documents: ['src/gql/*.graphql'],
  generates: {
    './src/gql/generated.ts': {
      plugins: [
        'typescript-operations',
        'typescript',
        'typescript-react-query',
      ],
    },
  },
  config: {
    withHooks: false,
    withHOC: false,
    fetcher: {
      func: '../lib/fetcher#fetchData',
    },
  },
}

export default config
