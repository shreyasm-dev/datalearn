<script>
  import { Button, Heading, Hr, P } from 'flowbite-svelte';
  import MultipleChoiceExercise from '../../components/MultipleChoiceExercise.svelte';
  import { url } from '../../constants';
</script>

<Heading tag="h2">Data</Heading>

<br />

<Heading tag="h5">Types of Data</Heading>

<br />

<P>
  Data can be classified into two types: <strong>ordinal</strong> and
  <strong>nominal</strong>. Ordinal data is data that can be ordered, such as
  numbers or the size of a t-shirt (XS, S, M, L, XL, etc.). Nominal data is data
  that can't be ordered or doesn't have an inherent order, such as colors or the
  type of a car (SUV, sedan, truck, etc.).
</P>

<br />

<Heading tag="h5">Ordinal Data</Heading>

<br />

<P>
  There are two types of ordinal data: <strong>interval</strong> and
  <strong>ratio</strong>. Interval data is data where items have equal spacing
  between them, such as temperature in degrees Fahrenheit or Celsius. However,
  interval data doesn't have a true zero point. For example, 30 degrees in
  either temperature scale isn't twice as hot as 15 degrees. Ratio data, unlike
  interval, does have a true zero point. 0 degrees doesn't actually mean
  anything concrete in either temperature system except for an arbitrarily
  selected point, be it the freezing point of water or a brine solution. For
  example, height and weight are ratio data because 0 inches or 0 pounds means
  that there is no height or weight. Temperature in Kelvin, where 0 Kelvin is
  approximately -273.15 degrees Celsius (the coldest possible temperature), is
  also ratio data. 0 Kelvin actually means something concrete, so 30 Kelvin
  <em>is</em> twice as hot as 15 Kelvin.
</P>

<br />

<Heading tag="h5">Representing Data</Heading>

<br />

<P>
  Data can be represented in a variety of ways, such as a table, a graph, or a
  chart. The type of data determines the best way to represent it. For example,
  nominal data is best represented by a bar chart, while ordinal data is best
  represented by a bar chart or a line graph. Interval and ratio data are best
  represented by a histogram or a line graph. These aren't hard rules, though,
  so you have to use your own judgement.
</P>

<Hr />

<Heading tag="h4">Exercises</Heading>

<br />

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <MultipleChoiceExercise
    question="What type of data is the size of a t-shirt?"
    options={['Ordinal', 'Nominal']}
    guidance="The data has an inherent ordering, so it is ordinal."
  />

  <MultipleChoiceExercise
    question="Which of these is NOT an example of ratio data?"
    options={[
      'Credit score',
      'Height',
      'Temperature in Kelvin',
      'Temperature in Rankine',
    ]}
    guidance="Credit score is ordinal data because 0 doesn't mean anything concrete. The other three are ratio data because 0 means something concrete (Rankine is like Kelvin but for Fahrenheit, where 0 means no heat at all, the coldest possible temperature)."
  />
</div>

<Hr />

<Button href={url('/probability')} color="primary">Next: Probability</Button>
