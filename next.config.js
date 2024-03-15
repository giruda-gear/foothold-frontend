const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:8000/api/:path*/',
          },
        ]
      },
    }
  }

  return {
    /* config options for all phases except development here */
    output: "standalone",
  }
}
