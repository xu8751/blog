<template lang="">
  <div class="container">
    <div class="left">
      <div class="header">
        <img :src="picture" alt="头像" />
      </div>

    </div>
    <div class="right">
      <div class="header">
        <ul>
          <ol>首页</ol>
          <ol>博客</ol>
          <ol>生活</ol>
          <ol>简历</ol>
          <ol>发布</ol>
        </ul>
      </div>
      <div class="content">
        
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import picture from '@/assets/images/picture.png';
// import getAssetsFile from '@/utils/public-use';
export default{
  name: 'homePage',
    props: {

    },
    setup(props, context) {
      return {
        picture
      };
    },
}


</script>
<style lang="less" scoped>
.container {
    display:flex;
    height:100%;
    width:100%;
    background-image: url("@/assets/images/background.jpeg");
    background-size: 100% 100%;
    background-attachment: fixed;
    .left{
        width:300px;
        height: 100%;
        margin: 20px 0px;
        border-right: 2px solid #b9b9b9;
        .header{
          display: flex;
          height: 300px;
          align-content: space-around;
          justify-content: center;
          align-items: center;
          img{
              height:175px;
              width:133px;
          }
        }

    }
    .right{
        width:calc(100% - 300px);
        height:100%;
        .header{
          height: 50px;
          width: 100%;
          margin: 100px 0 0 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          flex-wrap: nowrap;
          ul{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            flex-wrap: nowrap;
            ol{
              margin:0 10px;
              cursor: pointer;
            }
          }
        }
        .content{
            height:calc(100% - 200px);
            width:100%;
        }
    }
}
</style>