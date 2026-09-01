<template>
  <div class="page_container">
    <div class="ser_title flexRowAC">
      {{ $t('serviceExtend.Smart') }}
    </div>
    <div class="ser_desc flexRowAC">
      {{ $t('serviceExtend.Createfair') }}
    </div>
    <div class="ser_smart flexRowAC">
      <div class="ser_l">
        <div>
          {{ $t('serviceExtend.Smart') }}
        </div>
        <img class="sersl_img" src="@/assets/img/service/ser_smart.png" alt="" />
      </div>
      <div class="ser_park">
        <div class="ser_park_t">
          {{ $t('serviceExtend.park') }}
        </div>
        <div class="ser_park_line" />
        <div class="ser_park_d">
          {{ $t('serviceExtend.provides') }}
        </div>
      </div>
      <div class="ser_l">
        <div>
          {{ $t('serviceExtend.building') }}
        </div>
        <img class="sersl_img" src="@/assets/img/service/ser_smart_building.png" alt="" />
      </div>
    </div>
    <div class="ser_smart flexRowAC">
      <div class="ser_l">
        <div>
          {{ $t('serviceExtend.Smart') }}
        </div>
        <img class="sersl_img" src="@/assets/img/service/ser_smart.png" alt="" />
      </div>
      <div class="ser_l">
        <div>
          {{ $t('serviceExtend.park') }}
        </div>
        <img class="sersl_img" src="@/assets/img/service/ser_smart_park.png" alt="" />
      </div>
      <div class="ser_park ser_park1">
        <div class="ser_park_t">
          {{ $t('serviceExtend.building') }}
        </div>
        <div class="ser_park_line" />
        <div class="ser_park_d">
          {{ $t('serviceExtend.communication') }}
        </div>
      </div>
    </div>
    <div class="di_out">
      <div class="digbg ser_title flexRowAC">
        {{ $t('serviceExtend.government') }}
      </div>
      <div class="digbg1 ser_desc flexRowAC">
        {{ $t('serviceExtend.economy') }}
        <br />
        {{ $t('serviceExtend.era') }}
      </div>
      <div v-for="(item,i) in sportsList" :key="i" class="sports_out">
        <div class="sports flexRowAC">
          <div class="sports_l">
            <div class="sports_item flexRowAC">
              <img class="sports_img" src="@/assets/img/service/s_sports1.png" alt="" />
              <div class="sports_text">
                {{ $t('service.Sports') }}
              </div>
            </div>
            <div class="sports_edu flexRowAC">
              <div :class="{sel_bg1:i===0}" class="sports_eduItem  flexRowAC">
                <img
                  v-if="item.sel==='Education'"
                  class="sports_edu_img"
                  src="@/assets/img/serviceExtend/sel_education.png"
                  alt=""
                />
                <img v-else class="sports_edu_img" src="@/assets/img/service/s_Education.png" alt="" />
                <div class="sports_edu_t">
                  {{ $t('service.Education') }}
                </div>
              </div>
              <div :class="{sel_bg2:i===1}" class="sports_eduItem flexRowAC">
                <img
                  v-if="item.sel==='Medical'"
                  class="sports_edu_img"
                  src="@/assets/img/serviceExtend/sel_Medical.png"
                  alt=""
                />
                <img v-else class="sports_edu_img" src="@/assets/img/service/s_m.png" alt="" />
                <div class="sports_edu_t">
                  {{ $t('service.Medical') }}
                </div>
              </div>
              <div :class="{sel_bg3:i===2}" class="sports_eduItem flexRowAC">
                <img
                  v-if="item.sel==='Telecom'"
                  class="sports_edu_img"
                  src="@/assets/img/service/s_Telecom1.png"
                  alt=""
                />
                <img v-else class="sports_edu_img" src="@/assets/img/service/s_Telecom.png" alt="" />
                <div class="sports_edu_t">
                  {{ $t('service.Telecom') }}
                </div>
              </div>
              <div :class="{sel_bg4:i===3}" class="sports_eduItem flexRowAC">
                <img
                  v-if="item.sel==='Energy'"
                  class="sports_edu_img"
                  src="@/assets/img/serviceExtend/sel_Energy.png"
                  alt=""
                />
                <img v-else class="sports_edu_img" src="@/assets/img/service/s_Energy.png" alt="" />
                <div class="sports_edu_t">
                  {{ $t('service.Energy') }}
                </div>
              </div>
            </div>
          </div>
          <div class="s_bg" :style="{backgroundImage: 'url('+item.img+')'}">
            <div class="s_bg_t">
              {{ item.desc }}
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
import sel_bg_education from '@/assets/img/serviceExtend/sel_bg_education.png'
import sel_bg_Medical from '@/assets/img/serviceExtend/sel_bg_Medical.png'
import sel_bg_Telecom from '@/assets/img/serviceExtend/sel_bg_Telecom.png'
import sel_bg_Energy from '@/assets/img/serviceExtend/sel_bg_Energy.png'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()
let sportsList = computed(() => {
  return [
    {
      img: sel_bg_education,
      sel: t('service.Education'),
      desc: t('serviceExtend.artificial')
    },
    {
      img: sel_bg_Medical,
      sel: t('service.Medical'),
      desc: t('serviceExtend.emerging')
    },
    {
      img: sel_bg_Telecom,
      sel: t('service.Telecom'),
      desc: t('serviceExtend.technologies')
    },
    {
      img: sel_bg_Energy,
      sel: t('service.Energy'),
      desc: t('serviceExtend.energy')
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
.ser_title {
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 20px;
  font-size: 48px;
  color: #0B162B;
  line-height: 60px;
  font-weight: 700;
}

.ser_desc {
  padding-bottom: 70px;
  justify-content: center;
  opacity: 0.5;
  font-size: 18px;
  color: #0B162B;
  letter-spacing: 0;
  font-weight: 400;
}

.ser_smart {
  gap: 30px;
  width: 1488px;
  margin: auto;
  padding-top: 50px;
}

.ser_l {
  justify-content: center;
  padding-top: 60px;
  font-size: 28px;
  color: #333333;
  font-weight: 700;
  width: 384px;
  height: 680px;
  background-color: #fff;
  text-align: center;
}

.sersl_img {
  margin-top: 433px;
  width: 80px;
  height: 80px;
  background-size: cover;
}

.ser_park {
  padding: 60px 34px;
  width: 660px;
  height: 680px;
  background-image: url("@/assets/img/serviceExtend/smart_paek.png");
  background-size: cover;

  &.ser_park1 {
    background-image: url("@/assets/img/serviceExtend/smart_building.png");

  }
}

.ser_park_t {
  padding-bottom: 40px;
  font-size: 28px;
  color: #FFFFFF;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.ser_park_line {
  position: relative;
  top: -2px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #fff;
}

.ser_park_d {
  padding-top: 40px;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 28px;
  font-weight: 400;
}

.digbg {
  margin-top: 73px;
  background-color: #fff;
}

.digbg1.ser_desc {
  text-align: center;
  background-color: #fff;
  opacity: 1;
  color: rgba(11, 22, 43, 0.5);
}

.digital {
  background-color: #fff;
}

.sports_out {
  background-color: #fff;
}

.sports {
  gap: 30px;
  width: 1500px;
  margin: 0 auto;
  padding-bottom: 54px;

  .sports_item {
    justify-content: center;
    width: 578px;
    height: 170px;
    background-size: cover;
    background-color: #F7F7F7;
    //background-image: url("@/assets/img/service/ser_sports.png");
  }

  .sports_text {
    font-size: 28px;
    color: #333333;
    text-align: center;
    font-weight: 400;
  }

  .sports_img {
    width: 48px;
    height: 48px;
    background-size: cover;
    margin-right: 20px;
  }

  .sports_edu {
    gap: 30px;
    padding-top: 30px;
    flex-shrink: 0;
    flex-wrap: wrap;

    .sports_eduItem {
      width: 274px;
      height: 170px;
      background-color: #F7F7F7;
      flex-direction: column;
      justify-content: center;
      background-size: cover;
    }

    &_img {
      width: 48px;
      height: 48px;
      background-size: cover;
    }

    &_t {
      padding-top: 20px;
      font-size: 28px;
      color: #333333;
      font-weight: 400;
    }
  }

  .s_bg {
    flex-shrink: 0;
    width: 880px;
    height: 570px;
    background-size: cover;
    position: relative;
  }

  .s_bgUrl1 {
    background-image: url("@/assets/img/serviceExtend/sel_bg_education.png");
  }

  .s_bg_t {
    position: absolute;
    top: 394px;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 26px;
    font-weight: 400;
    padding: 0 28px;
  }

  .sel_bg1 {
    background-size: cover;
    background-image: url("@/assets/img/serviceExtend/bg_education.png");

    .sports_edu_t {
      color: #fff;
    }
  }

  .sel_bg2 {
    background-size: cover;
    background-image: url("@/assets/img/serviceExtend/bg_Medical.png");

    .sports_edu_t {
      color: #fff;
    }
  }

  .sel_bg3 {
    background-size: cover;
    background-image: url("@/assets/img/serviceExtend/bg_Telecom.png");

    .sports_edu_t {
      color: #fff;
    }
  }

  .sel_bg4 {
    background-size: cover;
    background-image: url("@/assets/img/serviceExtend/bg_Energy.png");

    .sports_edu_t {
      color: #fff;
    }
  }
}

.di_out {
  padding-bottom: 72px;
}
</style>
