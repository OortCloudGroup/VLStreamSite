<template>
  <div class="home_page">
    <div class="nav_status w1380 flexRowAC">
      <nuxt-link to="/zh/hardware" class="nav_title">
        硬件产品
      </nuxt-link>
      <div class="nav_title lth">
        /&nbsp;&nbsp;
        <span>产品详情</span>
      </div>
    </div>
    <div class="section w1380">
      <div class="workUp_out">
        <div class="workUp flexRowAC w1380">
          <div class="workUp_TD">
            <div class="workUp_TD_t">
              {{ $t('home.technology') }}
            </div>
            <div class="oort_btn_out">
              <span class="oort_btn"> OORT-6600-6</span>
            </div>
            <div class="workUp_TD_d">
              八核边缘设备，支持缩放识别，功耗≤30W，重量≤9KG，IP66防护，算力6T，多协议兼容。
            </div>
            <div class="workUp_TD_b flexRowAC" @click="viewPath('/zh/pc/product',1)">
              {{ $t('product.viewDE') }}
              <el-icon size="27">
                <Right/>
              </el-icon>
            </div>
          </div>
          <img class="workUp_img h1" src="@/assets/VLimg/h1.png" alt=""/>
        </div>
      </div>
    </div>
    <div class="productRute w1380">
      <div class="productRute_t">
        产品特点
      </div>
      <img class="priceImg" src="@/assets/VLimg/hardwareQJ/hard2.png" alt=""/>
    </div>
    <div class="productRute w1380">
      <div class="productRute_t">
        产品规格
      </div>
      <img class="priceImg" src="@/assets/VLimg/hardwareQJ/ha1.png" alt=""/>
      <img class="priceImg" src="@/assets/VLimg/hardwareQJ/ha3.png" alt=""/>
      <img class="priceImg" src="@/assets/VLimg/hardwareQJ/ha4.png" alt=""/>
      <img class="priceImg" src="@/assets/VLimg/hardwareQJ/ha5.png" alt=""/>
      <img class="priceImg" src="@/assets/VLimg/hardwareQJ/ha6.png" alt=""/>
    </div>
    <div class="tab7ImgBox w1380">
      <div class="tab7Img_title">
        {{ $t('product.fime') }}
      </div>
      <div v-if="isAct===2" style="text-align: center;">
        <img class="tab7Img di3" src="@/assets/VLimg/p3_6.png" alt=""/>
      </div>
      <div v-else-if="isAct===3" style="text-align: center;">
        <img class="tab7Img di3" src="@/assets/VLimg/p4_3.png" alt=""/>
      </div>
      <img v-else class="tab7Img" src="@/assets/VLimg/p7.png" alt=""/>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
@import "src/assets/style/vars.less";

.home_page {
  position: relative;
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.productRute {
  padding-bottom: 160px;

  &_t {
    font-weight: 700;
    font-size: 58px;
    color: #333333;
    line-height: 88px;
    text-align: center;
  }

  .priceImg {
    margin-top: 60px;
    width: 100%;
    height: auto;
  }
}

.tab7ImgBox {
  padding-bottom: 160px;

  .tab7Img_title {
    letter-spacing: 0;
    font-weight: 700;
    font-size: 58px;
    color: #333333;
    line-height: 88px;
    text-align: center;
    padding-bottom: 90px;
  }

  .tab7Img {
    width: 1400px;
    height: 240px;

    &.di3 {
      width: 680px;
      height: 708px;
    }
  }
}

.workUp {
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 110px;

  .workUp_img {
    width: 847px;
    height: 550px;
    background-size: cover;
  }

  .workUp_img.h1 {
    flex-shrink: 0;
    width: 572px;
    height: 274px;
    margin-left: 200px;
  }

  .workUp_img.h1.h3 {
    width: 389px;
    height: 474px;
  }

  .workUp_TD_t {
    padding-bottom: 40px;
    font-size: 40px;
    color: #333333;
    line-height: 56px;
    font-weight: 400;
  }

  .workUp_TD_d {
    font-size: 18px;
    color: #000;
    font-weight: 400;
  }
}

.workUp_TD_b {
  justify-content: center;
  cursor: pointer;
  margin-top: 40px;
  width: 160px;
  height: 44px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.00);
  border: 1px solid rgba(235, 105, 28, 1);
  font-size: 16px;
  color: #EB691C;
}

.oort_btn_out {
  padding-bottom: 18px;

  .oort_btn {
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 400;
    background: #EB691C;
  }
}

.section {
  background-color: #fff;
}

// nav
.nav_status {
  height: 60px;
  padding: 10px 0 0 20px;
  border-bottom: 1px solid hsla(0, 0%, 20%, 0.06);
  position: relative;

  &:before {
    content: '';
    width: 3px;
    height: 18px;
    background-color: #1A1A1A;
  }

  .nav_title {
    height: 40px;
    line-height: 40px;
    color: #333;
    margin-left: 12px;

    &.lth {
      color: #999;
    }
  }
}
</style>
