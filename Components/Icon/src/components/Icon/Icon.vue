<script setup lang="ts">

import { defineProps } from "vue";
import { Icons } from "./Icons";

interface Props {
  name: Icons;
  className?: string;
  onClick?: (event: MouseEvent) => void;
}

defineProps<Props>();

</script>

<template>
  <i :class="[name, className]" @click="onClick"></i>
</template>