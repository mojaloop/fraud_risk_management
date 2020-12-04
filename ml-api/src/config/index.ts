module.exports = {
  http: {
    host: process.env.HTTP_HOST || '127.0.0.1',
    port: process.env.HTTP_PORT || 3000,
    swagger: {
      swaggerDefinition: {
        info: {
          title: 'REST - Mojaloop FRM API',
          version: '0.1.0',
          description: 'TODO',
          contact: {
            email: 'aaron.alejandro.reynoza@gmail.com',
          },
        },
        tags: [
          {
            name: 'parties',
            description: 'Party lookup API',
          },
          {
            name: 'transfers',
            description: 'Transfers API',
          },
          {
            name: 'quotes',
            description: 'Quotes API',
          },
        ],
        schemes: ['http'],
        basePath: '/api',
      },
      apis: [
        './lib/routes/api/quotes.js',
        './lib/routes/api/transfers.js',
        './lib/routes/api/parties.js',
      ],
    },
  },
  NIFI_ENDPOINT: process.env.NIFI_ENDPOINT || '127.0.0.1',
  NIFI_PORT: process.env.HTTP_HOST || '9091',
};
