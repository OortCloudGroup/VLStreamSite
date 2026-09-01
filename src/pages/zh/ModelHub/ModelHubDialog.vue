<template>
  <el-dialog
    :model-value="modelValue"
    class="algorithm-dialog"
    width="75%"
    align-center
    destroy-on-close
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #header>
      <div class="dialog-header">
        算法详情
      </div>
    </template>

    <div v-if="card" class="dialog-body">
      <div class="dialog-intro">
        <div class="dialog-cover">
          <img :src="card.cover" :alt="card.title" />
        </div>
        <div class="dialog-summary">
          <h2>{{ card.title }}</h2>
          <div class="dialog-tags">
            <span v-for="tag in card.tags" :key="tag" class="dialog-tag">{{ tag }}</span>
          </div>
          <p>{{ card.desc }}</p>
          <button type="button" class="dialog-use-btn">
            申请使用
          </button>
        </div>
      </div>

      <div class="dialog-metrics">
        <div class="metric-card metric-card-icon">
          <img class="metric-icon metric-icon-company" :src="metricCompanyIcon" alt="发布厂商" />
          <div class="metric-value metric-company">
            奥尔特云（深圳）科技有限公司
          </div>
        </div>
        <div class="metric-card metric-card-icon">
          <img class="metric-icon" :src="metricVersionIcon" alt="算法版本" />
          <div class="metric-value">
            V1.2.6
          </div>
        </div>
        <div class="metric-card metric-card-icon">
          <img class="metric-icon" :src="metricStatusIcon" alt="最近更新" />
          <div class="metric-value metric-status">
            通过安全检测
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

      <div class="dialog-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          class="dialog-tab"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <div v-if="activeTab === 'overview'" class="dialog-preview">
        <img :src="card.detailImage || card.cover" :alt="card.title" />
      </div>

      <div v-if="activeTab === 'overview'" class="dialog-content">
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
  </el-dialog>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import metricVersionIcon from '@/assets/img/Model_i.png'
import metricCompanyIcon from '@/assets/img/Model_o.png'
import metricStatusIcon from '@/assets/img/Model_q.png'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  card: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const tabs = [
  { key: 'overview', label: '概述' },
  { key: 'install', label: '安装方式' },
  { key: 'history', label: '版本历史' }
]

const activeTab = ref('overview')

watch(() => props.modelValue, (value) => {
  if (value) {
    activeTab.value = 'overview'
  }
})

watch(() => props.card, () => {
  activeTab.value = 'overview'
})

const installSteps = computed(() => {
  return props.card?.installSteps || [
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
  return props.card?.installCommand || 'docker pull oortcloud/drone-inspection:latest\ndocker run -d --name drone-inspection -p 18080:8080 oortcloud/drone-inspection:latest'
})

const versionHistory = computed(() => {
  return props.card?.versionHistory || [
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
.dialog-use-btn {
  border: none;
  cursor: pointer;
}

.dialog-header {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #2f3136;
}

.dialog-body {
  padding: 4px 8px 8px;
}

.dialog-intro {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  align-items: start;
  margin-bottom: 24px;
}

.dialog-cover {
  height: 140px;
  overflow: hidden;
  border-radius: 12px;
  background: #f3f5f8;
}

.dialog-cover img,
.dialog-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.dialog-summary h2 {
  margin: 0 0 12px;
  font-size: 22px;
  line-height: 1.2;
  color: #2f3136;
}

.dialog-summary p {
  margin: 0 0 6px;
  font-size: 15px;
  line-height: 1.8;
  color: #59606b;
}

.dialog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 6px;
}

.dialog-tag {
  padding: 3px 8px;
  border-radius: 4px;
  background: #f4f6f8;
  font-size: 14px;
  color: #8a8f98;
  line-height: 1.3;
}

.dialog-use-btn {
  min-width: 112px;
  height: 40px;
  padding: 0 18px;
  border-radius: 8px;
  background: #2f80ff;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}

.dialog-metrics {
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
  /*width: 48px;*/
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

.dialog-tabs {
  display: flex;
  gap: 72px;
  margin-bottom: 18px;
  padding-left: 2px;
  border-bottom: 1px solid #e8edf3;
}

.dialog-tab {
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

.dialog-tab.active {
  color: #2f80ff;
  font-weight: 500;
}

.dialog-tab.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 3px;
  background: #2f80ff;
}

.dialog-preview {
  height: 320px;
  overflow: hidden;
  border-radius: 12px;
  background: #f3f5f8;
  margin-bottom: 20px;
}

.dialog-content p {
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

:deep(.algorithm-dialog) {
  border-radius: 18px;
}

:deep(.algorithm-dialog .el-dialog__body) {
  padding-top: 4px;
}

:deep(.algorithm-dialog .el-dialog__header) {
  margin-right: 0;
  padding: 24px 24px 8px;
}

@media (max-width: 900px) {
  :deep(.algorithm-dialog) {
    width: calc(100vw - 24px) !important;
  }

  .dialog-intro {
    grid-template-columns: 1fr;
  }

  .dialog-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .dialog-header {
    font-size: 20px;
  }

  .dialog-summary h2 {
    font-size: 24px;
  }

  .dialog-metrics {
    grid-template-columns: 1fr;
  }

  .metric-card {
    border-right: none;
    border-bottom: 1px solid #e7ecf3;
  }

  .metric-card:last-child {
    border-bottom: none;
  }

  .dialog-preview {
    height: 220px;
  }

  .dialog-tab {
    padding-bottom: 14px;
    font-size: 18px;
  }

  .dialog-tabs {
    gap: 32px;
  }

  .dialog-tab.active::after {
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
