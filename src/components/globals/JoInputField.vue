<template>
  <div
    :class="[
      'input-field',
      {
        'is-flush': flush,
        'input-field--disabled': disabled,
        'input-field--focused': isFocused,
      },
    ]"
    :style="{ width: width }"
  >
    <div
      class="input-field__label-wrapper"
      :class="{ 'is-accessibly-hidden': hideLabel }"
    >
      <label class="input-field__label" :for="name">{{ label }}</label>
    </div>
    <div class="input-field__wrapper">
      <span v-if="icon" class="input-field__left-icon">
        <span :class="'fas ' + icon"></span>
      </span>
      <input
        :class="[
          'input-field__input',
          {
            'has-icon': icon,
            'is-readonly': readonly,
          },
        ]"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="type"
        :min="min"
        :name="name"
        :autocomplete="autocomplete"
        :readonly="readonly"
        :required="required"
        v-model="model"
        @input="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
        v-focus
        :data-test-id="testId"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "JoInputField",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
      validate: (val) => {
        return (
          [
            "text",
            "url",
            "email",
            "password",
            "search",
            "tel",
            "date",
            "number",
          ].indexOf(val) !== -1
        );
      },
    },
    value: {
      type: [String, Number, Date],
    },
    required: {
      type: String,
      default: "",
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    name: {
      type: String,
    },
    width: {
      type: String,
      default: "100%",
    },
    error: {
      type: String,
    },
    showError: {
      type: Boolean,
      default: true,
    },
    focusOnCreate: {
      type: Boolean,
      default: false,
    },
    invert: {
      type: Boolean,
      default: false,
    },
    inputRef: {
      type: String,
      default: "",
    },
    autocomplete: {
      type: String,
      default: "on",
    },
    placeholder: {
      type: String,
    },
    testId: {
      type: String,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    flush: {
      type: Boolean,
      default: false,
    },
    validations: {
      type: String,
      default: "",
    },
    min: {
      type: [Number, Boolean],
      default: false,
      validator: (prop) => typeof prop === "number" || prop === false,
    },
  },
  data() {
    return {
      localValue: this.value,
      isFocused: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.localValue;
      },
      set(value) {
        this.localValue = value;
      },
    },
  },
  directives: {
    focus: {
      inserted(el, binding, vnode) {
        if (vnode.context.focusOnCreate) {
          el.focus();
        }
      },
    },
  },
  methods: {
    handleUpdate() {
      this.$emit("input", this.model);
    },
    handleFocus() {
      this.isFocused = true;
      this.$emit("focus");
    },
    handleBlur() {
      this.isFocused = false;
      this.$emit("blur");
    },
  },
  watch: {
    value(val) {
      this.localValue = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-field {
  $self: &;
  position: relative;

  &__wrapper {
    display: block;
    position: relative;
  }

  &__left-icon {
    align-items: center;
    color: $josef-steel;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    padding-bottom: 0.05rem;
    padding-left: $small-spacing;
    position: absolute;
    top: 0;
    width: 2.1875rem;

    #{$self}--disabled & {
      color: $button-disabled-color;
    }
  }
}
</style>
