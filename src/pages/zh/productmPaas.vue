<template>
  <div class="page_container">
    <div class="mp_front">
      <div class="mp_frontInner">
        <div class="mp_front_t">
          {{ $t('productmPaas.Front') }}
        </div>
        <div class="mp_front_t1">
          {{ $t('productmPaas.Flexible') }}
        </div>
        <div class="mp_front_t2">
          {{ $t('productmPaas.agile') }}
        </div>
      </div>
    </div>
    <!--    mp_appOut-->
    <div class="mp_appOut">
      <div class="mp_app flexRowAC">
        <div>
          <div class="mp_front_t">
            {{ $t('productmPaas.syntax') }}
          </div>
          <div class="mp_front_t2">
            {{ $t('productmPaas.Follow') }}
          </div>
        </div>
        <img class="mp_app_img" src="@/assets/img/productmPaas/app.png" alt="" />
      </div>
    </div>
    <!--    service-->
    <div class="mp_appOut service">
      <div class="mp_app flexRowAC">
        <div>
          <div class="mp_front_t">
            {{ $t('productmPaas.expansion') }}
          </div>
          <div class="mp_front_t2">
            {{ $t('productmPaas.Enterprises') }}
          </div>
        </div>
        <img class="mp_app_img appImg" src="@/assets/img/productmPaas/service.png" alt="" />
      </div>
    </div>
    <!--    develop-->
    <div class="mp_appOut develop">
      <div class="mp_app flexRowAC">
        <div>
          <div class="mp_front_t">
            {{ $t('productmPaas.Provide') }}
          </div>
          <div class="mp_front_t2">
            {{ $t('productmPaas.application') }}
          </div>
        </div>
        <img class="mp_app_img developImg" src="@/assets/img/productmPaas/develop.png" alt="" />
      </div>
    </div>
    <!--    contain-->
    <div class="contain_out">
      <div class="contain">
        <div class="contain_t">
          {{ $t('productmPaas.Powerful') }}
        </div>
        <div class="contain_t1 w880">
          {{ $t('productmPaas.based') }}
        </div>
      </div>
      <div class="store flexRowAC">
        <div v-for="(item,i) in storeList" :key="i" class="store_item" :style="{backgroundImage:'url('+item.img+')'}">
          <div class="store_t flexRowAC">
            {{ item.title }}
          </div>
          <div class="store_t1">
            {{ item.t2 }}
          </div>
        </div>
      </div>
      <div class="store mul flexRowAC">
        <div v-for="(item,i) in mulList" :key="i" class="store_item" :style="{backgroundImage:'url('+item.img+')'}">
          <div class="store_t flexRowAC">
            {{ item.title }}
          </div>
          <div class="store_t1">
            {{ item.t2 }}
          </div>
        </div>
      </div>
      <div class="contain">
        <div class="contain_t w880">
          {{ $t('productmPaas.Supports') }}
        </div>
        <div class="contain_t1 w880">
          {{ $t('productmPaas.provides') }}
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
import store1 from '@/assets/img/productmPaas/store1.png'
import store2 from '@/assets/img/productmPaas/store2.png'
import mul1 from '@/assets/img/productmPaas/mul1.png'
import mul2 from '@/assets/img/productmPaas/mul2.png'
import mul3 from '@/assets/img/productmPaas/mul3.png'

let storeList = computed(() => {
  return [
    {
      img: store1,
      title: t('productmPaas.Personalized'),
      t2: t('productmPaas.market')
    },
    {
      img: store2,
      title: t('productmPaas.native'),
      t2: t('productmPaas.Based')
    }
  ]
})
let mulList = computed(() => {
  return [
    {
      img: mul1,
      title: t('productmPaas.support'),
      t2: t('productmPaas.Multi')
    },
    {
      img: mul2,
      title: t('productmPaas.modes'),
      t2: t('productmPaas.industry')
    },
    {
      img: mul3,
      title: t('productmPaas.testing'),
      t2: t('productmPaas.operation')
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
.mp_front {
  height: 475px;
  background-size: cover;
  background-image: url('@/assets/img/productmPaas/mp_front.png');

  .mp_frontInner {
    width: 1200px;
    margin: auto;
  }

  .mp_front_t1 {
    width: 610px;
    padding-top: 17px;
    font-size: 22px;
    color: #051261;
    line-height: 30px;
    font-weight: 500;
  }
}

.mp_front_t {
  padding-top: 110px;
  width: 720px;
  font-size: 32px;
  color: #051261;
  line-height: 42px;
  font-weight: bold;
}

.mp_front_t2 {
  width: 560px;
  padding-top: 30px;
  font-size: 14px;
  color: #717781;
  line-height: 22px;
  font-weight: 500;
}

.mp_appOut {
  background: #FCFCFC;

  .mp_app {
    justify-content: space-between;
    height: 460px;
    width: 1200px;
    margin: auto;
    position: relative;
  }

  .mp_app_img {
    width: 500px;
    height: 345px;
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

/*service*/
.service {
  background: #FDFEFF;

  .appImg {
    width: 380px;
    height: 320px;
    right: 50px;
  }
}

.develop {
  .developImg {
    width: 548px;
    height: 368px;
  }
}

.contain_out {
  padding-top: 86px;
  background-size: 100% 100%;
  background-image: url('@/assets/img/productmPaas/contain.png');
}

.contain {
  width: 1200px;
  margin: auto;
  padding-bottom: 80px;

  .contain_t {
    font-size: 40px;
    color: #051261;
    text-align: center;
    line-height: 58px;
    font-weight: bold;
  }

  .contain_t1 {
    padding-top: 44px;
    font-size: 24px;
    color: #717781;
    text-align: center;
    line-height: 28px;
    font-weight: 400;
  }
}

.w880 {
  width: 880px;
  margin: auto;
}

.store {
  width: 1200px;
  margin: auto;
  gap: 20px;
  padding-bottom: 20px;

  .store_item {
    flex: 1;
    height: 310px;
    background-size: 100% 100%;
  }

  .store_t {
    height: 85px;
    padding-left: 13px;
    font-size: 24px;
    color: #1F3F74;
    font-weight: 700;
  }

  .store_t1 {
    padding: 60px 12px 0;
    font-size: 16px;
    color: #506079;
    line-height: 30px;
    font-weight: 500;
  }
}

.mul.store {
  padding-bottom: 40px;

  .store_t {
    width: 280px;
  }
}
</style>
