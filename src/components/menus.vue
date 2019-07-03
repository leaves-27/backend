<template>
  <Menu
      active-name="1-2"
      theme="light"
      width="auto"
      :open-names="['1']"
      @on-select="select">
      <Submenu
          v-for="item in menus"
          :name="item.id">
          <template slot="title">
              <Icon :type="item.icon"></Icon>
              {{ item.name }}
          </template>
          <MenuItem
              v-for="subItem in item.items"
              :name="subItem.id">{{ subItem.name }}</MenuItem>
      </Submenu>
  </Menu>
</template>
<script>
    export default {
      props: {
        menus: Array
      },
      methods: {
          select(id){
              const menuId = id.split('-')[0];
              const { items = [] } = this.menus.find((item)=>{
                  return item.id == menuId;
              }) || {};

              const { path } = items.find((item)=>{
                  return item.id == id;
              }) || {};

              this.$router.push({
                  path,
              });
          },
      },
    }
</script>
<style scoped>

</style>
