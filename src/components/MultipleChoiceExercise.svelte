<script lang="ts">
  import { Alert, Button, Card, Heading, Hr, Select } from 'flowbite-svelte';

  export let question: string;
  export let options: [string, ...string[]];
  export let guidance: string;

  let selected = 0;
  let submitted = false;

  const shuffled = options
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }, i) => ({ name: value, value: i }));
</script>

<Card>
  <Heading tag="h6">{question}</Heading>

  <div class="p-5">
    <Select
      placeholder="Select an answer"
      bind:value={selected}
      items={shuffled}
      on:change={() => {
        submitted = false;
      }}
    />

    {#if submitted}
      <br />

      <Alert
        dismissable
        color={shuffled[selected].name === options[0] ? 'green' : 'red'}
        on:close={() => {
          submitted = false;
        }}
      >
        {@html shuffled[selected].name === options[0]
          ? `Correct<br /><br />${guidance}`
          : 'Incorrect'}
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
        selected = shuffled.findIndex(({ name }) => name === options[0]);
        submitted = true;
      }}>Show Answer</Button
    >
  </div>
</Card>
