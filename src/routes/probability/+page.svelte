<script>
  import { Button, Heading, Hr, P } from 'flowbite-svelte';
  import FreeResponseExercise from '../../components/FreeResponseExercise.svelte';
  import { url } from '../../constants';
</script>

<Heading tag="h2">Probability</Heading>

<br />

<Heading tag="h5">What is Probability?</Heading>

<br />

<P>
  Probability is the likelihood of an event occurring. We can represent it as a
  number between 0 and 1, where 0 means that the event will never occur and 1
  means that the event will always occur. For example, the probability of
  rolling a 6 on a standard die is 1/6, since there are 6 possible outcomes but
  only 1 of them is a 6.
</P>

<br />

<Heading tag="h5">Rules</Heading>

<br />

<P>
  The <strong>addition rule</strong> states that the probability of event A occuring,
  event B occuring, or both occuring is equal to the probability of A plus the probability
  of B. For example, the probability of rolling a 1 or a 2 on a standard die is 1/6
  + 1/6 = 1/3. The probability of rolling a 1 or flipping a coin and getting heads
  is 1/6 + 1/2 = 2/3.
</P>

<br />

<P>
  The <strong>multiplication rule</strong> states that the probability of event
  A occuring <em>and</em> event B occuring is equal to the probability of A times
  the probability of B. For example, the probability of rolling a 1 and a 2 on a
  standard die is 1/6 * 1/6 = 1/36. The probability of rolling a 1 and flipping a
  coin and getting heads is 1/6 * 1/2 = 1/12.
</P>

<br />

<P>
  Note that these rules only apply to <strong>independent</strong> events.
</P>

<br />

<Heading tag="h5">Independent Events</Heading>

<br />

<P>
  Two events are <strong>independent</strong> if the outcome of one event
  doesn't affect the outcome of the other event. For example, if you flip a coin
  four times and get heads each time, the probability of getting heads on the
  fifth flip is still 1/2. The coin doesn't have a memory of the previous flips,
  so the outcome of the fifth flip is independent of the previous flips. The
  belief that because the coin has landed on heads four times in a row, it is
  more likely to land on tails or keep landing on heads is called the
  <strong>gambler's fallacy</strong>. However,
  <strong>regression to the mean</strong> is a real phenomenon where, if you
  repeat an experiment, the results will tend to be close to the
  <strong>mean</strong>
  of the
  <strong>distribution</strong>, even if they start off extreme. It's important
  to not conflate the gambler's fallacy with regression to the mean.
</P>

<Hr />

<Heading tag="h4">Exercises</Heading>

<br />

Format all answers as fractions (like x/y, no spaces)

<br />
<br />

<FreeResponseExercise
  question="What is the probability of rolling a 1 or a 2 on a standard die?"
  answer="1/3"
  guidance="The probability of rolling any single number on a die is 1/6, so the probability of rolling a 1 or a 2 is 1/6 + 1/6 = 1/3."
/>

<br />

<FreeResponseExercise
  question="What is the probability of rolling either a 1 or a 2 on a standard die but not both?"
  answer="11/36"
  guidance="The probability of rolling a 1 or a 2 is 1/3, and the probability of rolling a 1 and a 2 is 1/36, so the probability of rolling either a 1 or a 2 but not both is 1/3 - 1/36 = 11/36."
/>

<br />

<FreeResponseExercise
  question="After rolling three consecutive 6s on a standard die, what is the probability of rolling another 6?"
  answer="1/6"
  guidance="The probability of rolling a 6 is 1/6, so the probability of rolling a 6 after rolling three consecutive 6s is still 1/6. The die doesn't have a memory of the previous rolls, so the outcome of the fourth roll is independent of the previous rolls. Refer to the gambler's fallacy."
/>

<Hr />

<Button href={url('/statistics')}>Next: Statistics</Button>
