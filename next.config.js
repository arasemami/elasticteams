const nextConfig = {
    headers: {
        'Strict-Origin-When-Cross-Origin': 'true',
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    }, 
    async redirects() {
        return [
          {
            source: '/',
            destination: '/auth/login',
            permanent: false,
          },
        ]
      },
}

module.exports = nextConfig

