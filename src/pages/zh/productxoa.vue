<template>
  <div class="page_container">
    <div class="digi_out">
      <div class="digi">
        {{ $t('productxoa.New') }}
        <br />
        {{ $t('productxoa.DigitalO') }}
      </div>
    </div>
    <!--  basic  -->
    <div class="basic">
      <div class="basic_title">
        <div class="basic_title_box" alt="" />
        {{ $t('productxoa.Basic') }}
      </div>
      <div class="basicBox flexRowAC">
        <div v-for="(item,i) in BasicList" :key="i" class="basicBox_item">
          <div class="basicBox_item_t flexRowAC">
            <img class="basicBox_item_t_img" :src="item.img" alt="" />
            {{ item.title }}
          </div>
          <div class="basicBox_item_d">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
    <!--  Process  -->
    <div class="basic Process">
      <div class="basic_title">
        <div class="basic_title_box" alt="" />
        {{ $t('productxoa.Process') }}
      </div>
      <div class="Process_desc">
        {{ $t('productxoa.Efficient') }}
      </div>
      <div class="Process_desc1">
        {{ $t('productxoa.businesses') }}
      </div>
      <div class="proBox flexRowAC">
        <div v-for="(item,i) in processList" :key="i" class="proBox_item">
          <img class="proBox_item_t_img" :src="item.img" alt="" />
        </div>
      </div>
      <div class="proBox flexRowAC proBg">
        <div v-for="(item,i) in processList" :key="i" class="proBox_item">
          <div class="basicBox_item_t">
            {{ item.title }}
          </div>
          <div class="basicBox_item_line" />
          <div class="proBox_item_d">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
    <!-- app   -->
    <div class="basic Process plat">
      <div class="basic_title">
        <div class="basic_title_box" alt="" />
        {{ $t('productxoa.Application') }}
      </div>
      <div class="Process_desc">
        {{ $t('productxoa.Lplatform') }}
      </div>
      <div class="Process_desc1">
        {{ $t('productxoa.Everyone') }}
      </div>
      <div class="flexRowAC">
        <div class="platBox flexRowAC">
          <div class="cover_out">
            <div class="coverTitle">
              {{ $t('productxoa.CoverL') }}
            </div>
            <div class="coverBox flexRowAC">
              <div v-for="(item,i) in platList" :key="i" class="cover flexRowAC">
                <img class="cover_img" :src="item.img" alt="" />
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="platBox flexRowAC">
          <div class="cover_out">
            <div class="coverTitle">
              {{ $t('productxoa.Widely') }}
            </div>
            <div class="coverBox cover1Box flexRowAC">
              <div v-for="(item,i) in platList1" :key="i" class="cover">
                <div class="cover_t pb6">
                  {{ item.title }}
                </div>
                <div class="cover_t">
                  {{ item.t2 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- report   -->
    <div class="basic Process plat">
      <div class="basic_title">
        <div class="basic_title_box" alt="" />
        {{ $t('productxoa.Report') }}
      </div>
      <div class="Process_desc">
        {{ $t('productxoa.Professional') }}
      </div>
      <div class="Process_desc1">
        {{ $t('productxoa.ProvideLeader') }}
      </div>
      <div style="text-align: center;">
        <img class="mobileImg" src="@/assets/img/productxoa/report.png" alt="" />
      </div>
    </div>
    <!--  Instant  -->
    <div class="basic Process">
      <div class="basic_title">
        <div class="basic_title_box" alt="" />
        {{ $t('productxoa.Instant') }}
      </div>
      <div class="InstantBox flexRowAC">
        <div v-for="(item,i) in instantList" :key="i" class="InstantBoxItem flexRowAC">
          <img class="InstantBoxItemImg" :src="item.img" alt="" />
          {{ item.t }}
        </div>
      </div>
    </div>
    <!--    Mobile-->
    <div class="basic Process">
      <div class="basic_title">
        <div class="basic_title_box" alt="" />
        {{ $t('productxoa.MobileO') }}
      </div>
      <div class="Process_desc">
        {{ $t('productxoa.everywhere') }}
      </div>
      <div class="Process_desc1">
        {{ $t('productxoa.messageWork') }}
      </div>
      <div style="text-align: center;">
        <img class="mobileImg" src="@/assets/img/productxoa/mobile.png" alt="" />
      </div>
    </div>
    <!-- docu   -->
    <div class="basic Process">
      <div class="basic_title">
        <div class="basic_title_box" alt="" />
        {{ $t('productxoa.Document') }}
      </div>
      <div class="Process_desc">
        {{ $t('productxoa.DocumentEa') }}
      </div>
      <div class="Process_desc1">
        {{ $t('productxoa.Organization') }}
      </div>
      <div class="docuListBox flexRowAC">
        <div
          v-for="(item,i) in docuList"
          :key="i"
          class="docuListBoxItem"
          :style="{backgroundImage:'url('+item.img+')'}"
        >
          <div class="docuListBoxItemT">
            {{ item.t }}
          </div>
          <ul class="docuChildBox flexRowAC">
            <li v-for="(child, index) in item.arr" :key="index" class="docuChildBoxLi flexRowAC">
              <div class="docuDot" />
              <div> {{ child.dt }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- super   -->
    <div class="basic Process">
      <div class="basic_title">
        <div class="basic_title_box" alt="" />
        {{ $t('productxoa.Supervision') }}
      </div>
      <div class="Process_desc">
        {{ $t('productxoa.EnsureGove') }}
      </div>
      <div class="Process_desc1">
        {{ $t('productxoa.planningEx') }}
      </div>
      <div style="text-align: center;">
        <img class="superImg" src="@/assets/img/productxoa/super.png" alt="" />
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
import basic1 from '@/assets/img/productxoa/basic1.png'
import basic2 from '@/assets/img/productxoa/basic2.png'
import basic3 from '@/assets/img/productxoa/basic3.png'
import basic4 from '@/assets/img/productxoa/basic4.png'
import basic5 from '@/assets/img/productxoa/basic5.png'
import basic6 from '@/assets/img/productxoa/basic6.png'
import basic7 from '@/assets/img/productxoa/basic7.png'
import basic8 from '@/assets/img/productxoa/basic8.png'
import pro1 from '@/assets/img/productxoa/pro1.png'
import pro2 from '@/assets/img/productxoa/pro2.png'
import pro3 from '@/assets/img/productxoa/pro3.png'
import pro4 from '@/assets/img/productxoa/pro4.png'
import pro5 from '@/assets/img/productxoa/pro5.png'
import plat1 from '@/assets/img/productxoa/plat1.png'
import plat2 from '@/assets/img/productxoa/plat2.png'
import plat3 from '@/assets/img/productxoa/plat3.png'
import plat4 from '@/assets/img/productxoa/plat4.png'
import plat5 from '@/assets/img/productxoa/plat5.png'
import plat6 from '@/assets/img/productxoa/plat6.png'
import plat7 from '@/assets/img/productxoa/plat7.png'
import plat8 from '@/assets/img/productxoa/plat8.png'
import nums_01 from '@/assets/img/productxoa/01.png'
import nums_02 from '@/assets/img/productxoa/02.png'
import nums_03 from '@/assets/img/productxoa/03.png'
import nums_04 from '@/assets/img/productxoa/04.png'
import nums_05 from '@/assets/img/productxoa/05.png'
import nums_06 from '@/assets/img/productxoa/06.png'
import nums_07 from '@/assets/img/productxoa/07.png'
import nums_08 from '@/assets/img/productxoa/08.png'
import nums_09 from '@/assets/img/productxoa/09.png'
import nums_10 from '@/assets/img/productxoa/10.png'
import docu1 from '@/assets/img/productxoa/docu1.png'
import docu2 from '@/assets/img/productxoa/docu2.png'
import docu3 from '@/assets/img/productxoa/docu3.png'
import docu4 from '@/assets/img/productxoa/docu4.png'

let BasicList = computed(() => {
  return [
    {
      img: basic1,
      title: t('productxoa.Unified'),
      desc: t('productxoa.SupportEff')
    },
    {
      img: basic2,
      title: t('productxoa.mail'),
      desc: t('productxoa.UnifiedEx')
    },
    {
      img: basic3,
      title: t('productxoa.notice'),
      desc: t('productxoa.Enterprise')
    },
    {
      img: basic4,
      title: t('productxoa.Clock'),
      desc: t('productxoa.Different')
    },
    {
      img: basic5,
      title: t('productxoa.Administrative'),
      desc: t('productxoa.PerfectEff')
    },
    {
      img: basic6,
      title: t('productxoa.collaboration'),
      desc: t('productxoa.Effectively')
    },
    {
      img: basic7,
      title: t('productxoa.security'),
      desc: t('productxoa.architecture')
    },
    {
      img: basic8,
      title: t('productxoa.Zero'),
      desc: t('productxoa.underlying')
    }
  ]
})
let processList = computed(() => {
  return [
    {
      img: pro1,
      title: t('productxoa.design'),
      desc: t('productxoa.persistence')
    },
    {
      img: pro2,
      title: t('productxoa.ProcessDE'),
      desc: t('productxoa.Flexible')
    },
    {
      img: pro3,
      title: t('productxoa.Authority'),
      desc: t('productxoa.Careful')
    },
    {
      img: pro4,
      title: t('productxoa.report'),
      desc: t('productxoa.productive')
    },
    {
      img: pro5,
      title: t('productxoa.engine'),
      desc: t('productxoa.capabilities')
    }
  ]
})
let platList = computed(() => {
  return [
    { img: plat1, title: t('productxoa.Manufacturing') },
    { img: plat2, title: t('productxoa.Engineering') },
    { img: plat3, title: t('productxoa.commerce') },
    { img: plat4, title: t('productxoa.estate') },
    { img: plat5, title: t('productxoa.agency') },
    { img: plat6, title: t('productxoa.retail') },
    { img: plat7, title: t('productxoa.service') },
    { img: plat8, title: t('productxoa.Internet') }
  ]
})
let platList1 = computed(() => {
  return [
    { title: t('productxoa.Administration'), t2: t('productxoa.estatemanagement') },
    { title: t('productxoa.HR'), t2: t('productxoa.system') },
    { title: t('productxoa.Finance'), t2: t('productxoa.Cost') },
    { title: t('productxoa.Sell'), t2: t('productxoa.CRM') },
    { title: t('productxoa.Production'), t2: t('productxoa.saves') },
    { title: t('productxoa.Operate'), t2: t('productxoa.Order') }
  ]
})
let instantList = computed(() => {
  return [
    { img: nums_01, t: t('productxoa.Mac') },
    { img: nums_02, t: t('productxoa.integrated') },
    { img: nums_03, t: t('productxoa.receipt') },
    { img: nums_04, t: t('productxoa.logging') },
    { img: nums_05, t: t('productxoa.Achieve') },
    { img: nums_06, t: t('productxoa.alerts') },
    { img: nums_07, t: t('productxoa.Multiple') },
    { img: nums_08, t: t('productxoa.groups') },
    { img: nums_09, t: t('productxoa.Intranet') },
    { img: nums_10, t: t('productxoa.communication') }
  ]
})
let docuList = computed(() => {
  return [
    {
      img: docu1, t: t('productxoa.doMana'), arr: [
        { dt: t('productxoa.draft') },
        { dt: t('productxoa.Reference') },
        { dt: t('productxoa.Nuclear') },
        { dt: t('productxoa.Official') },
        { dt: t('productxoa.Countersign') },
        { dt: t('productxoa.Signature') },
        { dt: t('productxoa.Review') },
        { dt: t('productxoa.distribute') },
        { dt: t('productxoa.Sign') },
        { dt: t('productxoa.Distribute') }

      ]
    },
    {
      img: docu2, t: t('productxoa.Receipt'), arr: [
        { dt: t('productxoa.SignF') },
        { dt: t('productxoa.inquiry') },
        { dt: t('productxoa.Plan') },
        { dt: t('productxoa.title') },
        { dt: t('productxoa.registration') },
        { dt: t('productxoa.advice') },
        { dt: t('productxoa.instruction') },
        { dt: t('productxoa.signature') },
        { dt: t('productxoa.feedback') },
        { dt: t('productxoa.official') }
      ]
    },
    {
      img: docu3, t: t('productxoa.Query'), arr: [
        { dt: t('productxoa.rejection') },
        { dt: t('productxoa.Circulation') },
        { dt: t('productxoa.officialD') },
        { dt: t('productxoa.collection') },
        { dt: t('productxoa.DoInquiry') },
        { dt: t('productxoa.Signing') },
        { dt: t('productxoa.documents') },
        { dt: t('productxoa.Graphic') },
        { dt: t('productxoa.read') },
        { dt: t('productxoa.Recycle') }
      ]
    },
    {
      img: docu4, t: t('productxoa.Foundation'), arr: [
        { dt: t('productxoa.paper') },
        { dt: t('productxoa.ProcessEn') },
        { dt: t('productxoa.NumberMana') },
        { dt: t('productxoa.Electronic') },
        { dt: t('productxoa.countersignature') },
        { dt: t('productxoa.AuthorityMana') },
        { dt: t('productxoa.exchange') },
        { dt: t('productxoa.OfficialDo') },
        { dt: t('productxoa.traces') },
        { dt: t('productxoa.office') }
      ]
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
.page_container {
  background-color: #fff;
}

.digi_out {
  height: 375px;
  background-size: cover;
  background-image: url("@/assets/img/productxoa/banner.png");
}

.digi {
  padding-top: 58px;
  text-align: center;
  font-size: 50px;
  color: #051261;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
}

.basic {
  width: 1200px;
  margin: auto;

  .basic_title_box {
    width: 34px;
    height: 34px;
    position: absolute;
    left: -14px;
    top: 70px;
    background-size: cover;
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.00) 0%, rgba(63, 112, 255, 0.21) 100%);
  }

  .basic_title {
    position: relative;
    padding-top: 80px;
    padding-bottom: 20px;
    font-size: 28px;
    color: #051261;
    font-weight: 700;
  }

  .basicBox {
    gap: 16px;
    flex-wrap: wrap;
  }

  .basicBox_item {
    padding: 24px;
    flex-shrink: 0;
    width: 288px;
    height: 260px;
    background: #FFFFFF;
    box-shadow: 0px 0px 12px 0px rgba(14, 46, 140, 0.08);
    border-radius: 4px;
  }

  .basicBox_item_t {
    font-size: 16px;
    color: #051261;
    font-weight: 700;
    padding-bottom: 20px;
  }

  .basicBox_item_t_img {
    width: 24px;
    height: 24px;
    background-size: cover;
    margin-right: 8px;
  }

  .basicBox_item_d {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #7A8BA6;
    letter-spacing: 0;
    line-height: 26px;
    font-weight: 400;
  }
}

.Process {
  .Process_desc {
    padding-top: 20px;
    font-size: 18px;
    color: #3F72FF;
    font-weight: 400;
    padding-bottom: 8px;
  }

  .Process_desc1 {
    width: 950px;
    padding-bottom: 60px;
    font-size: 14px;
    color: #7A8BA6;
    font-weight: 400;
  }

  .proBox_item {
    text-align: center;
    width: 240px;
    padding-bottom: 8px;
  }

  .proBg {
    align-items: flex-start;
    background-size: cover;
    padding: 40px 40px 0;
    gap: 80px;
    background-image: url("@/assets/img/productxoa/proBg.png");

    .proBox_item {
      text-align: left;
    }

    .basicBox_item_t {
      font-size: 16px;
      color: #3F72FF;
      font-weight: 600;
    }

    .basicBox_item_line {
      width: 24px;
      height: 1.2px;
      background-color: #3F72FF;
    }

    .proBox_item_d {
      padding-top: 10px;
      font-size: 14px;
      color: #7A8BA6;
      font-weight: 400;
    }
  }

  .proBox_item_t_img {
    width: 108px;
    height: 128px;
    background-size: cover;
  }
}

/*InstantBox*/
.InstantBox {
  padding-top: 40px;
  gap: 16px;
  flex-wrap: wrap;

  .InstantBoxItemImg {
    width: 30px;
    height: 30px;
    background-size: cover;
    margin-right: 10px;
  }

  .InstantBoxItem {
    font-size: 16px;
    color: #051261;
    font-weight: 400;
    padding: 11px 16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 12px 0px rgba(14, 46, 140, 0.08);
    border-radius: 4px;
  }
}

/*docu*/
.docuListBox {
  gap: 16px;

  .docuListBoxItem {
    width: 288px;
    height: 416px;
    background-size: 100% 100%;
  }

  .docuListBoxItemT {
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 400;
  }

  .docuChildBox {
    padding: 46px 16px 0;
    flex-wrap: wrap;
    gap: 16px;
    align-items: flex-start;
  }

  .docuChildBoxLi {
    align-items: flex-start;
    font-size: 16px;
    line-height: 16px;
    color: #051261;
    font-weight: 400;
    width: calc(50% - 8px);
  }

  .docuDot {
    width: 4px;
    height: 4px;
    margin: 8px;
    border-radius: 50%;
    background-color: #3174E0;
  }
}

.plat.Process.basic {
  .cover_out {
    width: 500px;
    height: 395px;
    box-shadow: 0px 0px 12px 0px rgba(14, 46, 140, 0.06);
    border-radius: 4px;
    padding: 24px 60px;
    margin-left: 68px;
  }

  .coverTitle {
    padding-left: 16px;
    margin-bottom: 34px;
    position: relative;
    left: -88px;
    width: 300px;
    height: 45px;
    line-height: 45px;
    background-image: linear-gradient(270deg, rgba(115, 171, 255, 0.00) 0%, #3F72FF 100%);
    border-radius: 4px;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 400;
  }

  .coverBox {
    gap: 40px;
    flex-wrap: wrap;
  }

  .cover1Box {
    justify-content: center;

    .cover {
      text-align: center;
      padding: 8px 15px;
      height: 64px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .cover_t {
      font-size: 14px;
      color: #FFFFFF;
      text-align: center;
      line-height: 14px;
      font-weight: 400;
    }

    .pb6 {
      padding-bottom: 6px;
    }
  }

  .cover {
    margin-bottom: -20px;
    padding-left: 24px;
    font-size: 14px;
    color: #FFFFFF;
    width: 170px;
    height: 48px;
    background-color: #3F72FF;
    border-radius: 2px;

    .cover_img {
      width: 24px;
      height: 24px;
      background-size: cover;
      margin-right: 12px;
    }
  }
}

.mobileImg {
  width: 680px;
  height: 440px;
  margin: 0 auto;
  background-size: 100% 100%;
}

.superImg {
  width: 1160px;
  height: 425px;
  margin: 0 auto 112px;
  background-size: 100% 100%;
}
</style>
