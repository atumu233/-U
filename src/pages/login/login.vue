<template>
  <div class="login">
    <div class="con">
      <h2>登录</h2>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <button @click="$router.push('/index')">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right,#553443,#303d60);
}
.con{
    width: 400px;
    height: 280px;
    background: #ffffff;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
}
.con h2{
    margin-top: 30px;
    margin-bottom: 20px;
}
.con input{
    width: 66%;
    height: 30px;
    margin-bottom: 20px;
    font-size: 20px;
}
.con button {
    width: 66%;
    height: 30px;
    background: rgb(45, 94, 116);
    border: none;
    font-size: 20px;
    color: #ffffff;
    border-radius: 3p2;
}
</style>