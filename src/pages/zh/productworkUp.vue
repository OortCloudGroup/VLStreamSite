<template>
  <div class="work_page">
    <div class="wp_all ">
      <div class="flexRowAC wp_all_flex">
        <div class="wp_all_top">
          <div class="wp_all_t">
            {{ $t('productworkUp.WorkUP') }}
          </div>
          <img class="wp_all_topImg" src="@/assets/img/productworkUp/allinone.png" alt="" />
          <div class="wp_all_d">
            {{ $t('productworkUp.Covering') }}
          </div>
        </div>
      </div>
      <img class="wp_all_img" src="@/assets/img/productworkUp/workup.png" alt="" />
    </div>
    <!--    kunpeng-->
    <div class="kunpeng kunpengBg">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.Comprehensive') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.scenarios') }}
          </div>
        </div>
        <div class="kp_right">
          <img class="kp_right_img" src="@/assets/img/productworkUp/kunpeng.png" alt="" />
          <div class="kpR_t">
            {{ $t('productworkUp.Kunpeng') }}
            <br />
            {{ $t('productworkUp.deployment') }}
          </div>
        </div>
      </div>
    </div>
    <!--    cloud-->
    <div class="kunpeng cloud">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.controllable') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.Communication') }}
          </div>
        </div>
        <div class="flexRowAC cloudRight">
          <div class="c_right">
            <img class="kp_right_img" src="@/assets/img/productworkUp/huaweiC.png" alt="" />
            <div class="kpR_t">
              {{ $t('productworkUp.Huawei') }}
              <br />
              {{ $t('productworkUp.delivery') }}
            </div>
          </div>
          <div class="c_right pl45">
            <img class="kp_right_img" src="@/assets/img/productworkUp/autoC.png" alt="" />
            <div class="kpR_t">
              {{ $t('productworkUp.Autonomous') }}
              <br />
              {{ $t('productworkUp.and') }}
              <br />
              {{ $t('productworkUp.controllableD') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    rich-->
    <div class="kunpeng rich">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.synchronization') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.terminals') }}
          </div>
        </div>
        <div class="flexRowAC richRight">
          <div class="kp_right">
            <img class="rich_pcImg" src="@/assets/img/productworkUp/rich_pc.png" alt="" />
            <div class="kpR_t">
              {{ $t('productworkUp.PC') }}
              <br />
              &nbsp;
            </div>
          </div>
          <div class="kp_right pl14">
            <img class="rich_mobImg" src="@/assets/img/productworkUp/rich_mob.png" alt="" />
            <div class="kpR_t ">
              {{ $t('productworkUp.dual') }}
              <br />
              &nbsp;
              {{ $t('productworkUp.system') }}
            </div>
          </div>
          <div class="kp_right">
            <img class="rich_hwImg" src="@/assets/img/productworkUp/rich_hw.png" alt="" />
            <div class="kpR_t">
              {{ $t('productworkUp.IdeaHub') }}
              <br />
              &nbsp;
            </div>
          </div>
          <div class="kp_right pl14">
            <img class="rich_ipadImg" src="@/assets/img/productworkUp/rich_ipad.png" alt="" />
            <div class="kpR_t">
              {{ $t('productworkUp.Pad') }}
              <br />
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--   secure -->
    <div class="kunpeng secure">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.protection') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.security') }}
          </div>
        </div>
        <div class="flexRowAC secureRight">
          <div class="se_right">
            <img class="seImg" src="@/assets/img/productworkUp/se_mu.png" alt="" />
            <div class="se_t">
              {{ $t('productworkUp.level') }}
              <br />
              &nbsp;
              {{ $t('productworkUp.statistics') }}
            </div>
            <div class="se_d">
              {{ $t('productworkUp.multi') }}
              <br />
              {{ $t('productworkUp.structure') }}
              <br />
              {{ $t('productworkUp.administrators') }}
            </div>
          </div>
          <div class="se_right">
            <img class="seImg" src="@/assets/img/productworkUp/se_ci.png" alt="" />
            <div class="se_t">
              {{ $t('productworkUp.Clean') }}
              <br />
              &nbsp;
            </div>
            <div class="se_d">
              {{ $t('productworkUp.interface') }}
              <br />
              {{ $t('productworkUp.operation') }}
              <br />
              {{ $t('productworkUp.simple') }}
            </div>
          </div>
          <div class="se_right">
            <img class="seImg" src="@/assets/img/productworkUp/se_ds.png" alt="" />
            <div class="se_t">
              {{ $t('productworkUp.Dsecurity') }}
              <br />
              &nbsp;
            </div>
            <div class="se_d">
              {{ $t('productworkUp.Desensitized') }}
              <br />
              {{ $t('productworkUp.storage') }}
              <br />
              {{ $t('productworkUp.information') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    applicable-->
    <div class="kunpeng applicable">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.applicable') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.Secure') }}
          </div>
        </div>
      </div>
      <img class="appImg" src="@/assets/img/productworkUp/app.png" alt="" />
    </div>
    <!--    enjoy-->
    <div class="kunpeng enjoy h565Inner">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.Enjoy') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.Office') }}
          </div>
        </div>
        <div class="kp_right">
          <img class="kp_right_img enjoyImg" src="@/assets/img/productworkUp/enjoy.png" alt="" />
        </div>
      </div>
    </div>
    <!--    Instant-->
    <div class="kunpeng Instant h565Inner">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.Instant') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.Single') }}
          </div>
        </div>
        <div class="kp_right">
          <img class="instantImg" src="@/assets/img/productworkUp/instantImg.png" alt="" />
        </div>
      </div>
    </div>
    <!--    offices-->
    <div class="kunpeng offices h565Inner">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.Multiple') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.realize') }}
          </div>
        </div>
        <div class="kp_right">
          <img class="officesImg" src="@/assets/img/productworkUp/offices.png" alt="" />
        </div>
      </div>
    </div>
    <!--    voice-->
    <div class="kunpeng voice h565Inner">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.Voice') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.Easily') }}
          </div>
        </div>
        <div class="kp_right">
          <img class="voiceImg" src="@/assets/img/productworkUp/voice.png" alt="" />
        </div>
      </div>
    </div>
    <!--   short -->
    <div class="kunpeng short h565Inner">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.Short') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.methods') }}
          </div>
        </div>
        <div class="kp_right">
          <img class="shortImg" src="@/assets/img/productworkUp/short.png" alt="" />
        </div>
      </div>
    </div>
    <!--  cloudClass  -->
    <div class="kunpeng cloudClass h565Inner">
      <div class="kp_inner flexRowAC">
        <div class="kp_left">
          <div class="kp_t">
            {{ $t('productworkUp.Cloud') }}
          </div>
          <div class="kp_d">
            {{ $t('productworkUp.professional') }}
          </div>
        </div>
        <div class="kp_right">
          <img class="cloudClassImg" src="@/assets/img/productworkUp/cloudClass.png" alt="" />
        </div>
      </div>
    </div>
    <div class="functionality">
      <div class="functionality_t">
        {{ $t('productworkUp.functionality') }}
      </div>
      <div class="flexRowAC functionalityBox">
        <div v-for="(item,i) in functionality" :key="i" class="fnItem">
          <img class="fnItemImg" :src="item.img" alt="" />
          <div class="fnItemT">
            {{ item.title }}
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
import f_m from '@/assets/img/productworkUp/f_m.png'
import f_gm from '@/assets/img/productworkUp/f_gm.png'
import f_g from '@/assets/img/productworkUp/f_g.png'
import f_ar from '@/assets/img/productworkUp/f_ar.png'
import f_ac from '@/assets/img/productworkUp/f_ac.png'
import f_vc from '@/assets/img/productworkUp/f_vc.svg'
import f_nc from '@/assets/img/productworkUp/f_nc.png'
import f_cc from '@/assets/img/productworkUp/f_cc.png'
import f_mail from '@/assets/img/productworkUp/f_mail.png'
import f_mf from '@/assets/img/productworkUp/f_mf.png'
import f_ds from '@/assets/img/productworkUp/f_ds.png'
import f_app from '@/assets/img/productworkUp/f_app.png'
import f_sa from '@/assets/img/productworkUp/f_sa.png'
import f_pf from '@/assets/img/productworkUp/f_pf.png'

let functionality = computed(() => {
  return [
    { img: f_m, title: t('productworkUp.Message') },
    { img: f_gm, title: t('productworkUp.Group') },
    { img: f_g, title: t('productworkUp.Group1') },
    { img: f_ar, title: t('productworkUp.Address') },
    { img: f_ac, title: t('productworkUp.Audio') },
    { img: f_m, title: t('productworkUp.TikTok') },
    { img: f_cc, title: t('productworkUp.Cloud') },
    { img: f_mf, title: t('productworkUp.file') },
    { img: f_vc, title: t('productworkUp.Video') },
    { img: f_nc, title: t('productworkUp.News') },
    { img: f_mail, title: t('productworkUp.mail') },
    { img: f_ds, title: t('productworkUp.Dynamic') },
    { img: f_app, title: t('productworkUp.Store') },
    { img: f_sa, title: t('productworkUp.feedback') },
    { img: f_pf, title: t('productworkUp.Message') }
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
.work_page {
}
.kunpeng.kunpengBg{
  background-size: 100% 100%;
  background-image: url('@/assets/img/productworkUp/kunpengBg.png');
}
.wp_all {
  height: 626px;
  background-image: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.60) 65%, rgba(218, 233, 255, 0.27) 100%);
  position: relative;

  .wp_all_flex {
    width: 1200px;
    margin: auto;
    justify-content: space-between;
    height: 100%;
  }

  .wp_all_top {
    width: 560px;
  }

  .wp_all_t {
    font-style: italic;
    font-size: 40px;
    color: #1B396C;
    font-weight: 400;
    padding-bottom: 8px;
  }

  .wp_all_topImg {
    width: 123px;
    height: 16px;
    background-size: cover;
  }

  .wp_all_d {
    padding-top: 52px;
    font-size: 14px;
    color: #717781;
    font-weight: 400;
  }

  .wp_all_img {
    width: 528px;
    height: 540px;
    background-size: cover;
    position: absolute;
    right: 150px;
    top: 44px;
  }
}

.kunpeng {
  background: #FFFFFF;

  .kp_inner {
    margin: auto;
    width: 1200px;
    height: 430px;
  }

  .kp_t {
    padding-bottom: 60px;
    font-size: 32px;
    color: #051261;
    font-weight: bold;
  }

  .kp_d {
    width: 560px;
    font-size: 14px;
    color: #717781;
    letter-spacing: 0;
    line-height: 22px;
    font-weight: 400;
  }

  .kp_right {
    padding-left: 213px;
    text-align: center;
  }

  .kp_right_img {
    margin-bottom: 20px;
    width: 140px;
    height: 140px;
    background-size: cover;
  }

  .kpR_t {
    font-size: 24px;
    line-height: 24px;
    color: #051261;
    text-align: center;
    font-weight: 500;
  }
}

/*cloud*/
.kunpeng.cloud {
  background: #FCFCFC;

  .kp_inner {
    justify-content: space-between;
  }

  .cloudRight {
    align-items: flex-start;
  }

  .c_right {
    text-align: center;

    &.pl45 {
      padding-left: 45px;
    }
  }

  .kp_right_img {
    margin-bottom: 24px;
  }
}

/*rich*/
.kunpeng.rich {
  background: #FDFEFF;
  position: relative;

  .kp_right {
    padding-left: 20px;

    &.pl14 {
      padding-left: 14px;
    }
  }

  .richRight {
    position: absolute;
    right: 150px;
    top: 76px;
    align-items: end;

    > img {
      background-size: cover;
    }
  }

  .rich_pcImg {
    width: 178px;
    height: 126px;
  }

  .rich_mobImg {
    width: 79px;
    height: 149px;
  }

  .rich_hwImg {
    width: 118px;
    height: 148px;
  }

  .rich_ipadImg {
    width: 151px;
    height: 100px;
  }

  .kpR_t {
    padding-top: 20px;
  }
}

/*secure*/
.secure.kunpeng {
  background: #FCFCFC;
  position: relative;

  .secureRight {
    gap: 16px;
    position: absolute;
    right: 300px;
    top: 100px;
  }

  .se_right {
    text-align: center;

    &:first-child {
      width: 280px;
    }
  }

  .seImg {
    width: 96px;
    height: 96px;
    background-size: cover;
    margin-bottom: 16px;
  }

  .se_t {
    font-family: SourceHanSansCN-Medium;
    font-size: 20px;
    color: #051261;
    text-align: center;
    font-weight: 500;
    line-height: 20px;
  }

  .se_d {
    padding-top: 6px;
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    color: #717781;
    text-align: center;
    line-height: 22px;
    font-weight: 400;
  }
}

.applicable {
  height: 470px;
  position: relative;

  .appImg {
    position: absolute;
    right: 360px;
    bottom: 0px;
    width: 500px;
    height: 407px;
    background-size: cover;
  }
}

.enjoy {
  background: #FCFCFC;

  .enjoyImg {
    width: 480px;
    height: 407px;
    background-size: cover;
  }
}

.h565Inner {
  height: 565px;

  .kp_inner {
    height: 100%;
    justify-content: space-between;
  }
}

.Instant {
  .instantImg {
    width: 480px;
    height: 435px;
    background-size: cover;
  }
}

.offices {
  background: #FCFCFC;

  .officesImg {
    width: 480px;
    height: 407px;
    background-size: cover;
  }
}

.functionality {
  padding: 90px 0 80px;

  &_t {
    padding-bottom: 80px;
    font-size: 46px;
    color: #051261;
    text-align: center;
    font-weight: 700;
  }

  .functionalityBox {
    align-items: flex-start;
    width: 1200px;
    margin: auto;
    flex-wrap: wrap;
    gap: 20px;
  }

  .fnItem {
    width: 102px;
    text-align: center;
  }

  .fnItemImg {
    width: 86px;
    height: 86px;
    background-size: cover;
    margin-bottom: 12px;
  }

  .fnItemT {
    font-size: 16px;
    color: #757B84;
    text-align: center;
    font-weight: 400;
  }
}

.voice {
  .voiceImg {
    width: 480px;
    height: 462px;
    background-size: cover;
  }
}

/*short*/
.short {
  background: #FCFCFC;

  .shortImg {
    width: 480px;
    height: 462px;
    background-size: cover;
  }
}

.cloudClass {
  .cloudClassImg {
    width: 480px;
    height: 462px;
    background-size: cover;
  }
}
</style>
