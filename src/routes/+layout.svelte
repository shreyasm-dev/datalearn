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
  import { url } from '../constants';

  const pages: [string, string][] = [
    ['Data', url('/data')],
    ['Probability', url('/probability')],
    ['Statistics', url('/statistics')],
    ['Resources', url('/resources')],
  ];

  $: activeUrl = $page.url.pathname;
</script>

<div class="app">
  <div class="navbar">
    <Navbar>
      <NavBrand href={url('/')}>
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
