<template>
  <div class="home_page vls">
    <div class="aside">
      <div class="aside_nav">
        <div
          v-for="(value,i) in navArr"
          :key="i"
          class="nav_item"
          :class="{ active: activeIndex === i }"
          @click="handleScroll(i, value.targetId)"
        >
          <img class="nav_item_img" :src="value.img" alt="" />
          <span class="nav_item_text">{{ value.text }}</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="platTopOut flexRowAC w1380">
        <div id="section2" class="platTop w1380">
          <div class="VLStream">
            AI摄像机
          </div>
          <div class="plat_cent">
            支持多目标识别，高清远程监控，算法可扩展，适合无人值守
          </div>
        </div>
        <img class="platTopOutImg" src="@/assets/img/hardware/hardware_bg1.png" alt="" />
      </div>
      <div id="section1" class="productBox w1380">
        <div class="proT">
          白标及客制化服务
        </div>
        <div class="proT_d1">
          奥尔特云开发行业先进的硬件和软件网络解决方案，优先考虑安全性和可靠性。
          我们的合作通过扩展您的服务组合并扩大您的解决方案覆盖范围，将附加价值集成到您的业务模型中。
          我们在提供定制软件解决方案方面的成功经验将与您的服务组合无缝集成。
        </div>
      </div>
      <div class="productBox w1380">
        <div class="proT">
          它是如何运作的
        </div>
        <div class="flexRowAC productItem">
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_it1.png" alt="" />
            <div class="productImg_d1">
              场景和目标预设
            </div>
            <div class="productImg_desc">
              通过提供技术和定制培训来协助可扩展部署，并为服务维护和进一步开发提供持续支持。
            </div>
          </div>
          <img class="productItem1_arrow" src="@/assets/img/hardware/hardware_arrow.png" alt="" />
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_it2.png" alt="" />
            <div class="productImg_d1">
              严格的设计指标
            </div>
            <div class="productImg_desc">
              我们根据要求的规格开发概念或样品设计，并与客户一起进行进一步的调整和优化。
            </div>
          </div>
          <img class="productItem1_arrow" src="@/assets/img/hardware/hardware_arrow.png" alt="" />
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_it3.png" alt="" />
            <div class="productImg_d1">
              规范的产品测试
            </div>
            <div class="productImg_desc">
              我们为功能压力测试创建原型，评估用户体验以及与客户现有服务组合的兼容性。
            </div>
          </div>
          <img class="productItem1_arrow" src="@/assets/img/hardware/hardware_arrow.png" alt="" />
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_it4.png" alt="" />
            <div class="productImg_d1">
              大规模制造能力
            </div>
            <div class="productImg_desc">
              通过提供技术和定制培训来协助可扩展部署，并为服务维护和进一步开发提供持续支持。
            </div>
          </div>
        </div>
      </div>
      <div class="productBox w1380">
        <div class="proT">
          设备白标定制
        </div>
        <div class="flexRowAC productItem">
          <div class="productImg productItem1">
            <img class="custom" src="@/assets/img/hardware/hardware_sb1.png" alt="" />
            <div class="custom_t">
              表壳丝印
            </div>
          </div>
          <div class="productImg productItem1">
            <img class="custom" src="@/assets/img/hardware/hardware_sb2.png" alt="" />
            <div class="custom_t">
              产品贴纸
            </div>
          </div>
          <div class="productImg productItem1">
            <img class="custom" src="@/assets/img/hardware/hardware_sb3.png" alt="" />
            <div class="custom_t">
              包装设计
            </div>
          </div>
          <div class="productImg productItem1">
            <img class="custom" src="@/assets/img/hardware/hardware_sb4.png" alt="" />
            <div class="custom_t">
              用户手册
            </div>
          </div>
        </div>
      </div>
      <div class="productBox w1380">
        <div class="proT">
          与您定制目标一致的业务平台
        </div>
        <div class="proT_d1">
          设计您自己的 SDK 和 API
        </div>
        <div class="productItem platMana">
          <img class="platItem_sub" src="@/assets/img/hardware/hardware_pt1.png" alt="" />
          <diiv class="flexRowAC productItem platMana">
            <div class="platItem">
              管理平台PC端
            </div>
            <div class="platItem p1">
              管理平台移动端
            </div>
          </diiv>
        </div>
      </div>
      <div class="w1380">
        <div class="section">
          <div class="workUp_out">
            <div class="workUp flexRowAC">
              <div class="workUp_TD">
                <div class="workUp_TD_t">
                  {{ $t('home.capital') }}
                </div>
                <div class="oort_btn_out">
                  <span class="oort_btn"> OORT-6600-20</span>
                </div>
                <div class="workUp_TD_d">
                  设备采用安培GPU，支持全彩夜视、自动变焦、80+目标识别，覆盖1-3KM，功耗<30W，IP66防护，算力20T。
                </div>
                <nuxt-link class="workUp_TD_b flexRowAC" to="/zh/hardwareQJ">
                  {{ $t('product.viewDE') }}
                  <el-icon size="27">
                    <Right />
                  </el-icon>
                </nuxt-link>
              </div>
              <img class="workUp_img h1" src="@/assets/VLimg/h1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="section">
          <div class="workUp_out">
            <div class="workUp flexRowAC">
              <img class="workUp_img h1" src="@/assets/VLimg/h1.png" alt="" />
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
                <nuxt-link to="/zh/hardwareZQ" class="workUp_TD_b flexRowAC">
                  {{ $t('product.viewDE') }}
                  <el-icon size="27">
                    <Right />
                  </el-icon>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="workUp_out">
            <div class="workUp flexRowAC">
              <div class="workUp_TD">
                <div class="workUp_TD_t">
                  {{ $t('home.haveTop') }}
                </div>
                <div class="oort_btn_out">
                  <span class="oort_btn"> OORT-6600-1</span>
                </div>
                <div class="workUp_TD_d">
                  八核处理器，支持自动缩放、80+目标识别，IP66防护，多协议接入，算力1T，轻量化设计，高效边缘计算。
                </div>
                <nuxt-link to="/zh/hardwareZY" class="workUp_TD_b flexRowAC">
                  {{ $t('product.viewDE') }}
                  <el-icon size="27">
                    <Right />
                  </el-icon>
                </nuxt-link>
              </div>
              <img class="workUp_img h1 h3" src="@/assets/VLimg/h3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="section">
          <div class="workUp_out">
            <div class="workUp flexRowAC">
              <img class="workUp_img h1 h3" src="@/assets/VLimg/h3_.png" alt="" />
              <div class="workUp_TD">
                <div class="workUp_TD_t">
                  {{ $t('home.Solution') }}
                </div>
                <div class="oort_btn_out">
                  <span class="oort_btn"> OORT-6600-G</span>
                </div>
                <div class="workUp_TD_d">
                  设备具备全彩拾取、人体检测和强光抑制，400万像素高清，IP66防水，适用全天候安防。
                </div>
                <nuxt-link to="/zh/hardwareJC" class="workUp_TD_b flexRowAC">
                  {{ $t('product.viewDE') }}
                  <el-icon size="27">
                    <Right />
                  </el-icon>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="proTitleBox lineBox w1380 flexRowAC">
        <div class="line" />
        还有更多
        <img class="lineImg" src="@/assets/software/price_icon.png" alt="" />
        <div class="line" />
      </div>
      <!--多种硬件产品定制-->
      <div class="productBox w1380">
        <div class="proT">
          多种硬件产品定制
        </div>
        <div class="proT_d1">
          *以下图片仅供参考，请以实物为准
        </div>
        <div id="section4" class="proT1 w ">
          移动存储
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_yd1.png" alt="" />
            加密U盘
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_yd2.png" alt="" />
            加密移动硬盘
          </div>
        </div>
        <div id="section5" class="proT1 w">
          网络产品
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_wl1.png" alt="" />
            协议转换网关
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_wl2.png" alt="" />
            工业路由器
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_wl3.png" alt="" />
            工业交换机
          </div>
        </div>
        <div id="section6" class="proT1 w">
          智能终端
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zn1.png" alt="" />
            国产化笔记本
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zn2.png" alt="" />
            国产化平板电脑
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zn3.png" alt="" />
            台式电脑
          </div>
        </div>
        <div id="section7" class="proT1 w">
          指挥调度
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zh1.png" alt="" />
            执法记录仪
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zh2.png" alt="" />
            指挥中心操作台
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zh3.png" alt="" />
            便携式打印机
          </div>
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zh4.png" alt="" />
            车载终端
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zh5.png" alt="" />
            位置服务终端
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_zh6.png" alt="" />
            无人值守设备柜
          </div>
        </div>
        <div id="section8" class="proT1 w">
          数据采集
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_sj1.png" alt="" />
            动环盒子（4G）
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_sj2.png" alt="" />
            动环交换机（4G）
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_sj3.png" alt="" />
            动环网关（5G）
          </div>
        </div>
        <div id="section9" class="proT1 w">
          服务器
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_fwq1.png" alt="" />
            入门级服务器
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_fwq2.png" alt="" />
            部门级服务器
          </div>
        </div>
        <div class="proT1 w">
          IoT
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_lot.png" alt="" />
            loT Gateway智能网关
          </div>
        </div>
        <div id="section10" class="proT1 w">
          一体机
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_ytj1.png" alt="" />
            智慧灯杆一体机
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_ytj2.png" alt="" />
            公共服务中心一体机
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_ytj3.png" alt="" />
            跨网文件安全传输管理一体机
          </div>
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_ytj3_.png" alt="" />
            兵役征兵一体机
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_ytj4.png" alt="" />
            AI征兵宣传员
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_ytj5.png" alt="" />
            AI物资仓库员
          </div>
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_ytj6.png" alt="" />
            AI 打靶训练员
          </div>
        </div>
        <div id="section11" class="proT1 w">
          智慧会议室
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_hys1.png" alt="" />
            电子桌牌
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_hys2.png" alt="" />
            电子门牌
          </div>
        </div>
        <div class="flexRowAC productItem mobileStorageBox hardware_yd1Box">
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_hys3.png" alt="" />
            操控终端
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_hys4.png" alt="" />
            录制系统
          </div>
          <div class="mobileStorage hardware_yd1 flexRowAC">
            <img class="mobileStorage_img" src="@/assets/img/hardware/hardware_hys5.png" alt="" />
            信息发布盒子
          </div>
        </div>
      </div>
      <!--高度适配不同规模的项目-->
      <div class="productBox w1380">
        <div class="proT">
          高度适配不同规模的项目
        </div>
        <div class="flexRowAC productItem heightPro">
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_gd1.png" alt="" />
            <div class="productImg_d1">
              初创公司
            </div>
            <div class="productImg_desc">
              用于市场验证和用户获取的小批量生产。
            </div>
          </div>
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_gd2.png" alt="" />
            <div class="productImg_d1">
              中小企业
            </div>
            <div class="productImg_desc">
              经济高效的部署和自定义应用程序的选择性功能。
            </div>
          </div>
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_gd3.png" alt="" />
            <div class="productImg_d1">
              大型企业
            </div>
            <div class="productImg_desc">
              可高效定制的硬件和软件。
            </div>
          </div>
        </div>
      </div>
      <!--为什么与 OortCloud 合作？-->
      <div class="productBox w1380">
        <div class="proT">
          为什么与 OortCloud 合作？
        </div>
        <div class="proT_d1">
          OortCloud是定制化软硬件的方案解决者。 我们的工程师团队热衷于了解您的挑战，利用他们的专业知识定制解决方案以满足您的需求并解决您的问题。
          我们相信一切都会成功！企业建立在强大而安全的基础之上。
        </div>
        <div class="flexRowAC productItem cooperate">
          <div class="cooperateItem flexRowAC cop1">
            <div class="t1">
              10 年+
            </div>
            <div class="t2">
              解决方案经验
            </div>
          </div>
          <div class="cooperateItem flexRowAC cop2">
            <div class="t1">
              强大
            </div>
            <div class="t2">
              IT 和工程支持
            </div>
          </div>
          <div class="cooperateItem flexRowAC cop3">
            <div class="t1">
              庞大
            </div>
            <div class="t2">
              个人和企业客户群体
            </div>
          </div>
          <div class="cooperateItem flexRowAC cop4">
            <div class="t1">
              广泛的
            </div>
            <div class="t2">
              质量保证
            </div>
          </div>
        </div>
      </div>
      <!--企业级个性定制-->
      <div class="productBox w1380">
        <div class="proT">
          企业级个性定制
        </div>
        <div class="proT_d1">
          通过品牌化定制服务，我们快速定制硬件产品和软件平台，为您量身打造智能化解决方案，帮助您轻松实现智能化管理与高效数据分析，全面提升您的运营效能。
        </div>
        <div class="flexRowAC productItem heightPro">
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_dz1.png" alt="" />
            <div class="productImg_d1">
              OEM品牌定制
            </div>
            <div class="productImg_desc">
              支持摄像机定制、品牌后台、客户端定制，域名定制，打造全套品牌化平台，享受升级单独更新
            </div>
          </div>
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_dz2.png" alt="" />
            <div class="productImg_d1">
              模型训练调优
            </div>
            <div class="productImg_desc">
              可为化工厂、仓库、养殖场、果园、企业等不同领域的模型微调，提供从算力到行业训练数据集存储的全套服务
            </div>
          </div>
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_dz3.png" alt="" />
            <div class="productImg_d1">
              特殊定制
            </div>
            <div class="productImg_desc">
              针对企业专属功能需求，支持多对一定制服务，匹配产品人员、UI设计、前后端开发、测试全产品线小组服务
            </div>
          </div>
          <div class="productImg productItem1 product1">
            <img class="productImg_img" src="@/assets/img/hardware/hardware_dz4.png" alt="" />
            <div class="productImg_d1">
              API开放服务
            </div>
            <div class="productImg_desc">
              将先进的AI功能直接集成到您的产品中，无需部署 提供强大接口与专业服务，助您轻松实现创意想法
            </div>
          </div>
        </div>
        <div class="flexRowAC w1380 seeMoreOut">
          <div class="seeMore flexRowAC">
            <img class="u2_img" src="@/assets/img/hardware/hardware_dz5.png" alt="" />
            联系我们
          </div>
        </div>
      </div>
      <!--合作伙伴-->
      <div class="productBox w1380">
        <div class="proT">
          合作伙伴
        </div>
        <div class="proT_d1">
          满足企业实际业务需求的定制化服务
        </div>
        <div class="flexRowAC cooperatePar">
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb1.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb2.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb3.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb4.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb5.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb6.png" alt="" />
        </div>
        <div class="flexRowAC cooperatePar">
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb7.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb8.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb9.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb10.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb11.png" alt="" />
          <img class="cooperateParImg" src="@/assets/img/hardware/hardware_hzhb12.png" alt="" />
        </div>
      </div>
      <!--场景介绍-->
      <div class="h6_cover">
        <div class="h6_cover_t">
          {{ $t('home.sint') }}
        </div>
        <div class="h6_cover_d">
          {{ $t('home.cusSoluReache') }}
        </div>
        <div class="h6_cover_img_out">
          <img class="h6_cover_img" src="@/assets/VLimg/h6.png" alt="" />
        </div>
      </div>
      <!--资料下载-->
      <div class="productBox w1380">
        <div class="proT">
          资料下载
        </div>
        <div class="productImg product2Out flexRowAC">
          <div class="product2Out_it flexRowAC">
            <div class="pro2o_l flexRowAC">
              <img class="pro2o_l_l" src="@/assets/software/down3.png" alt="" />
              VLStream决策式视觉端到端视频融合赋能平台V3.0技术白皮书V1.1.pdf
            </div>
            <div class="pro2o_2" @click="downloadPDF">
              下载
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import bbjkzhfw from '@/assets/VLimg2.0/bbjkzhfw.png'
import aisxj from '@/assets/VLimg2.0/aisxj.png'
import ptsxj from '@/assets/VLimg2.0/ptsxj.png'
import ydcc from '@/assets/VLimg2.0/ydcc.png'
import wlcp from '@/assets/VLimg2.0/wlcp.png'
import znzd from '@/assets/VLimg2.0/znzd.png'
import zhdd from '@/assets/VLimg2.0/zhdd.png'
import sjcj from '@/assets/VLimg2.0/sjcj.png'
import fwq from '@/assets/VLimg2.0/fwq.png'
import ytj from '@/assets/VLimg2.0/ytj.png'
import zhhys from '@/assets/VLimg2.0/zhhys.png'
const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/download/VLStream（Video Link Stream）决策式视觉端到端视频融合赋能平台V3.0技术白皮书V1.1.pdf'
  link.download = 'VLStream决策式视觉端到端视频融合赋能平台V3.0技术白皮书V1.1.pdf'
  link.click()
}
const activeIndex = ref(-1)
let navArr = ref([])
navArr.value = [

  { text: 'AI摄像机', img: aisxj, targetId: 'section2' },
  { text: '白标及客制化服务', img: bbjkzhfw, targetId: 'section1' },
  { text: '普通摄像机', img: ptsxj, targetId: 'section3' },
  { text: '移动存储', img: ydcc, targetId: 'section4' },
  { text: '网络产品', img: wlcp, targetId: 'section5' },
  { text: '智能终端', img: znzd, targetId: 'section6' },
  { text: '指挥调度', img: zhdd, targetId: 'section7' },
  { text: '数据采集', img: sjcj, targetId: 'section8' },
  { text: '服务器', img: fwq, targetId: 'section9' },
  { text: '一体机', img: ytj, targetId: 'section10' },
  { text: '智慧会议室', img: zhhys, targetId: 'section11' }
]

// 监听滚动事件，更新激活状态
const handleScrollActive = () => {
  // 获取当前滚动位置（考虑导航栏高度偏移）
  const scrollTop = window.scrollY + 110 // 与sticky的top值保持一致
  const navHeight = 82 // 导航栏高度，与滚动计算保持一致

  // 遍历导航项，找到当前可见区域
  navArr.value.forEach((item, index) => {
    const targetEl = document.getElementById(item.targetId)
    if (!targetEl) return

    // 获取目标元素的位置信息
    const { offsetTop, offsetHeight } = targetEl
    const elementTop = offsetTop - navHeight
    const elementBottom = elementTop + offsetHeight

    // 判断当前滚动位置是否在目标元素范围内
    if (scrollTop >= elementTop && scrollTop < elementBottom) {
      activeIndex.value = index
    }
  })
}

onMounted(() => {
  // 初始加载时触发一次，设置初始状态
  // handleScrollActive()
  // 监听滚动事件
  window.addEventListener('scroll', handleScrollActive)
})

onUnmounted(() => {
  // 组件卸载时移除事件监听
  window.removeEventListener('scroll', handleScrollActive)
})

const handleScroll = (index, targetId) => {
  // 更新激活状态
  activeIndex.value = index

  // 获取目标元素
  const targetEl = document.getElementById(targetId)
  if (!targetEl) return

  // 计算偏移量
  const navHeight = 82
  const offsetTop = targetEl.offsetTop - navHeight

  window.scrollTo({
    top: offsetTop,
    behavior: 'auto'
  })
}

definePageMeta({
  layout: 'site-new'
})

</script>

<style scoped lang="scss">
.home_page {
  // position: relative;
  display: flex;
  // height: auto;
}

.aside{
  width: 250px;
}

.main{
  width: calc(100% - 250px);
}

.aside_nav{
  width: 250px;
  position: sticky;
  top: 110px;
  .nav_item{
    cursor: pointer;
    width: 248px;
    height: 56px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    .nav_item_img{
      margin-left: 13px;
      width: 32px;
      height: 32px;
    }
    .nav_item_text{
      margin-left: 10px;
      font-size: 20px;
      font-weight: normal;
      color: #3D3D3D;
    }
    &:hover{
      background-color: rgba(255, 94, 16, 0.08);
      // .nav_item_text{
      //   color: #FF5E10;
      // }
      // &::before{
      //   content: "";
      //   position: absolute;
      //   width: 3px;
      //   height: 20px;
      //   background-color: #FF5E10;
      // }
    }
  }
}

/* 点击激活状态样式（与hover样式一致） */
.nav_item.active {
  background-color: rgba(255, 94, 16, 0.08);
}
.nav_item.active .nav_item_text {
  color: #FF5E10;
}
.nav_item.active::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  background-color: #FF5E10;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.platTopOut {
  padding-top: 80px;
  justify-content: space-between;
  padding-bottom: 160px;

  .platTopOutImg {
    flex-shrink: 0;
    width: 742px;
    height: auto;
    margin-left: 100px;
  }
}

.platTop {
  text-align: left;
  padding: 110px 0;

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
      right: 336px;
      top: -50px;
    }
  }

  .plat_cent {
    padding: 20px 0 50px;
    color: #717781;
    font-size: 18px;
  }
}

.WebRTC {
  gap: 24px;
  padding-bottom: 80px;
  animation: scroll 35s linear infinite;

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

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.CloudBox {
  padding-bottom: 100px;
  justify-content: space-between;
  align-items: flex-start;

  .cl_t {
    letter-spacing: 0;
    padding-top: 30px;
    padding-bottom: 40px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 54px;
  }

  .cl_d {
    padding-bottom: 24px;
    color: #97A3B6;
    font-weight: bold;
    font-size: 40px;
  }

  .CloudL {
    width: 500px;
  }

}

.productBox {
  text-align: center;
  padding-bottom: 140px;

  .proT_d1 {
    margin: 0 auto;
    width: 1100px;
    height: 88px;
    font-family: OPPOSans, OPPOSans;
    font-weight: 400;
    font-size: 20px;
    color: #717781;
    line-height: 30px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }

  .proT1 {
    font-weight: 700;
    font-size: 24px;
    color: #3D3D3D;
    line-height: 36px;

    &.w {
      padding-top: 100px;
    }
  }

  .productItem {
    gap: 20px;

    .productItem1 {
      flex: 1;
      text-align: center;
      //&:nth-child(1) {
      //  background: #2278FF;
      //
      //  .pro3_btn {
      //    color: #2278FF;
      //  }
      //}
    }
  }

  /*管理平台*/
  .platMana {
    .platItem_sub {
      height: 380px;
      background-color: #f7f7f7;
      margin-bottom: 20px;
    }

    .platItem {
      flex: 3;
      font-weight: 400;
      font-size: 18px;
      color: #3D3D3D;
      line-height: 26px;
    }
  }

  .proT {
    padding-bottom: 60px;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 58px;
  }

  .productImg {
    width: 100%;
    //height: 600px;
    padding-bottom: 60px;
  }

  .productItem1_arrow {
    flex-shrink: 0;
    width: 40px;
    height: 20px;
  }

  .custom {
    height: 280px;

    &_t {
      padding-top: 20px;
      font-weight: 700;
      font-size: 24px;
      color: #3D3D3D;
      line-height: 36px;
      text-align: center;
      font-style: normal;
    }
  }

  .product1 {
    text-align: left;
    color: #fff;
    width: auto;
    background-color: #fff;
    //padding: 40px;

    .productImg_img {
      margin: 0 auto;
      width: 160px;
      height: 160px;
    }

    .productImg_d1 {
      padding-bottom: 20px;
      font-family: OPPOSans, OPPOSans;
      font-weight: 700;
      font-size: 24px;
      color: #3D3D3D;
      line-height: 36px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .productImg_desc {
      margin: 0 auto;
      width: 230px;
      height: 155px;
      font-family: OPPOSans, OPPOSans;
      font-weight: 400;
      font-size: 20px;
      color: #717781;
      line-height: 30px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .pro1_1 {
      width: 46px;
      height: 48px;
      margin-bottom: 46px;
    }

    .pro1_1_s {
      padding-bottom: 50px;
      gap: 12px;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;

      .pro1_1_s_b {
        color: #FFFFFF;
        font-size: 14px;
        border-radius: 4px;
        border: 0.5px solid #FFFFFF;
        padding: 4px 10px;
      }
    }

    .pro1_2 {
      gap: 12px;
      padding-bottom: 30px;

      .pro1_2_i {
        width: 16px;
        height: 16px;
      }
    }

    .pro3 {
      padding-top: 35px;
      gap: 30px;

      .pro3_btn {
        flex: 1;
        padding: 20px 0;
        justify-content: center;
        background-color: #fff;
        border-radius: 4px;
        color: #333;
        font-weight: bold;
        font-size: 18px;
      }

      .pro3_btn.p3b {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  .product2Out {
    padding-bottom: 0;
    height: 220px;
    justify-content: center;
    background-image: url('@/assets/software/downloadBG.png');
    background-size: 100% 100%;

    .product2Out_it {
      opacity: 1;
      color: #333333;
      font-size: 16px;

      .pro2o_l {
        padding-left: 12px;
        width: 600px;
        height: 54px;
        background-color: #F0F0F0;

        .pro2o_l_l {
          width: 34px;
          height: 34px;
          margin-right: 12px;
        }
      }

      .pro2o_2 {
      cursor: pointer;
        width: 100px;
        line-height: 54px;
        color: #fff;
        height: 54px;
        background-color: #2278FF;
      }
    }
  }

  .mobileStorage {
    flex: 1;

    &Box {
      padding-top: 40px;
    }

    .mobileStorage_img {
      background-color: #f7f7f7;
      height: 420px;
      margin-bottom: 20px;
    }
  }
}

.cloudClass_c4 {
  width: 1380px;
  height: auto;
}

.k8sMana_c1 {
  width: 750px;
  height: auto;
}

.home_page {
  position: relative;
}

.workUp {
  padding-bottom: 160px;
  justify-content: space-between;

  .workUp_TD {
    width: 520px;
  }

  .workUp_img {
    width: 847px;
    height: 550px;
    background-size: cover;
  }

  .workUp_img.h1 {
    flex-shrink: 0;
    width: 572px;
    height: 274px;
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
    color: #717781;
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

  &.bgcF7 {
    background: #F7F7F7;
  }
}

.lineBox {
  justify-content: space-between;
  color: #EB691C;
  font-size: 20px;
  padding: 0 10px 160px;

  .line {
    width: calc(50% - 74px);
    height: 1px;
    background-color: #EB691C;
  }

  .lineImg {
    width: 24px;
    height: 24px;
    background-color: #EB691C;
    border-radius: 50%;
  }
}

// 高度适配不同规模的项目
.heightPro {
  .productImg {
    background: #F9FAFB;
    border-radius: 24px 24px 24px 24px;
    border: 1px solid #E2E3E5;

    .productImg_desc {
      margin: 0 auto;
      width: 280px;
      font-weight: 400;
      height: 100px;
      font-size: 18px;
      color: #717781;
      line-height: 26px;
      text-align: center;
    }

    .productImg_img {
      margin-top: 40px;
    }
  }
}

/*为什么与 OortCloud 合作？*/
.cooperate {
  .cooperateItem {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    background-size: 100% 100%;
    height: 220px;

    .t1 {
      font-weight: 700;
      font-size: 28px;
      color: #FFFFFF;
      line-height: 42px;
    }

    .t2 {
      font-weight: 400;
      font-size: 18px;
      color: #FFFFFF;
      line-height: 26px;
    }
  }

  .cop1 {
    background-image: url('@/assets/img/hardware/hardware_hz1.png');
  }

  .cop2 {
    background-image: url('@/assets/img/hardware/hardware_hz2.png');
  }

  .cop3 {
    background-image: url('@/assets/img/hardware/hardware_hz3.png');
  }

  .cop4 {
    background-image: url('@/assets/img/hardware/hardware_hz4.png');
  }
}

/*合作伙伴*/
.cooperatePar {
  justify-content: space-between;
  padding-top: 60px;

  .cooperateParImg {
    height: 40px;
    width: 140px;
  }
}

/*场景介绍*/
.h6_cover {
  padding: 120px 140px;
  margin-bottom: 160px;
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
    width: 1480px;
    margin: 0 auto;
  }

  .h6_cover_img {
    width: 100%;
  }
}

.seeMore {
  gap: 10px;
  padding: 20px 50px;
  color: #fff;
  border: 1px solid #FF5E10;
  border-radius: 8px;
  background: #FF5E10;
  box-shadow: 0px 4px 10px 0px #FF5E1033;
  font-weight: bold;
  font-size: 18px;
  line-height: 20PX;
  .u2_img {
    width: 28px;
    height: 26px;
  }

  &Out{
    padding-top: 60px;
    justify-content: center;
  }
}
.hardware_yd1Box{
  justify-content: center;
  .hardware_yd1{
    flex: initial;
    flex-direction: column;
  }
}

</style>
