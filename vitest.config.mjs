import { defineVitestConfig } from 'nuxt-vitest/config';
export default defineVitestConfig({
  test: {
    //watch: true,
    // dir: './components/__tests__',
    coverage: {
      reportsDirectory: 'coverage',
    },
    // environment: 'nuxt'
    // you can optionally set nuxt-specific environment options
    // environmentOptions: {
    //   nuxt: {
    //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
    //     overrides: {
    //       // other nuxt config you want to pass
    //     }
    //   }
    // }
  },
});
