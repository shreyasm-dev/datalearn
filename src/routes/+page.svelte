<script>
  import { A, Button, Heading, P } from 'flowbite-svelte';
  import { url } from '../constants';
</script>

<Heading tag="h2">DataLearn</Heading>

<br />

<P
  >A collection of free resources to help you learn about probability,
  statistics, data science, AI/ML, and more.</P
>

<br />
<br />

<Heading tag="h5">
  Step 1: Start by learning about <A href={url('/data')}>Data</A>
</Heading>

<br />

<Heading tag="h5">
  Step 2: Learn about <A href={url('/probability')}>Probability</A>
</Heading>

<br />

<Heading tag="h5">
  Step 3: Learn the basics of <A href={url('/statistics')}>Statistics</A>
</Heading>

<br />

<Heading tag="h5">
  Step 4: Check out some more <A href={url('/resources')}>Resources</A> to learn
  about data science, machine learning, AI, and more
</Heading>

<br />
<br />

<Button href={url('/data')} size='xl'>Get Started</Button>
