<script lang="ts">
  import { Alert, Button, Card, Heading, Hr } from 'flowbite-svelte';

  export let question: string;
  export let options: [string, ...string[]];

  let selected = 0;
  let submitted = false;

  const shuffled = options
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }, i) => ({ value, i }));
</script>

<Card>
  <Heading tag="h6">{question}</Heading>

  <div class="p-5">
    {#each shuffled as { value, i }}
      <Button
        class="w-full rounded-lg"
        color={selected === i ? 'primary' : 'none'}
        on:click={() => {
          selected = i;
          submitted = false;
        }}
      >
        {value}
      </Button>

      <br />
    {/each}

    {#if submitted}
      <br />

      <Alert
        dismissable
        color={shuffled[selected].value === options[0] ? 'green' : 'red'}
        on:close={() => {
          submitted = false;
        }}
      >
        {shuffled[selected].value === options[0] ? 'Correct' : 'Incorrect'}
      </Alert>
    {/if}

    <br />

    <Button
      color="primary"
      on:click={() => {
        submitted = true;
      }}>Submit</Button
    >

    <Button
      color="alternative"
      on:click={() => {
        selected = shuffled.findIndex(({ value }) => value === options[0]);
        submitted = true;
      }}>Show Answer</Button
    >
  </div>
</Card>
