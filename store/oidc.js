import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import { oidcSettings } from '../config/oidc'
// NOTE: If you want to customize how tokens are stored you can use WebStorageStateStore from oidc-client (see bellow)
// Default storage is window.localStorage
// import { WebStorageStateStore } from 'oidc-client'

const storeModule = vuexOidcCreateStoreModule(
  oidcSettings,
  // NOTE: If you do not want to use localStorage for tokens, in stead of just passing oidcSettings, you can
  // spread your oidcSettings and define a userStore of your choice
  // {
  //   ...oidcSettings,
  //   userStore: new WebStorageStateStore({ store: window.sessionStorage })
  // },
  // Optional OIDC store settings
  {
    namespaced: true,
    dispatchEventsOnWindow: true,
    publicRoutePaths: ['/', 'oidc-callback-error']
  },
  // Optional OIDC event listeners
  {
    userLoaded: user => console.log('OIDC user is loaded:', user),
    userUnloaded: () => console.log('OIDC user is unloaded'),
    accessTokenExpiring: () => console.log('Access token will expire'),
    accessTokenExpired: () => console.log('Access token did expire'),
    silentRenewError: () => console.log('OIDC user is unloaded'),
    userSignedOut: () => console.log('OIDC user is signed out')
  }
)

export const state = () => (storeModule.state)

export const getters = storeModule.getters

export const actions = storeModule.actions

export const mutations = storeModule.mutations
