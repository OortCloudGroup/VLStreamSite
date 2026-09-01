<template>
  <div class="page_container">
    <div class="ab_me">
      <img class="ab_me_img" src="@/assets/VLimg/ab_me.png" alt="" />
    </div>
    <div class="ab1Box gr">
      <div class="ab_title">
        {{ $t('product.cert') }}
      </div>
      <div class="ab1Img_out flexRowAC">
        <img class="ab1Img" src="@/assets/VLimg/ab1.png" alt="" />
      </div>
    </div>
    <div class="ab1Box">
      <div class="ab_title">
        {{ $t('product.cser') }}
      </div>
      <div class="ab_desc">
        {{ $t('product.clou') }}
      </div>
      <div class="ab1Img_out flexRowAC">
        <img class="ab2Img" src="@/assets/VLimg/ab2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.ab1Box {
.ab1Img {
    width: 908px;
    height: 380px;
  }
}

.ab1Box.gr {
  background: #F7F7F7;
  padding-bottom: 120px;
}

.ab_title {
  padding: 120px 0 66px;
  padding-left: 220px;
  font-size: 24px;
  color: #221714;
  letter-spacing: 0;
  font-weight: 700;
}

.ab_desc {
  padding-left: 220px;
  width: 1200px;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: 400;
  padding-bottom: 40px;
}

.ab1Img_out {
  justify-content: center;
}

.ab2Img {
  width: 1032px;
  height: 448px;
}

.page_container {
  background-color: #fff;
  padding-bottom: 150px;
}

.au_dot_img {
  width: 180px;
  height: 166px;
  background-size: cover;
  position: absolute;
  top: 148px;
  left: -108px;
}

.au_page {
  width: 1500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.au_title {
  position: relative;
  z-index: 2;
  padding-top: 220px;
  padding-bottom: 20px;
  font-size: 68px;
  color: #333333;
  font-weight: 700;
}

.au_desc {
  font-size: 18px;
  color: #333;
  font-weight: 400;
  padding-bottom: 40px;
}

.auImgText {
  align-items: flex-start;
  position: relative;
}

.au_img {
  width: 858px;
  height: 616px;
  background-size: cover;
}

.au_img_r {
  width: 68px;
  height: 68px;
  background-size: cover;
  position: absolute;
  bottom: 20px;
  left: 848px;

  &.r_2 {
    left: 660px;
  }

  &.r_1 {
    left: 760px;
  }
}

.au_text {
  padding: 90px 0 0 60px;
  position: relative;
  font-size: 18px;
  color: #333333;
}

.au_text_img {
  width: 48px;
  height: 48px;
  position: absolute;
  left: 10px;
  top: 65px;
  font-family: SourceHanSansCN-Normal;
  font-size: 48px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 400;
}

.ab_me {
  padding-top: 20px;
  padding-bottom: 120px;
  width: 1200px;
  margin: auto;

  .ab_me_img {
    width: 100%;
    height: 100%;
  }
}
</style>
