<template>
  <div class="page_container">
    <div class="ab_me">
      <div>
        {{ $t('aboutUs.inno') }}
      </div>
      <img class="au1Img" src="@/assets/VLimg/mb/au_1.png" alt="" />
    </div>
    <div class="au2ImgBox">
      <img class="au2Img" src="@/assets/VLimg/mb/au_2.png" alt="" />
      <img class="au2Img" src="@/assets/VLimg/mb/au_3.png" alt="" />
      <img class="au2Img" src="@/assets/VLimg/mb/au_4.png" alt="" />
      <img class="au2Img" src="@/assets/VLimg/mb/au_5.png" alt="" />
      <img class="au2Img" src="@/assets/VLimg/mb/aus1.png" alt="" />
      <img class="au2Img" src="@/assets/VLimg/mb/au_6.png" alt="" />
      <img class="au2Img" src="@/assets/VLimg/mb/au_7.png" alt="" />
    </div>
    <div class="ab1Box gr">
      <div class="ab_title">
        {{ $t('product.cert') }}
      </div>
      <div class="ab1Img_out flexRowAC">
        <img class="ab1Img" src="@/assets/VLimg/mb/au_8.png" alt="" />
      </div>
    </div>
    <div class="ab1Box">
      <div class="ab_title">
        {{ $t('product.cser') }}
      </div>
      <div class="ab_desc">
        {{ $t('product.clou') }}
      </div>
      <div class="ab1Img_out o2 flexRowAC">
        <img class="ab1Img" src="@/assets/VLimg/ab2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.au1Img {
  margin-top: 16px;
  height: 40px;
}

.au2ImgBox {
  padding: 0 12px 40px;
  .au2Img{
    width: 100%;
    margin-bottom: 8px;
  }
}

.ab1Box.gr {
  background: #F7F7F7;
}

.ab_title {
  padding: 40px 12px 30px;
  font-size: 16px;
  color: #221714;
  letter-spacing: 0;
  font-weight: 700;
}

.ab_desc {
  padding: 0 12px;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 400;
  padding-bottom: 20px;
}

.ab1Box {
  padding-bottom: 40px;
}

.ab1Img_out {
  padding: 0 42px;
  justify-content: center;

  .ab1Img {
    width: 100%;
  }

  &.o2 {
    padding: 0 12px;
  }
}

.page_container {
  background-color: #fff;
  padding-bottom: 40px;
}

.au_dot_img {
  height: 166px;
  background-size: cover;
  position: absolute;
  top: 148px;
  left: -108px;
}

.au_page {
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
  padding: 16px 12px;
  font-size: 14px;
  color: #333333;
  font-weight: 400;
  margin: 0 12px;

  .ab_me_img {
    width: 100%;
    height: 100%;
  }
}
</style>
