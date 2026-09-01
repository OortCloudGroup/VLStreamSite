<template>
  <div class="model-detail-page">
    <div class="detail-container">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <span class="breadcrumb-line">|</span>
        <span class="breadcrumb-item breadcrumb-link" @click="goBack">Model Hub</span>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item breadcrumb-current">算法详情</span>
      </div>

      <div v-if="card" class="detail-body">
        <div class="detail-intro">
          <div class="detail-cover">
            <img :src="card.cover" :alt="card.title" />
          </div>
          <div class="detail-summary">
            <h2>{{ card.title }}</h2>
            <div class="detail-tags">
              <span v-for="tag in card.tags" :key="tag" class="detail-tag">{{ tag }}</span>
            </div>
            <p>{{ card.desc }}</p>
            <button type="button" class="detail-use-btn">
              申请使用
            </button>
          </div>
        </div>

        <div class="detail-metrics">
          <div class="metric-card metric-card-icon">
            <img class="metric-icon metric-icon-company" :src="metricCompanyIcon" alt="发布厂商" />
            <div class="metric-value metric-company">
              {{ publisherText }}
            </div>
          </div>
          <div class="metric-card metric-card-icon">
            <img class="metric-icon" :src="metricVersionIcon" alt="算法版本" />
            <div class="metric-value">
              {{ versionText }}
            </div>
          </div>
          <div class="metric-card metric-card-icon">
            <img class="metric-icon" :src="metricStatusIcon" alt="最近更新" />
            <div class="metric-value metric-status">
              {{ statusText }}
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-value metric-icon">
              12.3 万
            </div>
            <div class="metric-label">
              使用量
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-value metric-icon">
              1.6 千
            </div>
            <div class="metric-label">
              收藏
            </div>
          </div>
        </div>

        <div class="detail-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            type="button"
            class="detail-tab"
            :class="{ active: activeTab === tab.key }"
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>

        <div v-if="activeTab === 'overview'" class="detail-preview">
          <img :src="card.detailImage || card.cover" :alt="card.title" />
        </div>

        <div v-if="activeTab === 'overview'" class="detail-content">
          <p v-for="(paragraph, index) in card.detailContent" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div v-else-if="activeTab === 'install'" class="tab-panel">
          <div class="install-grid">
            <div v-for="(item, index) in installSteps" :key="item.title" class="install-card">
              <div class="install-index">
                {{ index + 1 }}
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>

          <div class="code-block">
            <div class="code-title">
              部署命令
            </div>
            <pre><code>{{ installCommand }}</code></pre>
          </div>
        </div>

        <div v-else class="tab-panel">
          <div class="history-list">
            <div v-for="item in versionHistory" :key="item.version" class="history-item">
              <div class="history-version">
                {{ item.version }}
              </div>
              <div class="history-body">
                <div class="history-date">
                  {{ item.date }}
                </div>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { aiModelDetail } from '@/api/deploymentService'
import metricVersionIcon from '@/assets/img/Model_i.png'
import metricCompanyIcon from '@/assets/img/Model_o.png'
import metricStatusIcon from '@/assets/img/Model_q.png'

const route = useRoute()
const router = useRouter()

const card = ref(null)
const activeTab = ref('overview')

const tabs = [
  { key: 'overview', label: '概述' },
  { key: 'install', label: '安装方式' },
  { key: 'history', label: '版本历史' }
]

const normalizeList = (values = []) => {
  return Array.from(new Set(values.map(value => String(value || '').trim()).filter(Boolean)))
}

const escapeXml = (value) => {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const createPlaceholderImage = (text) => {
  const label = escapeXml(String(text || 'AI Model').slice(0, 24) || 'AI Model')
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#eff6ff" />
          <stop offset="100%" stop-color="#dbeafe" />
        </linearGradient>
      </defs>
      <rect width="900" height="600" rx="24" fill="url(#bg)" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#1d4ed8" font-size="42" font-family="Arial, sans-serif">${label}</text>
    </svg>
  `
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const formatFileSize = (size) => {
  const value = Number(size)
  if (!Number.isFinite(value) || value <= 0) {
    return ''
  }
  if (value >= 1024 * 1024 * 1024) {
    return `${(value / 1024 / 1024 / 1024).toFixed(1)}GB`
  }
  if (value >= 1024 * 1024) {
    return `${(value / 1024 / 1024).toFixed(1)}MB`
  }
  if (value >= 1024) {
    return `${(value / 1024).toFixed(1)}KB`
  }
  return `${value}B`
}

const parseRouteCard = () => {
  if (!route.query.card) {
    return null
  }

  try {
    return JSON.parse(route.query.card)
  } catch (error) {
    console.error('解析卡片数据失败:', error)
    return null
  }
}

const buildDetailCard = (item = {}, fallback = null) => {
  const base = fallback || {}
  const title = item.name || item.alias || item.model_type || base.title || '未命名模型'
  const desc = item.description || base.desc || `${title}模型`
  const statusText = item.approver_opinion || base.statusText || (Number(item.status) === 1 ? '审核通过' : '')
  const cover = item.cover || item.coverUrl || item.image || base.cover || createPlaceholderImage(title)
  const detailContent = normalizeList([
    item.description,
    item.introduction,
    item.content,
    item.approver_opinion,
    item.file_path,
    ...(Array.isArray(base.detailContent) ? base.detailContent : [])
  ])

  return {
    ...base,
    uid: item.uid || base.uid,
    title,
    desc,
    tags: normalizeList([
      ...(Array.isArray(base.tags) ? base.tags : []),
      item.model_type,
      item.alias,
      formatFileSize(item.file_size),
      statusText
    ]),
    cover,
    detailImage: item.detailImage || base.detailImage || cover,
    detailContent: detailContent.length ? detailContent : (desc ? [desc] : []),
    alias: item.alias || base.alias,
    modelType: item.model_type || base.modelType,
    status: item.status ?? base.status,
    statusText,
    createdAt: item.created_at || base.createdAt,
    updatedAt: item.updated_at || base.updatedAt,
    filePath: item.file_path || base.filePath,
    fileSize: item.file_size || base.fileSize,
    version: item.version || item.model_version || base.version,
    publisher: item.publisher || item.publisher_name || base.publisher
  }
}

const resolveDetailPayload = (res) => {
  if (res?.code !== 200 || !res.data) {
    return null
  }

  if (res.data.detail && typeof res.data.detail === 'object' && !Array.isArray(res.data.detail)) {
    return res.data.detail
  }

  if (res.data.data && typeof res.data.data === 'object' && !Array.isArray(res.data.data)) {
    return res.data.data
  }

  if (typeof res.data === 'object' && !Array.isArray(res.data)) {
    return res.data
  }

  return null
}

const getModelDetail = async () => {
  const fallbackCard = parseRouteCard()
  if (fallbackCard) {
    card.value = fallbackCard
  }

  if (!route.query.uid) {
    return
  }

  try {
    const res = await aiModelDetail({
      uid: route.query.uid
    })
    const detail = resolveDetailPayload(res)
    if (!detail) {
      return
    }
    card.value = buildDetailCard(detail, fallbackCard)
  } catch (error) {
    console.error('获取模型详情失败:', error)
  }
}

onMounted(() => {
  getModelDetail()
})

const goBack = () => {
  router.back()
}

const publisherText = computed(() => {
  return card.value?.publisher || '奥尔特云（深圳）科技有限公司'
})

const versionText = computed(() => {
  return card.value?.version || 'V1.2.6'
})

const statusText = computed(() => {
  return card.value?.statusText || '通过安全检测'
})

const installSteps = computed(() => {
  return card.value?.installSteps || [
    {
      title: '接入视频源',
      desc: '对接无人机视频流、巡检任务源与实时图传链路，完成算法运行前的输入绑定。'
    },
    {
      title: '加载算法包',
      desc: '将巡检算法容器或推理包部署到边缘节点，按场景启用目标检测、识别与告警规则。'
    },
    {
      title: '场景调优上线',
      desc: '根据工地、铁路、水库等不同场景进行阈值调优，验证效果后发布正式巡检任务。'
    }
  ]
})

const installCommand = computed(() => {
  return card.value?.installCommand || 'docker pull oortcloud/drone-inspection:latest\ndocker run -d --name drone-inspection -p 18080:8080 oortcloud/drone-inspection:latest'
})

const versionHistory = computed(() => {
  return card.value?.versionHistory || [
    {
      version: 'V1.2.6',
      date: '2026-05-10',
      desc: '优化无人机场景下的目标稳定性与小目标检出率，新增多行业巡检模板。'
    },
    {
      version: 'V1.2.0',
      date: '2026-03-18',
      desc: '补充光伏电网、河道水库和森林防火相关规则库，完善事件分类结果。'
    },
    {
      version: 'V1.0.0',
      date: '2025-12-06',
      desc: '首个正式版发布，支持无人机巡航图传接入、目标识别、告警联动与结果归档。'
    }
  ]
})
</script>

<style scoped>
.model-detail-page {
  min-height: 100vh;
  padding: 32px 24px 56px;
  background: #ffffff;
}

.detail-container {
  max-width: 1200px;
  margin: 0 auto;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  font-size: 18px;
}

.breadcrumb-line {
  font-weight: 700;
  width: 3px;
  color: #2f3136;
}

.breadcrumb-item {
  color: #8b93a0;
}

.breadcrumb-link {
  cursor: pointer;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: #2f80ff;
}

.breadcrumb-separator {
  color: #c0c4cc;
}

.breadcrumb-current {
  color: #2f3136;
  font-weight: 600;
}

.detail-body {
  padding: 4px 8px 8px;
}

.detail-intro {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  align-items: start;
  margin-bottom: 24px;
}

.detail-cover {
  height: 140px;
  overflow: hidden;
  border-radius: 12px;
  background: #f3f5f8;
}

.detail-cover img,
.detail-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.detail-summary h2 {
  margin: 0 0 12px;
  font-size: 22px;
  line-height: 1.2;
  color: #2f3136;
}

.detail-summary p {
  margin: 0 0 6px;
  font-size: 15px;
  line-height: 1.8;
  color: #59606b;
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 6px;
}

.detail-tag {
  padding: 3px 8px;
  border-radius: 4px;
  background: #f4f6f8;
  font-size: 14px;
  color: #8a8f98;
  line-height: 1.3;
}

.detail-use-btn {
  min-width: 112px;
  height: 40px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: #2f80ff;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.detail-use-btn:hover {
  background: #1a6ae8;
}

.detail-metrics {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  border: 1px solid #e7ecf3;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 28px;
}

.metric-card {
  min-height: 132px;
  padding: 18px 14px 16px;
  border-right: 1px solid #e7ecf3;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.metric-card:last-child {
  border-right: none;
}

.metric-card-icon {
  gap: 8px;
}

.metric-icon {
  height: 48px;
  object-fit: contain;
}

.metric-icon-company {
  width: 56px;
}

.metric-label {
  margin-bottom: 2px;
  font-size: 13px;
  color: #8b93a0;
}

.metric-value {
  font-size: 24px;
  font-weight: 700;
  color: #2f80ff;
  line-height: 1.2;
}

.metric-company {
  max-width: 142px;
  font-size: 16px;
  color: #2f3136;
  line-height: 1.35;
}

.metric-status {
  font-size: 15px;
  color: #2f3136;
  font-weight: 600;
}

.detail-tabs {
  display: flex;
  gap: 72px;
  margin-bottom: 18px;
  padding-left: 2px;
  border-bottom: 1px solid #e8edf3;
}

.detail-tab {
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: #2f3136;
  transition: color 0.2s ease;
}

.detail-tab.active {
  color: #2f80ff;
  font-weight: 500;
}

.detail-tab.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 3px;
  background: #2f80ff;
}

.detail-preview {
  height: 320px;
  overflow: hidden;
  border-radius: 12px;
  background: #f3f5f8;
  margin-bottom: 20px;
}

.detail-content p {
  margin: 0 0 14px;
  font-size: 15px;
  line-height: 1.95;
  color: #4b5563;
  text-align: justify;
}

.tab-panel {
  padding-top: 8px;
}

.install-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.install-card {
  position: relative;
  padding: 18px 18px 16px;
  border: 1px solid #e7ecf3;
  border-radius: 12px;
  background: #fbfcfe;
}

.install-index {
  width: 28px;
  height: 28px;
  margin-bottom: 14px;
  border-radius: 50%;
  background: #2f80ff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}

.install-card h3 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #2f3136;
}

.install-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #59606b;
}

.code-block {
  border-radius: 12px;
  background: #111827;
  overflow: hidden;
}

.code-title {
  padding: 12px 16px;
  background: #1f2937;
  color: #e5e7eb;
  font-size: 14px;
}

.code-block pre {
  margin: 0;
  padding: 16px;
  overflow: auto;
}

.code-block code {
  color: #d1fae5;
  font-size: 13px;
  line-height: 1.8;
  white-space: pre-wrap;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.history-item {
  display: grid;
  grid-template-columns: 128px 1fr;
  gap: 18px;
  padding: 18px;
  border: 1px solid #e7ecf3;
  border-radius: 12px;
  background: #fff;
}

.history-version {
  color: #2f80ff;
  font-size: 24px;
  font-weight: 700;
}

.history-date {
  margin-bottom: 8px;
  color: #8b93a0;
  font-size: 14px;
}

.history-body p {
  margin: 0;
  color: #4b5563;
  font-size: 15px;
  line-height: 1.85;
}

@media (max-width: 900px) {
  .detail-intro {
    grid-template-columns: 1fr;
  }

  .detail-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .model-detail-page {
    padding: 20px 16px 40px;
  }

  .breadcrumb {
    font-size: 16px;
  }

  .detail-summary h2 {
    font-size: 20px;
  }

  .detail-metrics {
    grid-template-columns: 1fr;
  }

  .metric-card {
    border-right: none;
    border-bottom: 1px solid #e7ecf3;
  }

  .metric-card:last-child {
    border-bottom: none;
  }

  .detail-preview {
    height: 220px;
  }

  .detail-tab {
    padding-bottom: 14px;
    font-size: 18px;
  }

  .detail-tabs {
    gap: 32px;
  }

  .detail-tab.active::after {
    width: 64px;
  }

  .install-grid {
    grid-template-columns: 1fr;
  }

  .history-item {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
