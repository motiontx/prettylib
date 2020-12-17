<template>
  <button @click="onClick" :class="classes">
    <!--<font-awesome-icon class="icon" :icon="icon" :size="size == 'small'? 'sm' : 'lg'" />-->
    <slot></slot>
  </button>
</template>

<script>
import './button.css';

export default {
  name: "p-button",
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium'].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      default: 'darker',
    },
  },

  computed: {
    classes() {
      return {
        'p-button': true,
        'p-button--standard': !!this.$slots.default,
        'p-button--square': !!!this.$slots.default,
        [`p-button--${this.size}`]: true,
        [`b-${this.color}`]: true,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style lang="css">

</style>
