import { NuxtOptions } from "@nuxt/types"

export default {
  buildModules: [
    '@nuxt/typescript-build'
  ],
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
   }
  }
}  as Partial<NuxtOptions>
