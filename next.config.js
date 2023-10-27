const nextConfig = {
    headers: {
        'Strict-Origin-When-Cross-Origin': 'true',
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    }, 
}

module.exports = nextConfig

