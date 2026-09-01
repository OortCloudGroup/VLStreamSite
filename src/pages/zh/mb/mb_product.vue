<template>
  <div id="fullpage" class="page_container">
    <div class="flexRowAC proTabBox">
      <div class="proTabItem flexRowAC" :class="{act:isAct===0}" @click="proTabClick(0)">
        {{ $t('product.WorkUP') }}
      </div>
      <div class="proTabItem flexRowAC" :class="{act:isAct===1}" @click="proTabClick(1)">
        {{ $t('product.coverMake') }}
      </div>
      <div class="proTabItem flexRowAC" :class="{act:isAct===2}" @click="proTabClick(2)">
        {{ $t('product.DigitalO') }}
      </div>
      <div class="proTabItem flexRowAC" :class="{act:isAct===3}" @click="proTabClick(3)">
        {{ $t('product.generationOA') }}
      </div>
      <div class="proTabItem flexRowAC" :class="{act:isAct===4}" @click="proTabClick(4)">
        {{ $t('product.SmartApp') }}
      </div>
    </div>
    <div v-if="isAct===0" class="tab0ImgBox">
      <div class="section fff">
        <div class="proimgthe_out">
          <div class="proimgthe">
            <div class="">
              <div class="proimgp11_t">
                {{ $t('home.capital') }}
              </div>
              <div class="oort_btn_out">
                <span class="oort_btn"> OORT-6600-20</span>
              </div>
              <div class="proimgp11_des">
                {{ $t('home.talents') }}
              </div>
            </div>
            <img class="proimgp11" src="@/assets/VLimg/h1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="section bgcF7">
        <div class="proimgthe_out">
          <div class="proimgthe title flexRowAC">
            <div class="">
              <div class="proimgp11_t">
                {{ $t('product.Intelligent') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.Mobile') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.Quickly') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.edge') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.supr') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.dupp') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.tica') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.hori') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.fesu') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.ip66') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.comb') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.acce') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab1ImgBox ta1">
        <div class="tabImg_out">
          <img class="tabImg" src="@/assets/VLimg/p2_2.png" alt="" />
          <img class="tabImg" src="@/assets/VLimg/p1_2.png" alt="" />
          <img class="tabImg" src="@/assets/VLimg/p1_3.png" alt="" />
          <img class="tabImg" src="@/assets/VLimg/p1_4.png" alt="" />
          <img class="tabImg" src="@/assets/VLimg/p1_5.png" alt="" />
          <img class="tabImg" src="@/assets/VLimg/p1_6.png" alt="" />
        </div>
      </div>
    </div>
    <div v-if="isAct===1" class="tab1ImgBox tab0ImgBox">
      <div class="section fff">
        <div class="proimgthe_out">
          <div class="proimgthe">
            <div class="">
              <div class="proimgp11_t">
                {{ $t('product.coverMake') }}
              </div>
              <div class="oort_btn_out">
                <span class="oort_btn"> OORT-6600-6</span>
              </div>
              <div class="proimgp11_des">
                {{ $t('home.seekAnd') }}
              </div>
            </div>
            <img class="proimgp11" src="@/assets/VLimg/h1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="section bgcF7">
        <div class="proimgthe_out">
          <div class="proimgthe title flexRowAC">
            <div class="">
              <div class="proimgp11_t">
                {{ $t('product.Intelligent') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.equi') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.fuya') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.ekin') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.lign') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.ip66') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.sust') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabImg_out p">
        <img class="tabImg" src="@/assets/VLimg/p2_2.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p2_3.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p3_3.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p3_4.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p3_5.png" alt="" />
      </div>
    </div>
    <div v-if="isAct===2" class="tab1ImgBox tab0ImgBox">
      <div class="section fff">
        <div class="proimgthe_out">
          <div class="proimgthe">
            <div class="">
              <div class="proimgp11_t">
                {{ $t('product.DigitalO') }}
              </div>
              <div class="oort_btn_out">
                <span class="oort_btn"> OORT-6600-1</span>
              </div>
              <div class="proimgp11_des">
                {{ $t('home.setChain') }}
              </div>
            </div>
            <div style="text-align: center;">
              <img class="proimgp11 h3" src="@/assets/VLimg/h3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="section bgcF7">
        <div class="proimgthe_out">
          <div class="proimgthe title flexRowAC">
            <div class="">
              <div class="proimgp11_t">
                {{ $t('product.peop') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.eqip') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.fuya') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.mttc') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.lign') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.ip66') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.sust') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabImg_out p">
        <img class="tabImg" src="@/assets/VLimg/p3_1.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p3_2.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p3_3.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p3_4.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p3_5.png" alt="" />
      </div>
    </div>
    <div v-if="isAct===3" class="tab1ImgBox tab0ImgBox">
      <div class="section fff">
        <div class="proimgthe_out">
          <div class="proimgthe">
            <div class="">
              <div class="proimgp11_t">
                {{ $t('product.generationOA') }}
              </div>
              <div class="oort_btn_out">
                <span class="oort_btn"> OORT-6600-G</span>
              </div>
              <div class="proimgp11_des">
                {{ $t('product.pick') }}
              </div>
            </div>
            <div style="text-align: center;">
              <img class="proimgp11 h3" src="@/assets/VLimg/h3_.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="section bgcF7">
        <div class="proimgthe_out">
          <div class="proimgthe title flexRowAC">
            <div class="">
              <div class="proimgp11_t">
                {{ $t('product.peop') }}
              </div>
              <div class="proimgp11_des">
                {{ $t('product.whit') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabImg_out p">
        <img class="tabImg" src="@/assets/VLimg/p5.png" alt="" />
        <img class="tabImg" src="@/assets/VLimg/p6.png" alt="" />
      </div>
    </div>
    <div v-if="isAct===4" class="tab1ImgBox">
      <div class="tabImg_out p4">
        <img class="tabImg" src="@/assets/VLimg/p4.png" alt="" />
      </div>
    </div>
    <div v-if="isAct!==4" class="tab7ImgBox_out">
      <div class="tab7ImgBox">
        <div class="tab7Img_title">
          {{ $t('product.fime') }}
        </div>
        <div v-if="isAct===2" style="text-align: center;">
          <img class="tab7Img di3" src="@/assets/VLimg/p3_6.png" alt="" />
        </div>
        <div v-else-if="isAct===3" style="text-align: center;">
          <img class="tab7Img di3" src="@/assets/VLimg/p4_3.png" alt="" />
        </div>
        <img v-else class="tab7Img" src="@/assets/VLimg/mb/proDra.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

let isAct = ref(0)
const route = useRoute()
const proTabClick = (index) => {
  isAct.value = index
}

if (route.query?.tab) {
  isAct.value = parseInt(route.query?.tab)
}
</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.workUp_out {
  background-color: #fff;
}

.workUp {
  align-items: flex-start;
  margin: auto;
  padding-top: 150px;
  padding-bottom: 140px;

  .workUp_img {
    height: 550px;
    background-size: cover;
  }

  .workUp_TD_t {
    padding-top: 104px;
    padding-bottom: 40px;
    font-size: 40px;
    color: #333333;
    line-height: 56px;
    font-weight: 400;
  }

  .workUp_TD {
    padding-left: 75px;
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
  height: 44px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.00);
  border: 1px solid rgba(0, 84, 45, 1);
  font-size: 16px;
  color: #00542D;
}

.xoa {
  align-items: flex-start;
  justify-content: space-between;
  margin: auto;
  padding: 150px 0;

  .xoa_text_t {
    padding-top: 100px;
    padding-bottom: 40px;
    font-size: 40px;
    color: #333333;
    line-height: 56px;
    font-weight: 400;
  }

  .xoa_text_t1 {
    padding-bottom: 54px;
    font-size: 18px;
    color: #333333;
    line-height: 27px;
    font-weight: 400;
  }

  .xoa_img {
    height: 540px;
    background-size: cover;
  }
}

.proTabBox {
  padding: 0 12px;
  overflow: auto;
  gap: 16px;
  background-color: #fff;

  .proTabItem {
    flex-shrink: 0;
    font-size: 14px;
    letter-spacing: 0;
    font-weight: 700;
    padding: 16px 0;
    justify-content: center;
    border-bottom: 4px solid transparent;
  }

  .proTabItem.act {
    color: #EB691C;
    border-bottom: 4px solid #EB691C;
  }
}

.tab1ImgBox {
  background-color: #fff;

  &.ta1 {
    padding: 40px 12px 28px;
  }

  .tabImg_out {
    margin: 0 auto;
  }

  .tabImg_out.p {
    padding: 40px 12px 0;
  }

  .tabImg_out.p4 {
    padding: 40px 12px 0;
  }

  .tabImg {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 12px;
  }
}

.tab7ImgBox_out {
  background: #F7F7F7;
  padding-bottom: 40px;

  .tab7ImgBox {
    margin: 0 auto;

    .tab7Img_title {
      font-size: 16px;
      color: #221714;
      letter-spacing: 0;
      font-weight: 700;
      padding: 40px 12px;
    }

    .tab7Img {
      margin: 0 20px;
      width: calc(100% - 40px);
    }
  }
}

.section {
  background: #F7F7F7;
}

.section, .fff {
  background-color: #fff;
}

.tab0ImgBox {
  .proimgp11 {
    width: 100%;
    height: 160px;
  }
.proimgp11.h3 {
    width: 203px;
    height: 244px;
  }

  .proimgthe_out {
    margin: 0 auto;
  }

  .proimgthe {
    padding: 40px 12px;
    justify-content: space-between;
  }

  .proimgthe.title {
    .proimgp11_des {
      padding-bottom: 20px;
      width: 100%;
      font-size: 14px;
      color: #221714;
      letter-spacing: 0;
      font-weight: 400;
    }
  }

  .proimgp11_t {
    padding: 0 0 12px;
    font-size: 18px;
    color: #383531;
    font-weight: 700;
  }

  .proimgp11_des {
    padding-bottom: 20px;
    width: 100%;
    font-size: 14px;
    color: #221714;
    letter-spacing: 0;
    font-weight: 400;
  }
}

.oort_btn_out {
  padding-bottom: 18px;

  .oort_btn {
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 400;
    background: #EB691C;
  }
}

.section {
  background-color: #fff;

  &.bgcF7 {
    background: #F7F7F7;
  }
}
</style>
