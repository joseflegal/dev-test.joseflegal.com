<template>
  <div class="design-system">
    <h1>Design system</h1>

    <h2>Buttons</h2>

    <h3>Icon position</h3>
    <p>
      Using
      <code>iconLeft</code> or <code>iconRight</code> props.
    </p>
    <JoButton iconLeft="fa-fighter-jet">Left icon</JoButton>
    <JoButton iconRight="fa-save">Right icon</JoButton>
    <p>
      If both are specified,
      <code>iconLeft</code> is preferred and <code>iconRight</code> will be
      ignored.
    </p>
    <JoButton iconLeft="fa-fighter-jet" iconRight="fa-fighter-jet"
      >Both specified</JoButton
    >

    <h3>Variants</h3>
    <p>
      Style variants are defined with the
      <code>variant</code> prop. Must be one of: <code>gradient</code>,
      <code>blue</code>, or <code>outline</code>.
    </p>
    <JoButton iconLeft="save">Default</JoButton>
    <JoButton variant="gradient" iconLeft="fa-save">Gradient</JoButton>
    <JoButton variant="blue" iconLeft="fa-save">Blue</JoButton>
    <JoButton variant="outline" iconLeft="fa-fighter-jet">Outline</JoButton>

    <p>
      On a dark background (ie:
      <code>class="is-dark"</code> on parent) we should use exactly the same
      markup as above — but we do not use any button except the outline style on
      dark backgrounds.
    </p>
    <div class="is-dark">
      <JoButton variant="outline" iconLeft="fa-fighter-jet">Outline</JoButton>
    </div>

    <p>
      Margins can be reset on sides to make them flush with siblings and/or the
      parent container using the
      <code>flush</code> prop. Must be one of: <code>all</code>,
      <code>right</code>, or <code>bottom</code>.
    </p>
    <div class="is-dark">
      <JoButton variant="outline" flush="all" iconLeft="fa-camera"
        >All</JoButton
      >
      <JoButton variant="outline" flush="right" iconLeft="fa-save"
        >Right</JoButton
      >
      <JoButton variant="outline" flush="bottom" iconLeft="fa-file-export"
        >Bottom</JoButton
      >
    </div>

    <h3>Disabled button</h3>
    <JoButton iconLeft="fa-camera" disabled>Default</JoButton>
    <JoButton variant="gradient" iconLeft="fa-save" disabled>Gradient</JoButton>
    <JoButton variant="blue" iconLeft="fa-save" disabled>Blue</JoButton>
    <JoButton variant="outline" iconLeft="fa-file-export" disabled
      >Outline</JoButton
    >

    <h2>Circle Buttons</h2>
    <p>
      Using
      <code>icon</code> and <code>title</code> props.
    </p>
    <JoCircleButton icon="fa-edit" title="Edit" />
    <JoCircleButton icon="fa-user" title="User" />
    <JoCircleButton icon="fa-trash" title="Trash" />
    <JoCircleButton icon="fa-cut" title="Cut" />

    <h3>Variants</h3>
    <p>
      Style variants are defined with the
      <code>variant</code> prop. Must be one of: <code>light</code> or
      <code>white</code>.
    </p>
    <JoCircleButton icon="fa-edit" title="Edit" variant="white" />
    <JoCircleButton icon="fa-user" title="User" variant="light" />
    <JoCircleButton icon="fa-trash" title="Trash" variant="white" />
    <JoCircleButton icon="fa-cut" title="Cut" variant="light" />

    <p>
      Size variants are defined with the
      <code>size</code> prop. Must be one of: <code>small</code> or
      <code>large</code>.
    </p>

    <JoCircleButton icon="fa-edit" title="Edit" size="small" />
    <JoCircleButton icon="fa-user" title="User" size="small" />
    <JoCircleButton icon="fa-trash" title="Trash" size="small" />
    <JoCircleButton icon="fa-cut" title="Cut" size="small" />

    <br />
    <JoCircleButton icon="fa-edit" title="Edit" variant="white" size="large" />
    <JoCircleButton icon="fa-user" title="User" variant="white" size="large" />
    <JoCircleButton
      icon="fa-trash"
      title="Trash"
      variant="white"
      size="large"
    />
    <JoCircleButton icon="fa-cut" title="Cut" variant="white" size="large" />

    <p>
      Margins can be reset on sides to make them flush with siblings and/or the
      parent container using the
      <code>flush</code> prop. Must be one of: <code>all</code>,
      <code>right</code>, or <code>bottom</code>.
    </p>
    <JoCircleButton icon="fa-trash" title="Trash" flush="all" />
    <JoCircleButton icon="fa-edit" title="Edit" flush="right" />
    <JoCircleButton icon="fa-user" title="User" flush="bottom" />
    <br />

    <h3>Disabled button</h3>
    <JoCircleButton disabled icon="fa-edit" title="Edit" variant="white" />
    <JoCircleButton disabled icon="fa-user" title="User" variant="light" />
    <JoCircleButton disabled icon="fa-trash" title="Trash" variant="white" />
    <JoCircleButton disabled icon="fa-cut" title="Cut" variant="light" />
  </div>
</template>
<style lang="scss" scoped>
.design-system {
  h2,
  h3,
  p {
    margin-bottom: 0.75rem;
    margin-top: 1.75em;

    + h2,
    + h3,
    + p {
      margin-top: 0;
    }
  }

  .is-dark {
    padding: 1.5rem;
    display: inline-block;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    border-radius: 1rem;
    margin-top: 0.25rem;
  }

  &__icons {
    font-size: 2rem;
    color: $josef-purple;

    span {
      margin: 0.5rem 0;
    }
  }

  &__signoff {
    span {
      color: $josef-purple;
      top: 2px;
      margin-left: 0.25rem;
    }
  }
}
</style>
