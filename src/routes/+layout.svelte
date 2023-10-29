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

  const pages: [string, string][] = [
    ['Data', '/data'],
    ['Probability', '/probability'],
    ['Statistics', '/statistics'],
    ['Resources', '/resources'],
  ];

  $: activeUrl = $page.url.pathname;
</script>

<div class="app">
  <div class="navbar">
    <Navbar>
      <NavBrand href="/">
        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-5"
          >DataLearn</span
        >
      </NavBrand>
      <NavHamburger />
      <NavUl {activeUrl}>
        {#each pages as [name, url]}
          <NavLi href={url} class="text-sm font-medium">
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
