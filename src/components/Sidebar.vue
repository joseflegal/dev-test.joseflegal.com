<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
export default {
  components: {
    SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Coding task",
          icon: "fa fa-user",
        },
        {
          href: "/design-system",
          title: "Design system",
          icon: "fa fa-chart-area",
          //   child: [
          //     {
          //       href: "/charts/sublink",
          //       title: "Sub Link",
          //     },
          //   ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";

.v-sidebar-menu {
  background: $josef-charcoal;
  width: 100%;
}
</style>
