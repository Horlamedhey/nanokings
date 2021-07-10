module.exports = {
  projects: {
    app: {
      schema:
        'https://us-east-1.aws.stitch.mongodb.com/api/client/v2.0/app/nanokings-vtaum/graphql',
      // ["src/schema.graphql", "directives.graphql"],
      documents: ['***/**/*.{graphql,js,ts,jsx,tsx}'],
      extensions: {
        endpoints: {
          default: {
            url: 'https://us-east-1.aws.stitch.mongodb.com/api/client/v2.0/app/nanokings-vtaum/graphql',
            headers: {
              apiKey:
                'GYMqpCeKrZrrLqkAp0mPZ7JMJYnev9W2wrRyCoDfONMEhMw0GJCysSGSKffjtd6B',
            },
          },
        },
      },
    },
    db: {
      schema:
        'https://us-east-1.aws.stitch.mongodb.com/api/client/v2.0/app/nanokings-vtaum/graphql',
      documents: ['graphs/**/*.{graphql,js,ts,jsx,tsx}'],
      extensions: {
        codegen: [
          {
            generator: 'graphql-binding',
            language: 'typescript',
            output: {
              binding: 'graphs/generated/db.ts',
            },
          },
        ],
        endpoints: {
          default: {
            url: 'https://us-east-1.aws.stitch.mongodb.com/api/client/v2.0/app/nanokings-vtaum/graphql',
            headers: {
              apiKey:
                'GYMqpCeKrZrrLqkAp0mPZ7JMJYnev9W2wrRyCoDfONMEhMw0GJCysSGSKffjtd6B',
            },
          },
        },
      },
    },
  },
}
