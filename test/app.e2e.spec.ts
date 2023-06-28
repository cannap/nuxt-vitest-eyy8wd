import { fileURLToPath } from 'node:url';
import { setup, $fetch } from '@nuxt/test-utils';
import { describe, it, expect } from 'vitest';

await setup({
  setupTimeout: 10000,
  rootDir: fileURLToPath(new URL('../', import.meta.url)),
});

describe('app', async () => {
  it('runs a test', async () => {
    const html = await $fetch('/');
    expect(html.slice(0, 20)).toMatchInlineSnapshot(`
      "<!DOCTYPE html>
      <htm"
    `);
  });
});
