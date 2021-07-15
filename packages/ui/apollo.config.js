export default function ({ $config }) {
  console.log('[apollo.config.js]: baseUrl', process.env.API_ENDPOINT)
  console.log('[apollo.config.js]: $config.baseUrl', $config.baseUrl)
  return {
    httpEndpoint: $config.baseUrl,
    httpLinkOptions: {
      mode: 'cors',
    },
  }
}
