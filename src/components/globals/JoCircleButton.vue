<template>
  <button
    class="jo-circle-button"
    :disabled="disabled"
    v-on:click="handleClick"
    :data-cy="cy"
    :class="{
      'is-transparent': variant === 'transparent',
      'is-light': variant === 'light',
      'is-white': variant === 'white',
      'is-red': variant === 'red',
      'is-small': size === 'small',
      'is-large': size === 'large',
      'is-flush': flush === 'all',
      'is-flush-right': flush === 'right',
      'is-flush-bottom': flush === 'bottom',
    }"
  >
    <span class="is-accessibly-hidden">{{ title }}</span>
    <span :class="'fas ' + icon"></span>
    <!-- <JoIcon :id="icon" :title="title" spacing="none" /> -->
  </button>
</template>

<script>
export default {
  name: "JoCircleButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    cy: {
      type: String,
    },
    variant: {
      type: String,
      default: "",
      validator: (value) => {
        return (
          ["", "light", "white", "red", "transparent"].indexOf(value) !== -1
        );
      },
    },
    flush: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "all", "bottom", "right"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "small", "large"].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    handleClick(e) {
      this.$ga_event({
        eventCategory: "Interaction",
        eventAction: this.title + " icon button clicked",
      });
      this.$listeners.click(e);
    },
  },
};
</script>

<style lang="scss">
@mixin hoverable-focus($initial, $focus: $josef-green) {
  &:focus {
    border-color: $focus;
  }

  &,
  &:hover {
    border-color: $initial;
  }
}

.jo-circle-button {
  position: relative;
  appearance: none;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: $base-font-family;
  -webkit-font-smoothing: antialiased;
  font-weight: $weight-bold;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  color: $josef-white;
  background-color: $josef-purple;
  transition-property: opacity, background-color, color;
  transition-duration: $base-duration;
  transition-timing-function: $base-timing;
  border: 1px solid;
  border-radius: 1.875em;
  line-height: 1;
  font-size: 1rem;
  padding: 0.75em;
  margin-right: 1rem;
  margin-bottom: 1rem;
  min-width: 38px;
  min-height: 38px;

  @include hoverable-focus(transparent);

  &:focus {
    box-shadow: $shadow-focus;
    outline: 0 none;
  }

  &:hover {
    background: $josef-dark-purple;
  }

  &:last-child {
    margin: 0;
  }

  // style variants
  // with light purple background
  &.is-light {
    background-color: $josef-light-purple;
    color: $josef-purple;

    &:hover {
      background-color: $josef-purple-soft-dark;
    }
  }

  // white background
  &.is-white {
    background-color: $josef-white;
    color: $josef-purple;
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: $josef-purple;
      color: $josef-white;
    }
  }

  &.is-transparent {
    background-color: transparent;
    color: $josef-purple;
    box-shadow: none;
  }

  &.is-red {
    background-color: $josef-red;
    color: $josef-white;

    &:hover {
      background-color: $josef-red-dark;
      color: $josef-white;
    }
  }

  // size variants
  &.is-small {
    font-size: 0.9rem;
    padding: 0.55em;
  }

  // size variants
  &.is-large {
    font-size: 1.375rem;
    padding: 0.75em;
    min-width: 50px;
    min-height: 50px;
  }

  // disabled
  &:disabled {
    &,
    &:hover,
    &:focus {
      cursor: not-allowed;
      background-color: $josef-smoke;
      background-image: none;
      color: $josef-steel;
      box-shadow: none;
    }
    &::before {
      content: none;
    }
  }

  // reset margins to make buttons flush with siblings and container edges
  &.is-flush,
  &.is-flush-bottom {
    margin-bottom: 0;
  }
  &.is-flush,
  &.is-flush-right {
    margin-right: 0;
  }
}
</style>
