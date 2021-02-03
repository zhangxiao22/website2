<template>
  <div class="header">
    <div class="box">
      <div class="logo">logo+公司名称</div>
      <div class="nav">
        <div class="item">1111</div>
        <div class="item">2222</div>
        <div class="item">3333</div>
        <div class="item">4444</div>
        <div class="item">5555</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  color: #fff;
  height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    to right,
    #017dbe,
    #0066ae,
    #00509c,
    #003989,
    #022274
  );
  .box {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
    }
    .nav {
      display: flex;
      align-items: center;

      .item {
        margin-left: 60px;
        font-size: 20px;
      }
    }
  }
}
</style>
