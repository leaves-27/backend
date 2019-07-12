<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header :style="{textAlign: 'left', color: '#fff' }">
                <h2>某某APP-后台管理系统</h2>
            </Header>
            <router-view></router-view>
        </Layout>
    </div>
  </div>
</template>
<script>
	export default {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
