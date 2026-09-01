<template>
  <div class="home_page">
    <div class="section">
      <div class="workUp_out">
        <div class="workUp flexRowAC">
          <div class="workUp_TD">
            <div class="workUp_TD_t">
              The ultimate AI Camera
            </div>
            <div class="oort_btn_out">
              <span class="oort_btn"> OORT-6600-20</span>
            </div>
            <div class="workUp_TD_d">
              This monitoring device uses Ampere GPU and ARM Cortex-A78AE CPU, with AIISP full color night vision, auto
              zoom, optical fog penetration and other functions. Support more than 80 kinds of target recognition and
              tracking, covering a range of 1-3KM. Product design lightweight, power consumption is less than 30W, in
              line with IP66 protection standards, suitable for various environments, support ONVIF/RTSP/GB T28181
              protocol access, computing power up to 20T.
            </div>
            <div class="workUp_TD_b flexRowAC" @click="viewPath('/productworkUp')">
              {{ $t('product.viewDE') }}
              <el-icon size="27">
                <Right />
              </el-icon>
            </div>
          </div>
          <img class="workUp_img h1" src="@/assets/VLimg/h1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="section bgcF7">
      <div class="workUp_out">
        <div class="workUp flexRowAC">
          <div class="workUp_TD">
            <div class="workUp_TD_t">
              AI-enhanced camera
            </div>
            <div class="oort_btn_out">
              <span class="oort_btn"> OORT-6600-6</span>
            </div>
            <div class="workUp_TD_d">
              It is a high-performance edge computing device with an octa-core CPU that supports auto-zoom and
              multi-target recognition. Lightweight design, power consumption ≤30W, weight ≤9KG, IP66 protection, adapt
              to a variety of environments. Support a variety of protocols, computing power up to 6T.
            </div>
            <div class="workUp_TD_b flexRowAC" @click="viewPath('/productworkUp')">
              {{ $t('product.viewDE') }}
              <el-icon size="27">
                <Right />
              </el-icon>
            </div>
          </div>
          <img class="workUp_img h1" src="@/assets/VLimg/h1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="section">
      <div class="workUp_out">
        <div class="workUp flexRowAC">
          <div class="workUp_TD">
            <div class="workUp_TD_t">
              AI Camera Pro
            </div>
            <div class="oort_btn_out">
              <span class="oort_btn"> OORT-6600-1</span>
            </div>
            <div class="workUp_TD_d">
              The device uses an eight-core processor, supports fully automatic zoom and edge computing, and can
              identify more than 80 targets. Lightweight design, IP66 protection, adapt to a variety of environments,
              support multi-protocol access and 1T computing power, ensure efficient edge computing performance.
            </div>
            <div class="workUp_TD_b flexRowAC" @click="viewPath('/productworkUp')">
              {{ $t('product.viewDE') }}
              <el-icon size="27">
                <Right />
              </el-icon>
            </div>
          </div>
          <img class="workUp_img h1 h3" src="@/assets/VLimg/h3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="section bgcF7">
      <div class="workUp_out">
        <div class="workUp flexRowAC">
          <div class="workUp_TD">
            <div class="workUp_TD_t">
              General camera
            </div>
            <div class="oort_btn_out">
              <span class="oort_btn"> OORT-6600-G</span>
            </div>
            <div class="workUp_TD_d">
              The device combines white light full-color pickup, body shape detection and strong light suppression
              technology to ensure clear, full-color images even in low light. With 4 million pixel HD resolution and
              IP66 waterproof function, it is the ideal 24/7 security monitoring device for homes, shops and offices.
            </div>
            <div class="workUp_TD_b flexRowAC" @click="viewPath('/productworkUp')">
              {{ $t('product.viewDE') }}
              <el-icon size="27">
                <Right />
              </el-icon>
            </div>
          </div>
          <img class="workUp_img h1 h3" src="@/assets/VLimg/h3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="more_out flexRowAC">
      <div class="moreBox flexRowAC">
        More equipment
        <el-icon size="48">
          <Right />
        </el-icon>
      </div>
    </div>
    <div class="h6_cover">
      <div class="h6_cover_t">
        Scene introduction
      </div>
      <div class="h6_cover_d">
        It can be widely used in chemical/industrial plants, hazardous chemicals factories, gas
        stations, paint factories, liquefied petroleum gas stations, warehouse rooms, back kitchens, old residential
        buildings, tobacco factories, underground pipe networks, fireworks plants, livestock farms, orchards, mining
        areas, and other important places without nets.
      </div>
      <div class="h6_cover_img_out">
        <img class="h6_cover_img" src="@/assets/VLimg/h6.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css'

let navList = ref([])
navList.value = [
  {
    title: 'Start',
    id_: 'id_start'
  }, {
    title: '01',
    id_: 'id_solu'
  }, {
    title: '02',
    id_: 'id_case'
  }, {
    title: '03',
    id_: 'id_ai'
  }, {
    title: '04',
    id_: 'id_digi'
  }, {
    title: '05',
    id_: 'id_pri'
  }, {
    title: '06',
    id_: 'id_com'
  }, {
    title: '07',
    id_: 'id_par'
  }]

</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.home_page {
  position: relative;
}

.setp {
  cursor: pointer;
  height: 390px;
  position: fixed;
  right: 0;
  top: 30vh;
  border-right: 6px solid rgba(193, 193, 193, .5);
  margin-right: 30px;

  &_t {
    position: relative;
    right: -6px;
    top: 0;
    padding-bottom: 28px;
    padding-right: 20px;
    font-size: 18px;
    color: rgba(193, 193, 193, 1);
    font-weight: 700;
  }

  .line {
    border-right: 6px solid rgba(193, 193, 193, 1);
  }
}

.capiBox {
  width: 1500px;
  margin: 0 auto;
  height: 210px;
  justify-content: center;
  gap: 60px;

  &_item {
    align-items: flex-start !important;
  }

  &_title {
    font-size: 36px;
    color: #333333;
    font-weight: 700;
    padding-bottom: 12px;
  }

  &_title1 {
    font-size: 16px;
    color: #333333;
    font-weight: 400;
  }

  &_imgs {
    width: 48px;
    height: 48px;
    margin-right: 8px;
    background-size: 100% 100%;
  }
}

.solution {
  width: 1500px;
  margin: 0 auto;
  padding-top: 180px;
  position: relative;

  &_title {
    position: relative;
    z-index: 2;
    padding-bottom: 24px;
  }

  &_title1 {
    width: 650px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    line-height: 27px;
    font-weight: 400;
  }
}

.solution_manage {
  align-items: flex-start;
  gap: 32px;
  padding-top: 60px;
  padding-bottom: 30px;

  &_item {
    flex: 1;
  }

  &_img {
    width: 100%;
  }

  &_title {
    padding-top: 20px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 28px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 700;
  }

  &_desc {
    padding-top: 20px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: #4C5551;
    letter-spacing: 0;
    line-height: 28px;
    font-weight: 400;
  }
}

.business {
  height: 450px;
  background-size: cover;
  background-image: url('@/assets/img/home_Business.png');

  &_inner {
    width: 1500px;
    margin: 0 auto;
    padding-top: 80px;
  }

  &_title {
    width: 524px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 700;
  }

  &_nums {
    padding-top: 30px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 400;
  }

  .business_icon {
    width: 30px;
    height: 30px;
    background-size: cover;
  }
}

.solution_img {
  position: absolute;
  z-index: 1;
  top: 150px;
  left: -28px;
  width: 88px;
  height: 88px;
}

.title_text {
  font-family: MicrosoftYaHei-Bold;
  font-size: 68px;
  color: #000000;
  letter-spacing: 0;
  font-weight: 700;
}

.case.solution {
  .solution_title {
    padding-left: 20px;
  }

  .solution_manage_item {
    height: 460px;
    background-color: #fff;
  }

  .solution_manage {
    flex-shrink: 0;
    margin-bottom: 150px;

    :deep .swiper-wrapper {
      flex-shrink: 0;
      cursor: grab;
    }

    &_item {
      width: 330px;
      background-color: #fff;
      flex: inherit;
    }
  }

  .solution_manage_text {
    padding: 20px 16px;
    font-size: 18px;
    color: #333333;
    font-weight: 400;
  }
}

.ai {
  &_out {
    background-color: #fff;
    padding-top: 130px;
    padding-bottom: 150px;
  }

  position: relative;
  width: 1500px;
  margin: 0 auto;
  align-items: flex-start;

  .ai_title, .ai_img {
    width: 50%;
    position: relative;
  }

  .ai_img {
    width: 858px;
    height: 844px;
    background-size: cover;
  }

  .ai_solution {
    position: absolute;
    top: 318px;
    left: 0;
    height: 468px;
    padding: 30px;
    width: 1280px;
    background-color: rgba(51, 51, 51, 0.9);

    &_t {
      width: 900px;
      font-family: MicrosoftYaHei-Bold;
      font-size: 28px;
      color: #FFFFFF;
      letter-spacing: 0;
      font-weight: 700;
    }

    &_t1 {
      padding-top: 40px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 24px;
      font-weight: 400;
    }
  }

  .ai_title_img {
    top: 20px;
    z-index: 1;
  }

  .ai_title_t {
    position: relative;
    z-index: 2;
    padding: 50px 0 24px 20px;
  }

  .ai_title_d {
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    line-height: 27px;
    font-weight: 400;
  }
}

.trans {
  position: relative;
  width: 1500px;
  margin: 0 auto;
  padding-top: 178px;

  .trans_title {
    position: relative;
    padding-left: 20px;
    z-index: 2;
  }

  .trans_img {
    z-index: 1;
  }
}

.trans_content {
  padding-top: 60px;
  padding-bottom: 137px;
  color: #FFFFFF;

  .trans_system {
    width: 496px;
    height: 772px;
    background-size: cover;
    background-image: url("@/assets/img/home_t_System.png");
    padding: 32px 28px;
  }

  .trans_video {
    width: 661px;
    height: 772px;
  }

  .trans_video_bottom {
    width: 661px;
    height: 386px;
    padding: 28px;
    background-size: cover;
    background-image: url("@/assets/img/home_t_mpaas.png");
  }

  .trans_video_1 {
    width: 332px;
    height: 386px;
    padding: 28px;
    background-image: linear-gradient(270deg, #0682F9 0%, #084DC4 100%);
  }

  .trans_video_2 {
    width: 330px;
    height: 386px;
    padding: 28px;
    background-size: cover;
    background-image: url('@/assets/img/home_t_office.png');
  }

  .trans_video_t {
    font-family: MicrosoftYaHei-Bold;
    font-size: 20px;
    letter-spacing: 0;
    font-weight: 700;
    padding-bottom: 20px;
  }

  .trans_video_d {
    font-family: MicrosoftYaHei;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
    font-weight: 400;
  }

  .trans_gis {
    width: 330px;
    height: 772px;
  }

  .trans_gis_top {
    width: 330px;
    height: 386px;
    padding: 28px;
    color: #000;
    background-color: #fff;
  }

  .trans_gis_bottom {
    padding: 28px;
    background-image: linear-gradient(270deg, #0682F9 0%, #084DC4 100%);
    height: 386px;
  }

  .cloud {
    width: 496px;
    height: 340px;
    color: #000;
    padding: 28px;
    background-color: #fff;
  }

  .plat {
    width: 496px;
    height: 340px;
    padding: 28px;
    background-image: linear-gradient(270deg, #0682F9 0%, #084DC4 100%);
  }

  .custom {
    width: 496px;
    height: 340px;
    padding: 28px;
    background-size: cover;
    background-image: url('@/assets/img/home_t_dev.png');
  }
}

.trans_video_t_img {
  width: 48px;
  height: 48px;
  margin-right: 8px;
  background-size: cover;
}

.private_out {
  padding-top: 178px;
}

.private.solution {
  padding-top: 0;

  .solution_title {
    padding-left: 20px;
  }

  .solution_img {
    top: -28px;
  }

  .soft {
    padding-top: 80px;
    gap: 30px;
  }

  .soft_item {
    height: 460px;
    padding: 40px 26px;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  }

  .soft_item_img {
    width: 78px;
    height: 78px;
    background-size: cover;
  }

  .soft_item_tile {
    padding-top: 20px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 20px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 700;
  }

  .soft_item_d {
    padding-top: 40px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: #4C5551;
    letter-spacing: 0;
    line-height: 28px;
    font-weight: 400;
  }
}

.company {
  padding-bottom: 220px;
  position: relative;

  .company_content {
    padding-top: 60px;
    height: 670px;
  }

  .company_about {
    float: right;
    width: 922px;
    height: 610px;
    color: #fff;
    font-size: 18px;
    padding: 40px 45px 40px 240px;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .company_about_us {
    justify-content: center;
    float: right;
    margin-top: 30px;
    width: 142px;
    height: 44px;
    border-radius: 50px;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.00);
    border: 1px solid rgba(255, 255, 255, 1);
  }

  .company_img {
    position: absolute;
    left: 0;
    top: 460px;
    width: 760px;
    height: 600px;
    background-size: cover;
  }
}

.partners_out {
  background-color: #fff;
  padding-bottom: 120px;

  .partners_img {
    height: 492px;
    width: 100%;
    background-size: cover;
  }
}

.workUp {
  width: 1488px;
  margin: auto;
  padding-top: 140px;
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

.h6_cover {
  padding: 120px 140px;
  width: 100%;
  background-image: url('@/assets/VLimg/h7.png');

  .h6_cover_t {
    text-align: center;
    font-family: OPlusSans3 .0 -Bold;
    font-size: 48px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 700;
    padding-bottom: 20px;
  }

  .h6_cover_d {
    width: 1280px;
    margin: 0 auto;
    font-family: OPlusSans3 .0;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;
    font-weight: 400;
  }

  .h6_cover_img_out {
    //width: 1480px;
    margin: 0 auto;
  }

  .h6_cover_img {
    width: 100%;
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

.more_out {
  height: 320px;
  width: 100%;
  background-image: url('@/assets/VLimg/h5.png');
  background-size: 100% 100%;
  justify-content: center;

  .moreBox {
    cursor: pointer;
    gap: 16px;
    font-size: 48px;
    color: #FFFFFF;
    font-weight: 700;
  }
}
.section{
  background-color: #fff;
  &.bgcF7{
    background: #F7F7F7;
  }
}

</style>
