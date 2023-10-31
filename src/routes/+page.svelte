<script>
  import { A, Button, Heading, P } from 'flowbite-svelte';
  import { url } from '../constants';
</script>

<Heading tag="h2">DataLearn</Heading>

<br />

<P
  >A free collection of resources to help you learn about probability,
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

<Button href={url('/data')} size="xl">Get Started</Button>

<br />
<br />

Each page covers a single topic and is broken down into a few different
sections. There are exercises at the end of each page to help you practice what
you've learned. If you need to be refreshed on a topic or don't know it, the <A
  href={url('/resources')}>Resources</A
> page has a list of resources broken down by topic that go into depth.
