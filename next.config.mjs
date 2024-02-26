import withPWAInit from 'next-pwa'

const isProd = process.env.NODE_ENV === 'production'
const withPWA = withPWAInit({
  dest: 'public',
  disable: !isProd,
})

export default withPWA()
