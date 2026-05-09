
<template>
  <span
    :class="[
      'inline-flex gap-1  h-6 items-center rounded px-2 py-1 text-xs xxl:text-sm font-medium',
      props.type ? badgeClasses[props.type] : '',
      props.extraClasses,
      props.disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]"
    :style="!props.type ? { backgroundColor: props.bgColor, color: props.color } : {}"
  >
  
    <img
      v-if="props.imagePath"
      :src="cdn(props.imagePath)"
      :class="[props.iconSize]"
      alt="icon"
    >
    <component
      :is="props.iconLeft"
      v-if="props.iconLeft"
      :class="[iconColorClass(props.iconColor),props.iconSize]"
      aria-hidden="true"
    />
    <div
      v-if="props.text"
      class="flex flex-col items-start justify-start"
    >
      <span :class="[props.textSize, 'font-medium leading-0 whitespace-nowrap']">
        {{ props.text }}
      </span>
      <ProgressBar
        v-if="props.progressPercentage || props.progressPercentage > 0"
        progress-height="!h-0.5"
        :progress-bar-class="[props.type === 'danger' ? '!bg-redCust-500' : '!bg-secondary-800']"
        :progress="props.progressPercentage"
      />
    </div>
    <component
      :is="props.iconRight"
      v-if="props.iconRight"
      class="w-3 h-3"
      :class="[iconColorClass(props.iconColor)]"
      aria-hidden="true"
    />
  </span>
</template>

<script setup>
import ProgressBar from '@/shared/common/CommonProgressBar.vue';
import { defineProps, reactive } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "",
    validator: (value) =>
      ["success", "Indigo", "Purple", "warning", "info", "primary", "gray", "danger"].includes(value),
  },
  iconLeft: {
    type: String,
    default: "",
  },
  iconRight: {
    type: String,
    default: "",
  },
  extraClasses: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  progressPercentage: {
    type: Number,
    default: 0, // Controls the width of the progress bar
  },
  bgColor: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: null, 
    validator: (value) => value === '' || value.startsWith('text-'),
  },
  textSize: {
    type: String,
    default: 'text-xs',
    validator: (value) => ['text-xs', 'text-sm'].includes(value),
  },
  iconSize: {
    type: String,
    default: 'size-3',
    validator: (value) => ['size-3', 'size-4'].includes(value),
  },
  imagePath: {
    type: String,
    default: '',
  },
});

const badgeClasses = reactive({
  success: "bg-green-100 text-green-800",
  indigo: "bg-indigo-100 text-indigo-800",
  purple: "bg-purple-100 text-purple-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
  danger: "bg-red-100 text-red-800",
  primary: "bg-primary-50 text-primary-800",
  gray: "bg-grayCust-100 text-grayCust-800",
});
const iconColorClass = (iconColor) => {
  return iconColor || ''; // If `iconColor` is provided, it will apply that; otherwise, it defaults to an empty string.
};

</script>


<style scoped>
/* Optional additional styles */
</style>

