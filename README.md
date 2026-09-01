# VLStream 官网

<p align="center">
  <img src="./src/assets/VLimg2.0/logo1.png" alt="VLStream" height="64" />
</p>

<p align="center">
  决策式 AI 视频汇聚调度平台官网，面向视频云中台、视觉物联、AI 分析、算力调度与行业场景化解决方案展示。
</p>

<p align="center">
  <a href="https://github.com/OortCloudGroup">GitHub</a>
  ·
  <a href="https://vls.oortcloudsmart.com/zh/">中文站点</a>
  ·
  <a href="https://vls.oortcloudsmart.com/en/">English Site</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Nuxt-3-00DC82?logo=nuxtdotjs&logoColor=white" alt="Nuxt 3" />
  <img src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/License-Apache--2.0-blue" alt="Apache-2.0" />
</p>

![VLStream 首页视觉](./src/assets/VLimg2.0/webrtc.png)

## 项目简介

VLStream 官网是一个基于 Nuxt 3 的静态网站项目，用于展示 VLStream 决策式 AI 视频汇聚调度平台的能力、产品矩阵、硬件方案、部署实例与开源生态。

网站以视频云中台为核心，围绕全域视频资源接入、整合、管理、解析、运维和调度，呈现从“视频感知”到“智能研判”再到“自动调度”的平台能力闭环。

## 网站内容

### 首页

首页聚焦 VLStream 品牌与平台定位，突出“视觉赋能平台，AI 驱动智慧新视界”的核心主张，并提供 GitHub 开源入口、演示入口和下载入口。

![首页能力展示](./src/assets/VLimg2.0/CloudR1.png)

### 核心能力

- WebRTC：低延迟、高并发的实时视频传输能力，支持跨终端、跨网络的视频流互通。
- 判别式 AI：面向人员、车辆、异常事件等视频内容进行目标检测、行为分析和结构化识别。
- 决策式 AI：基于结构化数据、业务规则和场景模型进行事件研判、资源匹配和调度决策。
- 算力调度：统一管理云端、边缘节点与终端算力，按任务优先级和负载动态分配资源。
- 视觉物联 IoT：通过标准化物模型统一接入摄像头、传感器和智能终端。
- 多租户运营：支持多部门、多单位资源隔离、权限管理和平台化运营。
- 算法训练：支持场景算法定制训练、按需加载和动态部署。

### 产品矩阵

- VLStream Cloud：云端视频汇聚、AI 分析与平台化管理能力。
- VLStream IPC 固件：面向摄像设备的多芯片适配与智能化固件能力。
- VLStream IPC 管理界面：摄像设备管理、配置和运维界面。
- VLStream NVR：智能存储与视频管理能力。
- VLStream CMS：集中监控、多设备管理与跨平台适配能力。
- VLStream APP：支持 Windows、Android、iOS、Harmony OS、Linux、Mac OS、银河麒麟等平台。

![产品矩阵](./src/assets/VLimg2.0/CloudR5.png)

### 行业场景

网站展示了无感考勤打卡、智慧仓库、城市风光、专业服务、教育机构、精准分析等场景化部署内容，用于说明 VLStream 在视觉物联与智能监控方向的落地方式。

![场景化部署](./src/assets/VLimg2.0/product2L.png)

## 技术栈

- Nuxt 3
- Vue 3
- Element Plus
- Pinia
- Vue I18n
- Swiper
- Sass / Less
- postcss-px-to-viewport

## 目录结构

```text
src/
  assets/          静态图片、样式与站点素材
  components/      公共组件
  pages/           中文站页面与路由入口
thirdHtml/         英文静态页面
server/            服务端扩展目录
```

## 本地运行

推荐使用 pnpm。

```bash
pnpm install
pnpm start
```

默认开发地址：

```text
http://localhost:8080
```

## 构建与预览

```bash
pnpm build
pnpm preview
```

静态生成：

```bash
pnpm generate
```

## 开源协议

本项目基于 Apache License 2.0 开源，详情见 [LICENSE](./LICENSE)。
