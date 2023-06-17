<template>
  <div>
    <!-- <NuxtWelcome /> -->
    {{  map }}
  </div>
</template>


<script setup lang="ts">

import { getRandomIntegerInRange } from './helpers/utilities';

const arr= [1, 2, 3];

const map: Record<number, number> = {

}

for (let i = 0; i < 100; ++i) {
  const item = getRandomIntegerInRange(1, 3);
  if (map[item]) map[item]++;
  else map[item] = 1;
}

console.log(map)

</script>