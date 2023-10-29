<script lang="ts">
  import { Alert, Button, Card, Heading, Hr, Input } from 'flowbite-svelte';

  export let question: string;
  export let answer: string;
  export let guidance: string;

  let value = '';
  let submitted = false;
</script>

<Card>
  <Heading tag="h6">{question}</Heading>

  <div class="p-5">
    <Input
      bind:value
      placeholder="Enter your answer here"
      on:input={(e) => {
        submitted = false;
      }}
    />

    {#if submitted}
      <br />

      <Alert
        dismissable
        color={value === answer ? 'green' : 'red'}
        on:close={() => {
          submitted = false;
        }}
      >
        {@html value === answer
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
        value = answer;
        submitted = true;
      }}>Show Answer</Button
    >
  </div>
</Card>
