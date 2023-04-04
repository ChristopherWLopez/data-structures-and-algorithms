# Insert to Middle of an Array
<!-- Description of the challenge -->
This challenge is to take in two hashmaps (map1 is synonyms and map2 is antonyms) the goal is to iterate through map1 and write the key and value and check if map2 has the corresponding key, if so.. write it (in my empty array), if not... then write NULL.

## Whiteboard Process
<!-- Embedded whiteboard image -->
I walked through my test case and use different color pencils to show what iteration I was on and showed it finding (or not finding) the corresponding work in map2.
I also wrote a short algo and then wrote out my code. I did touch on bigO which i believe is 0(n) for both time and space.

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

create function that takes 2 maps
create empty return array
iterate through map1
if no tables then return “ no tables”
check if map2 contains same key as map1
if so: Push map1 key and map2 key
if not: push map1 key and NULL
return “return” array

as mentioned above I believe big 0 to be o(n) for time because it is dependent on the amount it items I have to iterate over in the given map

and I believe space is O(n) as well since I am creating a new array however everything is getting pushed into that new array only once.
