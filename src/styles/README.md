# Josef Styles

Josef styles are written in SCSS and are divided into folder based on their purpose:

- [Resources](resources) are our variables, mixins, and functions, which are available to all `.scss` and `.vue` files, and should not output any CSS
- [Globals](globals) contains some CSS reset styles and sensible html tag defaults for elements like typography & forms
  – [Components](components) currently contains some styles for components and vendor styles that don't really fit anywhere else. We perhaps should think about depreciating this folder by eventually moving all of the styles into their corresponding Vue components

All of these folder have their own readme's, and are loaded in `admin.scss` via partials corresponding to their folder name (eg: `_resources.scss`).
