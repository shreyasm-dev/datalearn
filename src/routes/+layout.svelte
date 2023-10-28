<script lang="ts">
  import '../app.postcss';
  import { page } from '$app/stores';
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from 'flowbite-svelte';

  const pages: [string, string][] = [['Probability', '/probability']];

  $: activeUrl = $page.url.pathname;
</script>

<div class="app">
  <div class="navbar">
    <Navbar rounded color="form">
      <NavBrand href="/">
        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-5"
          >DataLearn</span
        >
      </NavBrand>
      <NavHamburger />
      <NavUl {activeUrl}>
        {#each pages as [name, url]}
          <NavLi
            href={url}
            class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
          >
            {name}
          </NavLi>
        {/each}
      </NavUl>
    </Navbar>
  </div>

  <div class="content">
    <slot />
  </div>
</div>
