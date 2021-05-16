<template>
  <component
    :is="element"
    class="jo-button"
    :disabled="disabled"
    v-on:click="handleClick"
    v-bind="$attrs"
    :data-cy="cy"
    :class="{
      'is-blue': variant == 'blue',
      'is-gradient': variant == 'gradient',
      'is-outline': variant == 'outline',
      'is-flush': flush == 'all',
      'is-flush-right': flush == 'right',
      'is-flush-bottom': flush == 'bottom',
    }"
    :style="styles"
  >
    <!-- <JoIcon v-if="iconLeft" :id="iconLeft" spacing="right" /> -->
    <span :class="'small-margin-right fas ' + iconLeft"></span>
    <slot />
    <span
      v-if="iconRight && !iconLeft"
      :class="'small-margin-left fas ' + iconRight"
    ></span>
    <!-- <JoIcon v-if="iconRight && !iconLeft" :id="iconRight" spacing="left" /> -->
  </component>
</template>

<script>
export default {
  name: "JoButton",
  props: {
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
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
        return ["", "blue", "gradient", "outline"].indexOf(value) !== -1;
      },
    },
    flush: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "all", "bottom", "right"].indexOf(value) !== -1;
      },
    },
    element: {
      type: String,
      default: "button",
      validator: (value) => {
        return ["button", "a", "router-link"].indexOf(value) !== -1;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    styles: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    handleClick(e) {
      const eventAction = this.$slots.default[0] && this.$slots.default[0].text;
      this.$ga_event({
        eventCategory: "Interaction",
        eventAction: eventAction ? `${eventAction} clicked` : "Button clicked",
      });
      if (this.$listeners.click) {
        this.$listeners.click(e);
      }
    },
  },
};
</script>

<style lang="scss">
@mixin hoverable-focus($initial, $focus: $josef-green) {
  &:focus {
    box-shadow: $shadow-focus;
  }

  &,
  &:hover {
    border-color: $initial;
  }
}

.jo-button {
  @include reset-button();
  @include base-button();
  font-weight: $weight-bold;
  color: $josef-white;
  background-color: $josef-purple;
  border-radius: 1.875em;
  line-height: 1;
  font-size: 1rem;
  padding: 1.2em 1.325em 1.1625em;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  @include hoverable-focus(transparent);

  &:focus {
    outline: 0 none;
  }

  &:hover {
    color: $josef-white;
    background: $josef-dark-purple;
  }

  &:last-child {
    margin-right: 0;
  }

  // variants
  // with green/blue gradient
  &.is-gradient {
    background-color: $josef-black;
    background-image: $josef-gradient;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 105% 105%;
    background-clip: border-box;
    color: $josef-black;
    overflow: hidden;

    // hover effect with a transition — we can't animate a background gradient so
    &::before {
      content: "";
      position: absolute;
      left: -1px;
      right: -1px;
      top: -1px;
      bottom: -1px;
      background: black;
      opacity: 0;
      pointer-events: none;
      transition: inherit;
      // transform: translateZ(0);
      border-radius: inherit;
    }

    &:hover {
      &::before {
        opacity: 0.1;
      }
    }
  }

  // blue background
  &.is-blue {
    background-color: $josef-sky;
    color: $josef-black;

    &:focus,
    &:hover {
      background-color: $josef-sky-dark;
    }
  }

  // with border
  &.is-outline {
    background-color: transparent;
    color: $josef-purple;
    @include hoverable-focus($josef-purple);

    &:hover {
      color: $josef-dark-purple;
      background: $josef-purple-soft-dark;
    }

    .is-dark & {
      color: $josef-white;
      @include hoverable-focus($josef-white);

      &:hover {
        background-color: $josef-dark-purple;
      }

      &:disabled {
        color: $josef-white;
        background-color: transparent;
        opacity: 0.5;
      }
    }
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
      border-image: none;
      border-color: transparent;
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
