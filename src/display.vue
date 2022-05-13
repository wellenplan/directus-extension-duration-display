<template>
  <span>{{ output }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  HumanizeDurationLanguage,
  HumanizeDuration,
} from "humanize-duration-ts";

const service = new HumanizeDuration(new HumanizeDurationLanguage());

interface Props {
  value?: number;
}

const props = defineProps<Props>();

const output = computed<string>(() => {
  return service.humanize(props.value * 1000);
});
</script>
