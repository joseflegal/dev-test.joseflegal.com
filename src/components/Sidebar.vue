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
          title: "Josef coding challenge",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Vue.js layout",
          icon: "fa fa-th",
        },
        {
          href: "/rules",
          title: "Rules engine",
          icon: "fa fa-cog",
        },
        {
          href: "/qa",
          title: "QA",
          icon: "fa fa-search",
        },
        {
          href: "/design-system",
          title: "Design system",
          icon: "fa fa-palette",
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
</style>
