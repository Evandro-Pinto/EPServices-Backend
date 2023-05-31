export default ({ env }) => ({
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
    treblle: {
        config: {
            routesToMonitor: ['api', 'graphql'],
        },
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
            folder: 'EpServices',
          },
          delete: {},
        },
      },
    },
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'),
          port: env('SMTP_PORT'),
          auth: {
            type: 'OAuth2',
            user: env('SMTP_USERNAME'),
            clientId: env('CLIENTID'),
            clientSecret: env('CLIENTSECRET'),
            refreshToken: env('REFRESHTOKEN'),
            accessToken: env('ACESSTOKEN')
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: env('EMAILFROM'),
          defaultReplyTo: env('EMAILTO'),
        },
      },
    },
    // ......
    ezforms: {
      config: {
        enableFormName : true,
        captchaProvider: {
          name: 'none',
        },
        notificationProviders: [
          {
            name: 'email',
            enabled: true,
            config: {
              subject: "Email Enviado do Site Devtrust", // Optional
              from: env('EMAILFROM'), // Required
              score: 10
            }
          }
        ]
      }
    }
    // ....
    /*email: {
      provider: [
        {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'mail.devtrust.cv'),
          port: env('SMTP_PORT', 993),
          auth: {
            user: env('SMTP_USERNAME', 'noreply@devtrust.cv'),
            pass: env('SMTP_PASSWORD', ';XI^y=0XYwiGimSoq^t-Dn&)'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: env('EMAILFROM'),
          defaultReplyTo: env('EMAILTO'),
        
      },
    },
  {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('EMAILFROM'),
        defaultReplyTo: env('EMAILTO'),
      },
    }
  ]
  }*/
    // ...
  });