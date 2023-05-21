export default  ({ env }) => ({
    'duplicate-button': true,
    //https://docs.strapi.io/dev-docs/plugins/graphql
    graphql: {
      enabled: true,
      config: {
        endpoint: '/graphql',
        playgroundAlways: false,
        defaultLimit: 100,
        maxLimit: 200,
        apolloServer: {
          tracing: true,
        },
      }
    },
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {
            folder: 'eps_site',
          },
          delete: {},
        },
      },
    },
    // ...
  });