<template>
  <div class="home_page vls">
    <div class="platTop w1380">
      <div class="VLStream">
        新一代 <span class="vlsUs">生产力平台</span>
      </div>
      <div class="plat_d">
        简单、高效、又 <span style="color: #2278FF;">实惠</span>!
      </div>
      <div class="flexRowAC useBox">
        <div class="seeMore">
          立即使用-完全免费
        </div>
        <div class="seeMore u1">
          安排演示
        </div>
      </div>
      <div class="w1380 webBottomImg">
        <img class="wBImg" src="@/assets/VLimg2.0/CloudR0.png" alt="" />
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        应用程序
      </div>
      <div class="flexRowAC useBox">
        <div class="seeMore">
          查看所有应用程序
        </div>
      </div>
    </div>
    <div class="productBox w1380" style="padding-bottom: 0px;">
      <div class="proT" style="padding-bottom: 40px;">
        想象一下，<span class="vlsUs">海量商业应用程序</span> 尽在您的指尖
      </div>
    </div>
    <div class="proTitleBox w1380 plan">
      <div class="plan_t">
        有什么需要改进吗?我们有相应的应用程序来满足您的需求。
        <br />
        免去复杂流程，不收取额外费用，只需一键安装，即可立即使用。
      </div>
      <div class="plan_t">
        每个应用程序都是一个简化流程的利器，为更多人赋予力量!
        <br />
        尽情想象，当每个人都能拥有方便工作的合适工具，并实现完美整合时，将会带来何等影响!
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT" style="padding-bottom: 0px;">
        提升您的 <span style="color: #2278FF;">工作品质</span>
      </div>
      <div class="w1380 webBottomImg">
        <img class="wBImg" src="@/assets/VLimg2.0/CloudR0.png" alt="" />
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        促进生产力的程序
      </div>
      <div class="w1380 webBottomImg">
        <img class="wBImg" src="@/assets/software/home.png" alt="" />
      </div>
      <div class="proT_d">
        <span class="vlsUs">体验真正极速 </span>，告别繁琐数据录入，智能 AI助手，用户界面更快90 亳秒内搞定全部操作--比眨眼还快。
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        集技术之大成的平台
      </div>
      <div class="w1380 webBottomImg">
        <img class="wBImg" src="@/assets/software/home1.png" alt="" />
      </div>
    </div>
    <div class="productBox w1380">
      <div class="proT">
        企业<span style="color: #2278FF;">软件</span> 应该如此!
      </div>
      <!--      <div class="w1380 webBottomImg">-->
      <!--        <img class="wBImg" src="@/assets/software/home1.png" alt="" />-->
      <!--      </div>-->
    </div>
    <div class="productBox use_t w1380">
      <div class="proT" style="padding-bottom: 20px;">
        全球 <span style="color: #2278FF;">1.200万</span> 用户
      </div>
      <div class="use_t_t">
        与 OortCloud 携手增长业务
      </div>
      <img class="use_t_img" src="@/assets/software/home2.png" alt="" />
    </div>
    <div class="productBox w1380">
      <div class="proT">
        <span style="color: #2278FF;">释放</span> 您的无限增潜能
      </div>
      <div class="flexRowAC useBox">
        <div class="seeMore">
          立即使用-完全免费
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";

.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

// 查看更多
//.seeMore {
//  display: inline-block;
//  padding: 24px 50px;
//  color: #fff;
//  border: 1px solid #2278FF;
//  border-radius: 8px;
//  background: #2278FF;
//  box-shadow: 0px 4px 10px 0px #FF5E1033;
//  font-weight: bold;
//  font-size: 18px;
//}

.platTop {
  text-align: center;
  padding: 110px 0 20px;

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

  .plat_d {
    color: #333333;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
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
}

.useBox {
  justify-content: center;
  gap: 20px;

  .seeMore {
    padding: 24px 50px;
    color: #fff;
    border: 1px solid #2278FF;
    border-radius: 8px;
    background: #2278FF;
    //box-shadow: 0px 4px 10px 0px #FF5E1033;
    font-weight: bold;
    font-size: 18px;
  }

  .u1 {
    color: #333;
    background-color: #F4F4F4;
    border: 1px solid #F4F4F4;
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

.webBottomImg {
  padding: 0;
  height: initial;

  .wBImg {
    width: 100%;
    height: initial;
    border-radius: 24px;
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
    color: #717781;
    font-size: 20px;
  }

  .CloudL {
    width: 500px;
  }

  .CloudR {
    width: 700px;
    height: auto;

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
  padding-bottom: 120px;
  justify-content: space-between;
  align-items: flex-start;

  .CloudL {
    width: 450px;
    text-align: right;
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
    padding-bottom: 60px;
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

    .proImg {
      width: 100%;
      height: 100%;
    }
  }

  .product1 {
    text-align: left;
    color: #fff;
    width: auto;
    height: 510px;
    background-color: #fff;
    border-radius: 24px;
    background: linear-gradient(135deg, #0C1F40 0%, #252734 98%);
    padding: 40px;

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
        width: 100px;
        line-height: 54px;
        color: #fff;
        height: 54px;
        background-color: #2278FF;
      }
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
      padding: 50px 0;
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

    .proCode {
      width: 70px;
      height: 70px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0px 0px 0px 0px;
    }
  }
}

.k8sMana_c1 {
  width: 692px;
  height: auto;
}

.vlsUs {
  opacity: 1;
  border-radius: 0px;
  background: linear-gradient(270deg, #2278FF0A 0%, #2278FF51 100%);
  border-left: 6px solid #2278FF;
  padding-left: 10px;
  color: #333;
}

.use_t {
  .use_t_t {
    color: #3D3D3D;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }

  .use_t_img {
    width: 100%;
  }
}

.proTitleBox.plan {
  padding-bottom: 60px;

  .plan_t {
    padding-bottom: 48px;
    color: #333333;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }
}

.proT_d {
  margin: 0 auto;
  width: 600px;
  color: #333333;
  font-weight: normal;
  font-size: 20px;
  text-align: center;

  > .vlsUs {
    border-left: 4px solid #2278FF;
    padding-left: 6px;
  }
}
</style>
