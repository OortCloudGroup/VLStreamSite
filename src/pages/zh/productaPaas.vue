<template>
  <div class="page_container">
    <div class="ap_t">
      {{ $t('productaPaas.Smart') }}
    </div>
    <div class="ap_t1">
      {{ $t('productaPaas.Intelligent') }}
    </div>
    <div class="ap_pro">
      {{ $t('productaPaas.architecture') }}
    </div>
    <div class="ap_proBox flexRowAC">
      <img class="ap_proBox_l" src="@/assets/img/productaPaas/pro_l.png" alt="" />
      <img class="ap_proBox_c" src="@/assets/img/productaPaas/pro_c.png" alt="" />
      <img class="ap_proBox_r" src="@/assets/img/productaPaas/pro_r.png" alt="" />
    </div>
    <div class="main">
      <div class="main_t">
        {{ $t('productaPaas.Main') }}
      </div>
      <div class="mainBox flexRowAC">
        <div v-for="(item,i) in docuList" :key="i" class="mainBoxItem">
          <img class="mainBoxImgBox" :src="item.img" alt="" />
          <div class="mainBoxItemT">
            {{ item.t }}
          </div>
          <div v-if="i===2" class="mainBoxItemD text2">
            {{ $t('productaPaas.terminal') }}
            <br />
            {{ $t('productaPaas.integration') }}
          </div>
          <div v-if="i===3" class="mainBoxItemD text3">
            {{ $t('productaPaas.Configure') }}
          </div>
          <div v-else class="mainBoxItemD">
            {{ item.d }}
          </div>
        </div>
      </div>
    </div>
    <div class="advant">
      <div class="main_t">
        {{ $t('productaPaas.advantage') }}
      </div>
      <div class="proBox flexRowAC">
        <div v-for="(item,i) in proList" :key="i" class="proBoxItem flexRowAC">
          <img class="proBoxItemImgBox" :src="item.img" alt="" />
          <div>
            <div class="proBoxItemT">
              {{ item.t }}
            </div>
            <div class="proBoxItemD">
              {{ item.t1 }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-backtop :right="50" :bottom="100">
      <div class="Up">
        <el-icon size="16">
          <CaretTop />
        </el-icon>
        <div>Up</div>
      </div>
    </el-backtop>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
import m1 from '@/assets/img/productaPaas/m1.png'
import m2 from '@/assets/img/productaPaas/m2.png'
import m3 from '@/assets/img/productaPaas/m3.png'
import m4 from '@/assets/img/productaPaas/m4.png'
import ap1 from '@/assets/img/productaPaas/ap1.png'
import ap2 from '@/assets/img/productaPaas/ap2.png'
import ap3 from '@/assets/img/productaPaas/ap3.png'
import ap4 from '@/assets/img/productaPaas/ap4.png'
import ap5 from '@/assets/img/productaPaas/ap5.png'
import ap6 from '@/assets/img/productaPaas/ap6.png'

let docuList = computed(() => {
  return [
    {
      img: m1,
      t: t('productaPaas.portal'),
      d: t('productaPaas.aPaaS')
    },
    {
      img: m2,
      t: t('productaPaas.ESB'),
      d: t('productaPaas.aPaaSPla')
    },
    {
      img: m3,
      t: t('productaPaas.support')
      // d: t('productaPaas.business')
    },
    {
      img: m4,
      t: t('productaPaas.Store'),
      d: t('productaPaas.default')
    }
  ]
})
let proList = computed(() => {
  return [
    {
      img: ap1,
      t: t('productaPaas.surface'),
      t1: t('productaPaas.login')
    },
    {
      img: ap2,
      t: t('productaPaas.plane'),
      t1: t('productaPaas.planning')
    },
    {
      img: ap3,
      t: t('productaPaas.limit'),
      t1: t('productaPaas.system')
    },
    {
      img: ap4,
      t: t('productaPaas.operation'),
      t1: t('productaPaas.provides')
    },
    {
      img: ap5,
      t: t('productaPaas.Application'),
      t1: t('productaPaas.Based')
    },
    {
      img: ap6,
      t: t('productaPaas.linkage'),
      t1: t('productaPaas.Across')
    }
  ]
})
</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";
.el-backtop{
  height: 40px !important;
  width: 40px !important;
}
.Up{
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 12px;
  font-size: 12px;
  border-radius: 50%;
  color: #c1c1c1;

  > .el-icon {
    bottom: -4px;
  }
}
.ap_t {
  padding-top: 70px;
  text-align: center;
  font-size: 20px;
  color: #041A41;
  font-weight: 400;
}

.ap_t1 {
  padding-top: 34px;
  width: 992px;
  margin: auto;
  font-size: 14px;
  color: #4E5E77;
  letter-spacing: -0.6px;
  line-height: 25px;
  font-weight: 400;
}

.ap_pro {
  padding-top: 30px;
  padding-bottom: 28px;
  text-align: center;
  font-size: 34px;
  color: #112648;
  font-weight: bold;
}

.ap_proBox {
  width: 1200px;
  padding-bottom: 80px;
  margin: auto;
  gap: 65px;

  .ap_proBox_l {
    width: 120px;
    height: 492px;
    background-size: cover;
  }

  .ap_proBox_c {
    width: 836px;
    height: 561px;
    background-size: cover;
  }

  .ap_proBox_r {
    width: 116px;
    height: 510px;
    background-size: cover;
  }
}

.main {
  height: 664px;
  background-color: #fff;

  .mainBox {
    width: 1200px;
    margin: auto;
    gap: 20px;
  }

  .mainBoxItem {
    flex: 1;
    text-align: center;
    height: 432px;
    padding: 34px 16px 0;
    background: #FFFFFF;
    box-shadow: 0px 6px 12px 5px rgba(0, 121, 255, 0.1);
    border-radius: 16px;
  }

  .mainBoxImgBox {
    margin: auto;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 14px;
    background: #E0EFFF;
  }

  .mainBoxItemT {
    margin: auto;
    text-align: center;
    width: 200px;
    height: 50px;
    font-size: 18px;
    line-height: 18px;
    color: #4E5E77;
    letter-spacing: 0.53px;
    text-align: center;
    font-weight: 400;
  }

  .mainBoxItemD {
    padding-top: 8px;
    text-align: left;
    font-size: 12px;
    color: #4E5E77;
    line-height: 18px;
    font-weight: 400;
  }

  .text2 {
    padding: 8px 16px 0;
    font-size: 16px;
    line-height: 24px;
    color: #4E5E77;
    font-weight: 400;
  }

  .text3 {
    font-size: 14px;
    color: #4E5E77;
    line-height: 20px;
    font-weight: 400;
  }
}

.main_t {
  padding-top: 55px;
  padding-bottom: 50px;
  font-size: 34px;
  color: #081E43;
  text-align: center;
  font-weight: 600;
}

.advant {
  background: #F5F7FC;
  padding-bottom: 80px;

  .proBox {
    width: 1200px;
    margin: auto;
    flex-wrap: wrap;
    gap: 34px;
    align-items: flex-start;
  }

  .proBoxItem {
    width: calc(33% - 20px);
    align-items: flex-start;
    padding: 16px 4px 0;
  }

  .proBoxItemImgBox {
    flex-shrink: 0;
    width: 44px;
    height: 46px;
    border-radius: 50%;
    background-color: #1FE9AA;
    margin-right: 16px;
  }

  .proBoxItemT {
    font-size: 20px;
    color: #4E5E77;
    font-weight: 700;
    padding-bottom: 14px;
  }

  .proBoxItemD {
    width: 288px;
    font-size: 18px;
    color: #4E5E77;
    line-height: 30px;
    font-weight: 500;
  }
}
</style>
