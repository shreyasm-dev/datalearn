<script>
  import { Button, Heading, Hr, P } from 'flowbite-svelte';
  import FreeResponseExercise from '../../components/FreeResponseExercise.svelte';
</script>

<Heading tag="h2">Statistics</Heading>

<br />

<Heading tag="h5">Averages</Heading>

<br />

<P>
  Generally, people use the word 'average' to mean the mean, but there are three
  kinds of averages: <strong>mean</strong>, <strong>median</strong>, and
  <strong>mode</strong>. The mean is the sum of all the values divided by the
  number of values. The median is the middle value when the values are sorted.
  If there are an even number of values, then it's the mean of both of them. The
  mode is the most common value, and there can be more than one mode.
</P>

<br />

<Heading tag="h5">Standard Deviation</Heading>

<br />

<P>
  The <strong>standard deviation</strong> is a measure of how spread out the
  values are. It's calculated by taking the square root of the
  <strong>variance</strong>, which we can find by finding the differences
  between each element and the mean, squaring those differences, and finding
  their mean.
</P>

<br />

<P>
  For example, to find the standard deviation of the numbers 4, 8, 2, and 4, we
  can:
</P>

<br />

<ol style="list-style-type: number;">
  <li>Find the mean, which would be (4 + 8 + 2 + 4) / 4 = 4.5</li>
  <li>
    Find the difference between each value and the mean, which would be 4 - 4.5
    = -0.5, 8 - 4.5 = 3.5, 2 - 4.5 = -2.5, and 4 - 4.5 = -0.5
  </li>
  <li>
    Square each of those differences, which would be (-0.5)^2 = 0.25, 3.5^2 =
    12.25, (-2.5)^2 = 6.25, and (-0.5)^2 = 0.25
  </li>
  <li>
    Find the average of those squared differences, which would be (0.25 + 12.25
    + 6.25 + 0.25) / 4 = 4.75 - this is our variance
  </li>
  <li>
    Find the square root of the variance, which would be sqrt(4.75) =
    approximately 2.179 - this is our standard deviation
  </li>
</ol>

<br />

<P>
  The standard deviation is useful because it tells us how much the values
  differ from the mean. If the standard deviation is low, then the values are
  generally close to the mean and not very spread out. If the standard deviation
  is high, then it's the opposite.
</P>

<br />

<Heading tag="h5">Basic Combinatorics</Heading>

<br />

<P>
  <strong>Combinatorics</strong> is the study of counting. You can use it to
  find the number of <strong>permutations</strong> and
  <strong>combinations</strong>
  of a set of elements.
</P>

<br />

<P>
  A <strong>permutation</strong> is an arrangement of elements. For example, if we
  have the elements A, B, and C, then the permutations would be ABC, ACB, BAC, BCA,
  CAB, and CBA. The number of permutations of a set of n elements into a set of k
  elements (i.e. the number of ways to arrange n elements into k slots, if k &lt;=
  n) is n! / (n - k)!. If n and k are equal, then the number of permutations is n!
  (since n! / (n - n)! = n! / 0! = n! / 1).
</P>

<br />

<P>
  A <strong>combination</strong> is like a permutation, but the order doesn't matter.
  For example, if we have the elements A, B, and C, then the only combination would
  be ABC. The number of combinations of a set of n elements into a set of k elements
  is n! / (k! * (n - k)!). We can prove the earlier statement, that the number of
  permutations of a set of n elements into n elements is 1, by substituting k with
  n in the combination formula: n! / (n! * (n - n)!) = n! / (n! * 0!) = n! / n! =
  1.
</P>

<br />

<P>
  To find the number of combinations of things together, for example, the number
  of unique outfits you can make with x shirts, y pants, and z shoes, you can
  multiply the number of combinations of each thing together. For example, if
  you have 3 shirts, 2 pants, and 4 shoes, then you can make 3 * 2 * 4 = 24
  unique outfits.
</P>

<Hr />

<Heading tag="h4">Exercises</Heading>

<br />

<FreeResponseExercise
  question="What is the mean, median, and mode of the numbers 5, 0, 3, 9, 4, 3? (respond with x,y,z and no spaces)"
  answer="4,3.5,3"
/>

<br />

<FreeResponseExercise
  question="If you have 12 people, and you want to select from them a group of 3 people, how many ways can you do that?"
  answer="792"
/>

<br />

<FreeResponseExercise
  question="You have 5 shirts, 3 pants, and 2 shoes. How many unique outfits can you make?"
  answer="30"
/>

<Hr />

<Button href="/resources">Proceed</Button>
