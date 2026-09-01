<template>
  <div class="home_page vls">
    <div class="platTop">
      <div class="plat">
        视觉赋能平台，AI驱动智慧新视界！
      </div>
      <div class="VLStream">
        欢迎使用 VLStream
        <img class="VLStream_img" src="@/assets/VLimg2.0/openS.png" alt="" />
      </div>
      <div class="plat_a">
        决策式AI视频汇聚调度平台
      </div>
      <div class="plat_cent">
        以视频云中台为核心，整合全域视频资源，赋能城市智能化治理与精细化管理。
      </div>
      <div class="flexRowAC useBox">
        <div class="seeMore">
          立即使用
        </div>
        <div class="seeMore u1">
          安排演示
        </div>
        <div class="seeMore u2 flexRowAC">
          <img class="u2_img" src="@/assets/VLimg2.0/GitHub.png" alt="" />
          <a class="b_ser_text hover" href="https://github.com/OortCloudGroup" style="color:#fff;" target="_blank">
            GitHub
          </a>
        </div>
      </div>
      <div class="plat_cent" style="padding-bottom: 0;">
        完全开源:奥尔特云VLStream100%全开源,包括核心流媒体服务务、VLS私有协议、AI分析、调度引擎
      </div>
      <div class="plat_cent" style="padding-bottom: 0;">
        热门仓库:VLStream-NVR、VLStream-Cloud、VLStream-CMS、VLStream-APP、VLStream-IPCamera
      </div>
      <div class="plat_cent">
        下载地址:<a href="https://github.com/OortCloudGroup" target="_blank">
          https://github.com/OortCloudGroup
        </a>
      </div>
    </div>

    <!-- 添加的Tab导航 -->
    <div class="tabSwitch">
      <div class="tabItem" @click="scrollToSection('section0')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section0'}">WebRTC</span>
        <span class="line" :class="{activeLine:activeSection==='section0'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section1')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section1'}">判别式 AI</span>
        <span class="line" :class="{activeLine:activeSection==='section1'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section2')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section2'}">决策式 AI</span>
        <span class="line" :class="{activeLine:activeSection==='section2'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section3')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section3'}">算力调度</span>
        <span class="line" :class="{activeLine:activeSection==='section3'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section4')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section4'}">IoT</span>
        <span class="line" :class="{activeLine:activeSection==='section4'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section5')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section5'}">多租户运营</span>
        <span class="line" :class="{activeLine:activeSection==='section5'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section6')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section6'}">算法训练</span>
        <span class="line" :class="{activeLine:activeSection==='section6'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section7')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section7'}">解决方案</span>
        <span class="line" :class="{activeLine:activeSection==='section7'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section8')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section8'}">硬件产品</span>
        <span class="line" :class="{activeLine:activeSection==='section8'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section9')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section9'}">部署实例</span>
        <span class="line" :class="{activeLine:activeSection==='section9'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section10')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section10'}">Docs</span>
        <span class="line" :class="{activeLine:activeSection==='section10'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section11')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section11'}">UI/UE</span>
        <span class="line" :class="{activeLine:activeSection==='section11'}" />
      </div>
      <div class="tabItem" @click="scrollToSection('section12')">
        <span class="tabTitle" :class="{activeTitle:activeSection==='section12'}">APP</span>
        <span class="line" :class="{activeLine:activeSection==='section12'}" />
      </div>
    </div>

    <div class="w1380 flexRowAC WebRTCOut">
      <div class="flexRowAC WebRTC">
        <img class="webItem" src="@/assets/VLimg2.0/rtc1.png" alt="" />
        <img class="webItem" src="@/assets/VLimg2.0/rtc2.png" alt="" />
        <img class="webItem" src="@/assets/VLimg2.0/rtc3.png" alt="" />
        <img class="webItem" src="@/assets/VLimg2.0/rtc4.png" alt="" />
      </div>
      <div class="flexRowAC WebRTC">
        <img class="webItem" src="@/assets/VLimg2.0/rtc5.png" alt="" />
        <img class="webItem" src="@/assets/VLimg2.0/rtc6.png" alt="" />
        <img class="webItem" src="@/assets/VLimg2.0/rtc7.png" alt="" />
      </div>
    </div>
    <div class="w1380 webBottomImg">
      <video class="wBImg" src="/download/演示视频.mp4" autoplay muted loop />
    </div>

    <!-- 为每个区块添加id和ref -->
    <div id="section0" ref="section0" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="orange-title">
          低延迟、高并发的实时视频传输引擎
        </div>
        <div class="cl_t">
          P2P WebRTC
        </div>
        <div class="cl_d">
          基于 WebRTC 实现 P2P 点对点传输，大幅降低服务器带宽压力，保障跨终端、跨网络的视频流毫秒级互通，满足应急指挥、移动巡检、主动安全等实时性要求极高的场景。
        </div>
      </div>
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/webrtc.png" alt="" />
      </div>
    </div>
    <div id="section1" ref="section1" class="w1380 CloudBox ipcBox flexRowAC">
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/pbs.png" alt="" />
      </div>
      <div class="CloudL">
        <div class="orange-title">
          视频内容的精准感知与识别能力
        </div>
        <div class="cl_t">
          判别式 AI
        </div>
        <div class="cl_d">
          对视频流进行目标检测、行为分析、特征提取，快速识别人员、车辆、异常事件等关键信息，输出结构化数据，为上层决策提供可靠依据。
        </div>
      </div>
    </div>
    <div id="section2" ref="section2" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="orange-title">
          智能研判与自动调度的核心大脑
        </div>
        <div class="cl_t">
          决策式 AI
        </div>
        <div class="cl_d">
          基于判别式 AI 输出的结构化数据，结合业务规则与场景模型，从而进行事件等级判定、趋势预测、资源匹配，自动生成最优调度方案，实现从 “感知” 到 “决策” 的闭环。
        </div>
      </div>
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/jcs.png" alt="" />
      </div>
    </div>
    <div id="section3" ref="section3" class="w1380 CloudBox ipcBox flexRowAC">
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/sldd.png" alt="" />
      </div>
      <div class="CloudL">
        <div class="orange-title">
          云边端协同的算力资源优化配置
        </div>
        <div class="cl_t">
          算力调度
        </div>
        <div class="cl_d">
          云边端协同的算力资源优化配置。统一管理云端、边缘节点算力，根据 AI 分析任务优先级、实时负载与网络状况，动态分配算力资源，保障高并发、高算力需求场景下的高效稳定运行。
        </div>
      </div>
    </div>
    <div id="section4" ref="section4" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="orange-title">
          全域感知设备的统一接入与管控
        </div>
        <div class="cl_t">
          物模型物联网 IoT
        </div>
        <div class="cl_d">
          通过标准化物模型，兼容各类摄像头、传感器、智能终端，实现设备状态监控、远程控制、数据采集，打通视频流与物联网感知数据的融合通道。
        </div>
      </div>
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/lot.png" alt="" />
      </div>
    </div>
    <div id="section5" ref="section5" class="w1380 CloudBox ipcBox flexRowAC">
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/yynl.png" alt="" />
      </div>
      <div class="CloudL">
        <div class="orange-title">
          安全隔离、按需分配的平台化服务
        </div>
        <div class="cl_t">
          多租户运营能力
        </div>
        <div class="cl_d">
          支持多部门、多单位独立入驻与资源隔离，提供租户专属视图、权限管理、数据隔离与计费计量，实现平台集约化建设与市场化运营。
        </div>
      </div>
    </div>
    <div id="section6" ref="section6" class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="orange-title">
          灵活适配、快速迭代的算法服务体系
        </div>
        <div class="cl_t">
          算法按需训练按需加载
        </div>
        <div class="cl_d">
          支持针对特定场景的算法模型定制训练，通过容器化、轻量化方式按需加载与动态部署，快速响应业务变化，持续提升 AI 分析的精准度与适用性。
        </div>
      </div>
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/axjz.png" alt="" />
      </div>
    </div>
    <div id="section7" ref="section7" class="w1380 CloudBox " style="text-align: center;">
      <div class="cl_t">
        VLStream 智能视觉物联全栈解决方案
      </div>
      <div class="cl_d">
        以云、边、端全链路技术为核心，打造从智能分析到设备管理的一体化视觉安防能力
      </div>
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          VLStream Cloud 云
        </div>
        <div class="cl_d">
          通过云计算与AI分析，实现从“人看监控”到“AI看监控”的转型，
          助力行业智能化升级。
        </div>
        <div class="see-more">
          下载地址: <a href="https://github.com/OortCloudGroup" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
        </div>
      </div>
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/CloudR1.png" alt="" />
      </div>
    </div>
    <div class="w1380 CloudBox ipcBox flexRowAC">
      <div class="CloudR CloudR2">
        <img class="CloudRImg CloudR2" src="@/assets/VLimg2.0/CloudR2.png" alt="" />
      </div>
      <div class="CloudL">
        <div class="cl_t">
          VLStream IPC 固件
        </div>
        <div class="cl_d">
          以多芯片适配和智能支持为核心，全面释放摄像机性能，助力打造高效可靠的视觉物联解决方案。
        </div>
        <div class="cl_d" style="color: #717781;">
          固件：HI3516DV300、RK3588、X86
        </div>
        <div class="see-more">
          下载地址: <a href="https://github.com/OortCloudGroup/VLStream-IPC-FW/tree/main/firmware" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
        </div>
      </div>
    </div>
    <div class="w1380 ipcView CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          VLStream IPC 管理界面
        </div>
        <div class="cl_d">
          管理界面以智能化、便捷化为核心，帮助用户快速构建可靠的
          摄像设备管理体系，为多场景业务需求提供全面支撑。
        </div>
        <!-- <router-link class="see-more" to="/zh/pc/">
          查看更多
        </router-link> -->
        <div class="see-more">
          下载地址: <a href="https://github.com/OortCloudGroup/VLStream-Cloud" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
        </div>
      </div>
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/CloudR3.png" alt="" />
      </div>
    </div>
    <div class="w1380 ipcView CloudBox flexRowAC">
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/CloudR4.png" alt="" />
      </div>
      <div class="CloudL">
        <div class="cl_t">
          VLStream NVR
        </div>
        <div class="cl_d">
          集成智能存储与视频管理功能，提供高效监控数据存储与分析解决方案，助力监控系统高效运营。
        </div>
        <div class="see-more">
          下载地址: <a href="https://github.com/OortCloudGroup/VLStream-NVR" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
        </div>
      </div>
    </div>
    <div class="w1380 CloudBox flexRowAC">
      <div class="CloudL">
        <div class="cl_t">
          VLStream CMS
        </div>
        <div class="cl_d">
          通过跨平台适配与集中监控，提供智能高效的多场景、多设备
          管理体验，助力企业构建安全高效的监控体系。
        </div>
        <div class="see-more">
          下载地址: <a href="https://github.com/OortCloudGroup/VLStream-CMS" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
        </div>
      </div>
      <div class="CloudR">
        <img class="CloudRImg" src="@/assets/VLimg2.0/CloudR5.png" alt="" />
      </div>
    </div>
    <div id="section8" ref="section8" class="productBox w1380">
      <div class="proT">
        OEM/ODM 硬件产品
      </div>
      <div class="prod">
        高性能、智能化与高兼容性，打造全面安全的视频监控解决方案，满足各行业需求。
      </div>
      <div class="productImg product1">
        <img class="proImg product1" src="@/assets/VLimg2.0/product1.png" alt="" />
      </div>
      <!-- <div class="seeMore">
        查看更多
      </div> -->
    </div>
    <div id="section9" ref="section9" class="productBox w1380">
      <div class="proT">
        场景化部署实例
      </div>
      <div class="prod" style="padding-bottom: 0;">
        结合AI与智能硬件，提供定制化解决方案，实现高效、安全的监控管理。
      </div>
      <div class="seeMore">
        下载地址: <a href="https://github.com/OortCloudGroup" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
      </div>
      <div class="productImg product2Out flexRowAC">
        <div class=" product2Item flexRowAC">
          <img class="proImg product2" src="@/assets/VLimg2.0/product2L.png" alt="" />
          <span>无感考勤打卡系统</span>
        </div>
        <div class=" product2Item p2 flexRowAC">
          <img class="proImg product2" src="@/assets/VLimg2.0/product2R.png" alt="" />
          <span>智慧仓库</span>
        </div>
      </div>
    </div>
    <div id="section10" ref="section10" class="productBox w1380">
      <div class="proT">
        VLStream Docs
      </div>
      <div class="prod" style="padding-bottom: 0;">
        平台集成多种硬件与先进技术，提供多样化视觉赋能解决方案。
      </div>
      <div class="seeMore">
        下载地址: <a href="https://github.com/OortCloudGroup/oort-docs" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
      </div>
      <div class="productImg product3Out">
        <div class="flexRowAC p3Box">
          <img class="proImg p3" src="@/assets/VLimg2.0/product3_1.png" alt="" />
          <img class="proImg p3" src="@/assets/VLimg2.0/product3_2.png" alt="" />
          <img class="proImg p3" src="@/assets/VLimg2.0/product3_3.png" alt="" />
        </div>
        <div class="p3_title">
          1、主关键词
        </div>
        <div class="ps_desc">
          多租户运营，物联IoT，视觉物联IoT
        </div>
        <div class="p3_title">
          2、固件适配的芯片型号
        </div>
        <div class="ps_desc">
          关于Linux操作系统的主控芯片：<br />
          海思：HI3516CV300，HI3516DV300， HI3519，HI3559,HI3518；<br />
          君正：T31，T41；<br />
          国科：GK7201V300，GK7202V300，GK7205V300；<br />
          SEGAMSTAR：SSD201,SSC335, SSC337<br />
          富瀚：8852V200，8852V201，8856V200，8656RK；<br />
          瑞芯微：RK1103，RK1106， RK1109，RK1126；<br />
          安凯：3918E；<br />
          联咏：NT98566，NT98562，NT98520，NT98525等系列芯片
        </div>
        <div class="ps_desc">
          RTOS 芯片支持：BK7258. ESP32，ASR1606
        </div>
        <div class="p3_title">
          3、涉及到的平台技术
        </div>
        <div class="p3_title">
          4、引用到的第三方的开源工程名称
        </div>
        <div class="p3_title">
          5、涉及到的第三方外设或技术TP2018网关，TBUNB
        </div>
      </div>
      <!-- <div class="seeMore">
        查看更多
      </div> -->
    </div>
    <div id="section11" ref="section11" class="productBox w1380">
      <div class="proT">
        VLStream UI/UE
      </div>
      <div class="prod" style="padding-bottom: 0;">
        精心打磨的设计与强大的功能融合，为用户提供全新交互体验，助力智能化管理更加便捷高效!
      </div>
      <div class="seeMore">
        下载地址: <a href="https://github.com/OortCloudGroup/VLStream-Ul-UE.git" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
      </div>
      <div class="productImg p4Out">
        <img class="proImg" src="@/assets/VLimg2.0/product4.png" alt="" />
      </div>
      <!-- <div class="seeMore">
        查看更多
      </div> -->
    </div>
    <div id="section12" ref="section12" class="productBox w1380">
      <div class="proT">
        VLStream APP
      </div>
      <div class="prod" style="padding-bottom: 0;">
        支持 iOS、Android 和 Harmony OS等平台，提供智能监控与设备管理，保障多场景安全与高效运行。
      </div>
      <div class="seeMore">
        下载地址: <a href="https://github.com/OortCloudGroup/VLStream-APP.git" target="_blank"><img src="@/assets/VLimg/github.png" alt="" /></a>
      </div>
      <div class="productImg p5Out flexRowAC">
        <div v-for="(item,i) in p5Arr" :key="i" class="p5Item flexRowAC">
          <img v-if="item.flag" class="proCode" src="@/assets/VLimg2.0/productCode.png" alt="" />
          <img class="p5Iimg" :src="item.img" alt="" />
          <span class="p5t">{{ item.t }}</span>
          <span class="p5d">{{ item.d }}</span>
          <div class="download" @click="downloadApp(item.url)">
            下载
          </div>
        </div>
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        成功案例
      </div>
      <div class="productImg p5Out flexRowAC">
        <div class="item img1">
          <div class="bottom">
            <p>城市风光</p>
          </div>
        </div>
        <div class="item img2">
          <div class="bottom">
            <p>专业服务</p>
          </div>
        </div>
        <div class="item img3">
          <div class="bottom">
            <p>教育机构</p>
          </div>
        </div>
        <div class="item img4">
          <div class="bottom">
            <p>精准分析</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import product5_1 from '@/assets/VLimg2.0/product5_1.png'
import product5_2 from '@/assets/VLimg2.0/product5_2.png'
import product5_3 from '@/assets/VLimg2.0/product5_3.png'
import product5_4 from '@/assets/VLimg2.0/product5_4.png'
import product5_5 from '@/assets/VLimg2.0/product5_5.png'
import product5_6 from '@/assets/VLimg2.0/product5_6.png'
import product5_7 from '@/assets/VLimg2.0/product5_7.png'

let p5Arr = ref([])
p5Arr.value = [
  { t: 'Windows', d: '版本号：V3.1.06', flag: false, img: product5_1, url: '/Windows' },
  { t: 'Android', d: '版本号：V3.1.06', flag: true, img: product5_2, url: '/Android' },
  { t: 'iOS', d: '版本号：V3.1.06', flag: true, img: product5_3, url: '/iOS' },
  { t: 'Harmony OS', d: '版本号：V3.1.06', flag: true, img: product5_4, url: '/Harmony%20OS' },
  { t: 'Linux', d: '版本号：V3.1.06', flag: false, img: product5_5, url: '/Linux' },
  { t: 'Mac OS', d: '版本号：V3.1.06', flag: false, img: product5_6, url: '/Mac%20OS' },
  { t: '银河麒麟', d: '版本号：V3.1.06', flag: false, img: product5_7, url: '/Kylin%20OS' }
]

// Tab相关逻辑
const activeSection = ref('section0')

// 定义所有section的ref引用
const section0 = ref(null) // WebRTC
const section1 = ref(null) // 判别式 AI
const section2 = ref(null) // 决策式 AI
const section3 = ref(null) // 算力调度
const section4 = ref(null) // IoT
const section5 = ref(null) // 多租户运营
const section6 = ref(null) // 算法训练
const section7 = ref(null) // 解决方案
const section8 = ref(null) // 硬件产品
const section9 = ref(null) // 部署实例
const section10 = ref(null) // Docs
const section11 = ref(null) // UI/UE
const section12 = ref(null) // APP

// 滚动到指定区域
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const viewportHeight = window.innerHeight
    const offset = viewportHeight * 0.15
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

// 监听滚动事件，更新激活的tab
const handleScroll = () => {
  const sections = [
    { id: 'section0', ref: section0 },
    { id: 'section1', ref: section1 },
    { id: 'section2', ref: section2 },
    { id: 'section3', ref: section3 },
    { id: 'section4', ref: section4 },
    { id: 'section5', ref: section5 },
    { id: 'section6', ref: section6 },
    { id: 'section7', ref: section7 },
    { id: 'section8', ref: section8 },
    { id: 'section9', ref: section9 },
    { id: 'section10', ref: section10 },
    { id: 'section11', ref: section11 },
    { id: 'section12', ref: section12 }
  ]
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = section.ref.value
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

const downloadApp = (url) => {
  window.open('https://github.com/OortCloudGroup/VLStream-APP/tree/master' + url, '_blank')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.home_page {
  position: relative;
}

.home_page.vls{
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

// 查看更多
.see-more{
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #FF5E10;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
  img{
    width: 50px;
    height: 50px;
  }
}
// .seeMore {
//   cursor: pointer;
//   display: inline-block;
//   padding: 24px 50px;
//   color: #fff;
//   border: 1px solid #FF5E10;
//   border-radius: 8px;
//   background: #FF5E10;
//   box-shadow: 0px 4px 10px 0px #FF5E1033;
//   font-weight: bold;
//   font-size: 18px;
// }
.seeMore {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #FF5E10;
  padding-bottom: 60px;
  padding-top: 20px;
  img{
    width: 50px;
    height: 50px;
  }
}

// Tab导航样式
.tabSwitch{
  position: sticky;
  top: 82px;
  z-index: 9;
  background-color: #fff;
  // padding: 10px 0;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-bottom: 0.5px solid #DFDFDF;
  margin-bottom: 80px;
  flex-wrap: wrap; // 适配小屏幕
  .tabItem{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tabTitle{
      color: #666666;
      font-size: 20px;
      letter-spacing: 1px;
      margin-bottom: 10px;
      transition: color 0.3s ease;
    }
    .line{
      width: 48px;
      height: 3px;
      background: transparent;
      transition: background-color 0.3s ease;
    }
    .activeTitle{
      color: #FF5E10;
      font-weight: 500;
    }
    .activeLine{
      background: #FF5E10;
    }
  }
}

.platTop {
  text-align: left;
  padding: 100px 240px;
  margin-bottom: 60px;
  background: url(@/assets/VLimg2.0/beijing.png);
  background-repeat: no-repeat;
  background-size: cover;

  .plat {
    display: inline-block;
    padding: 12px 24px;
    color: #FF5E10;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid #E9E9E9;
  }

  .VLStream {
    color: #333333;
    font-weight: bold;
    font-size: 78px;
    padding: 8px 0;
    position: relative;

    .VLStream_img {
      width: 222px;
      height: 222px;
      position: absolute;
      right: 566px;
      top: -50px;
    }
  }

  .plat_a {
    color: #333333;
    font-weight: bold;
    font-size: 58px;
  }

  .plat_cent {
    padding: 20px 0 50px;
    color: #717781;
    font-size: 18px;
  }

  .useBox {
    justify-content: flex-start;
    gap: 20px;

    .seeMore {
      padding: 24px 50px;
      color: #fff;
      border: 1px solid #FF5E10;
      border-radius: 8px;
      background: #FF5E10;
      box-shadow: 0px 4px 10px 0px #FF5E1033;
      font-weight: bold;
      font-size: 18px;
    }

    .u1 {
      color: #FF5E10;
      background-color: #fff;
    }

    .seeMore.u2 {
      display: flex;
      gap: 10px;
      border: 1px solid #333;
      background-color: #333;

      .u2_img {
        width: 28px;
        height: 26px;
      }
    }
  }
}

.WebRTCOut {
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
}

.WebRTC {
  gap: 24px;
  padding-bottom: 20px;
  //animation: scroll 35s linear infinite;
  .webItem {
    width: auto;
    height: 120px;
    border-radius: 16px;
    background: #E8F7FC;
    color: #5C6C00;
    gap: 14px;
    flex-wrap: nowrap;
  }
}

/*@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}*/

.webBottomImg {
  padding: 70px 0 110px;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
  }
}

.CloudBox {
  padding-bottom: 140px;
  justify-content: space-between;

  .cl_t {
    padding-bottom: 24px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 48px;
  }

  .cl_d {
    padding-bottom: 24px;
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    width: 540px;
  }

  .CloudR {
    width: 690px;
    height: 450px;

    .CloudRImg {
      width: 100%;
      height: 100%;
    }
  }

  .CloudR2 {
    width: 700px;
    height: 700px;
  }
}

.ipcBox.CloudBox {
  padding-bottom: 140px;
  justify-content: space-between;
  align-items: flex-start;

  .CloudL {
    width: 450px;
    text-align: left;
    padding-top: 60px;
  }
}

.ipcView.CloudBox {
  .CloudR {
    height: 460px;
  }
}

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .proT {
    padding-bottom: 40px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 58px;
  }

  .prod {
    padding-bottom: 60px;
    color: #717781;
    font-size: 20px;
  }

  .productImg {
    width: 100%;
    height: 600px;
    padding-bottom: 60px;

    .img1{
      background: url('@/assets/VLimg2.0/jyjg1.png');
    }
    .img2{
      background: url('@/assets/VLimg2.0/jyjg2.png');
    }
    .img3{
      background: url('@/assets/VLimg2.0/jyjg3.png');
    }
    .img4{
      background: url('@/assets/VLimg2.0/jyjg4.png');
    }
    .item{
      width: 300px;
      height: 300px;
      background-size: cover;
      position: relative;
      .bottom{
        position: absolute;
        bottom: 0;
        width: 300px;
        text-align: left;
        line-height: 88px;
        border-radius: 0 0 24px 24px;
        background: linear-gradient(180deg, rgba(255, 94, 16, 0) 0%, #FF5E10 100%);
        p{
          margin-left: 24px;
          font-size: 28px;
          font-weight: bold;
          color: #FFFFFF;
        }
      }
    }

    .proImg {
      width: 100%;
      height: 100%;
    }
  }

  .product1 {
    width: auto;
    height: 600px;
  }

  .product2Out {
    height: initial;
    justify-content: space-between;

    .product2Item {
      border-radius: 24px;
      background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
      border: 1px solid #001F5019;
      padding: 20px 20px 40px;
      flex-direction: column;
      align-items: flex-start;
      color: #3D3D3D;
      font-weight: bold;
      font-size: 28px;
    }

    .proImg.product2 {
      margin-bottom: 20px;
      width: 545px;
      height: 306px;
    }

    .product2Item.p2 {
      background: linear-gradient(180deg, #F7FCFE 0%, #FFFFFF 100%);
      border: 1px solid #001F5019;
    }
  }

  .product3Out.productImg {
    height: initial;
    margin-bottom: 60px;
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(180deg, #FEF9F6 0%, #FFFFFF 100%);
    border: 1px solid #001F5019;

    .p3Box {
      justify-content: space-between;

      .p3 {
        width: 358px;
        height: 170px;
      }
    }

    .p3_title {
      padding-top: 40px;
      text-align: left;
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .ps_desc {
      padding-top: 16px;
      padding-left: 60px;
      width: 900px;
      color: #3D3D3D;
      font-size: 20px;
      text-align: left;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 40px;
        top: 26px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #333;
      }
    }
  }

  .p4Out {
    width: auto;
    height: 870px;
  }

  .p5Out {
    flex-wrap: wrap;
    gap: 40px;

    .p5Item {
      padding: 30px 0;
      flex-direction: column;
      border-radius: 40px;
      background: #FFFFFF;
      box-shadow: 0px 0px 48px 0px #07005714;
      width: 300px;
      height: 300px;
      flex-shrink: 0;
      gap: 10px;
      position: relative;
    }

    .p5Iimg {
      width: 110px;
      height: 110px;
    }

    .p5t {
      color: #3D3D3D;
      font-weight: bold;
      font-size: 24px;
    }

    .p5d {
      color: #717781;
      font-size: 14px;
    }

    .proCode{
      width: 70px;
      height: 70px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0px 0px 0px 0px;
    }
  }
}
.orange-title{
  cursor: pointer;
  color: #FF5E10;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
}

.download{
  cursor: pointer;
  padding: 5px 20px;
  background-color: #FF5E10;
  border-radius: 16px;
  color: #fff;
  margin-top: 5px;
}

// 响应式适配
@media (max-width: 1400px) {
  .w1380 {
    width: 90%;
  }
  .tabSwitch {
    gap: 20px;
    .tabItem .tabTitle {
      font-size: 16px;
    }
  }
}
</style>
