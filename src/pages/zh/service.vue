<template>
  <div class="page_container">
    <div class="digital">
      <div class="flexRowAC digital_title">
        <img class="digital_g_img" src="@/assets/img/service/ser_digital.png" alt="" />
        <div class="digital_title_t">
          {{ $t('service.Digital') }}
        </div>
      </div>
      <div class="digital_desc">
        {{ $t('service.Create') }}
      </div>
    </div>
    <div class="ser_network_out">
      <div class="ser_network">
        <div class="ser_network_inner flexRowAC">
          <div class="ser_network_item">
            <img class="ser_network_item_img" src="@/assets/img/service/ser_material_bolt.png" alt="" />
            <div class="ser_network_item_title">
              {{ $t('service.stop') }}
            </div>
            <div class="ser_network_item_desc">
              {{ $t('service.provincial') }}
            </div>
          </div>
          <div class="ser_network_item">
            <img class="ser_network_item_img" src="@/assets/img/service/ser_material_approval.png" alt="" />
            <div class="ser_network_item_title">
              {{ $t('service.network') }}
            </div>
            <div class="ser_network_item_desc">
              {{ $t('service.Through') }}
            </div>
          </div>
        </div>
        <div class="ser_network_inner flexRowAC">
          <div class="ser_network_item">
            <img class="ser_network_item_img" src="@/assets/img/service/ser_material_bolt.png" alt="" />
            <div class="ser_network_item_title">
              {{ $t('service.collaboration') }}
            </div>
            <div class="ser_network_item_desc">
              {{ $t('service.provincialSer') }}
            </div>
          </div>
          <div class="ser_network_item">
            <img class="ser_network_item_img" src="@/assets/img/service/ser_material_approval.png" alt="" />
            <div class="ser_network_item_title">
              {{ $t('service.available') }}
            </div>
            <div class="ser_network_item_desc">
              {{ $t('service.government') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="smart">
      <div class="digital">
        <div class="flexRowAC digital_title">
          <img class="digital_g_img" src="@/assets/img/service/Smart.png" alt="" />
          <div class="digital_title_t">
            {{ $t('service.city') }}
          </div>
        </div>
        <div class="digital_desc">
          {{ $t('service.digital') }}
        </div>
      </div>
      <div class="smart_content flexRowAC">
        <div class="smart_city">
          <div class="smart_city_title">
            {{ $t('service.city') }}
          </div>
          <div class="ser_park_line" />
          <div class="ser_park_d">
            {{ $t('service.platform') }}
          </div>
        </div>
        <div class="smart_park">
          <div class="smart_park_title">
            {{ $t('service.park') }}
          </div>
          <img class="smart_park_img" src="@/assets/img/service/ser_smart_park.png" alt="" />
        </div>
        <div class="smart_park">
          <div class="smart_park_title">
            {{ $t('service.building') }}
          </div>
          <img class="smart_park_img" src="@/assets/img/service/ser_smart_building.png" alt="" />
        </div>
      </div>
      <div class="economy" @click="serviceExtend">
        <div class="digital">
          <div class="flexRowAC digital_title">
            <img class="digital_g_img" src="@/assets/img/service/ser_economy.png" alt="" />
            <div class="digital_title_t">
              {{ $t('service.economy') }}
            </div>
          </div>
          <div class="digital_desc">
            {{ $t('service.DigitalEra') }}
          </div>
        </div>
        <div class="sports flexRowAC">
          <div class="sports_l">
            <div class="sports_item flexRowAC">
              <img class="sports_img" src="@/assets/img/service/s_sports.png" alt="" />
              <div class="sports_text">
                {{ $t('service.Sports') }}
              </div>
            </div>
            <div class="sports_edu flexRowAC">
              <div class="sports_eduItem flexRowAC">
                <img class="sports_edu_img" src="@/assets/img/service/s_Education.png" alt="" />
                <div class="sports_edu_t">
                  {{ $t('service.Education') }}
                </div>
              </div>
              <div class="sports_eduItem flexRowAC">
                <img class="sports_edu_img" src="@/assets/img/service/s_m.png" alt="" />
                <div class="sports_edu_t">
                  {{ $t('service.Medical') }}
                </div>
              </div>
            </div>
            <div class="sports_edu flexRowAC">
              <div class="sports_eduItem flexRowAC">
                <img class="sports_edu_img" src="@/assets/img/service/s_Telecom.png" alt="" />
                <div class="sports_edu_t">
                  {{ $t('service.Telecom') }}
                </div>
              </div>
              <div class="sports_eduItem flexRowAC">
                <img class="sports_edu_img" src="@/assets/img/service/s_Energy.png" alt="" />
                <div class="sports_edu_t">
                  {{ $t('service.Energy') }}
                </div>
              </div>
            </div>
          </div>
          <div class="s_bg">
            <div class="s_bg_t">
              {{ $t('service.ability') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
let serviceExtend = () => {
  router.push('/zh/serviceExtend')
}
</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.digital {
  background-color: #fff;
  text-align: center;
  padding-top: 130px;
  padding-bottom: 120px;

  .digital_title {
    justify-content: center;
    text-align: center;
  }

  .digital_g_img {
    width: 98px;
    height: 98px;
    background-size: cover;
    margin-right: 8px;
  }

  .digital_title_t {
    font-size: 48px;
    color: #0B162B;
    text-align: center;
    line-height: 60px;
    font-weight: 700;
  }

  .digital_desc {
    width: 870px;
    margin: auto;
    opacity: 0.5;
    font-size: 18px;
    color: #0B162B;
    font-weight: 400;
  }
}

.ser_network_out {
  background-color: #fff;
}

.ser_network {
  width: 1500px;
  margin: 0 auto;
  padding-bottom: 90px;

  .ser_network_inner {
    gap: 108px;
    align-items: flex-start !important;
    padding-bottom: 60px;
  }

  .ser_network_item_img {
    height: 48px;

  }

  .ser_network_item_title {
    padding-top: 30px;
    font-size: 36px;
    color: #0B162B;
    line-height: 48px;
    font-weight: 400;
  }

  .ser_network_item_desc {
    padding-top: 20px;
    opacity: 0.5;
    font-size: 18px;
    color: #0B162B;
    line-height: 30px;
    font-weight: 400;
  }

  .ser_network_item {
    flex: 1;
  }
}

.smart > .digital {
  background: #F7F7F7;
}

.smart_content {
  gap: 30px;
  width: 1500px;
  margin: 0 auto;
  padding-bottom: 150px;

  .smart_city {
    width: 660px;
    height: 680px;
    background-size: cover;
    background-image: url('@/assets/img/service/smartbg.png');
    padding: 60px 40px 0;
  }

  .smart_city_title {
    font-family: MicrosoftYaHei-Bold;
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 700;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
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
}

.smart_park {
  text-align: center;
  background: #FFFFFF;
  height: 680px;
  flex: 1;

  .smart_park_title {
    font-size: 28px;
    color: #333333;
    font-weight: 700;
    padding-top: 60px;
    padding-bottom: 430px;
  }

  .smart_park_img {
    width: 80px;
    height: 80px;
    background-size: cover;
  }
}

.economy {
  cursor: pointer;
  background-color: #fff;
}

.sports {
  gap: 30px;
  width: 1500px;
  margin: 0 auto;
  padding-bottom: 150px;

  .sports_item {
    justify-content: center;
    width: 578px;
    height: 170px;
    background-size: cover;
    background-image: url("@/assets/img/service/ser_sports.png");
  }

  .sports_text {
    font-size: 28px;
    color: #FFFFFF;
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

    .sports_eduItem {
      width: 274px;
      height: 170px;
      background: #F7F7F7;
      flex-direction: column;
      justify-content: center;
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
    width: 880px;
    height: 570px;
    background-size: cover;
    background-image: url("@/assets/img/service/Sports_bg.png");
    position: relative;
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
}
</style>
