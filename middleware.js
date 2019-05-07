const middleware = {}

middleware['vuex-oidc-router'] = require('@/middleware/vuex-oidc-router.js');
middleware['vuex-oidc-router'] = middleware['vuex-oidc-router'].default || middleware['vuex-oidc-router']

export default middleware
