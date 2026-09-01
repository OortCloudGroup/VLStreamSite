<template>
  <div class="model-hub-page">
    <div class="model-hub-panel">
      <div class="search-section">
        <el-input
          v-model="searchText"
          class="search-input"
          :prefix-icon="Search"
          placeholder="搜索内容"
          clearable
        />
      </div>

      <div v-if="keywords.length" class="keyword-section">
        <span class="keyword-label">关键字：</span>
        <button
          v-for="item in visibleKeywords"
          :key="item"
          type="button"
          class="keyword-chip"
          :class="{ active: activeKeyword === item }"
          @click="toggleKeyword(item)"
        >
          {{ item }}
        </button>
        <button v-if="keywords.length > 13" type="button" class="keyword-more" @click="showAllKeywords = !showAllKeywords">
          {{ showAllKeywords ? '收起' : '更多' }}
          <el-icon class="more-icon" :class="{ expanded: showAllKeywords }">
            <ArrowDown />
          </el-icon>
        </button>
      </div>

      <div v-if="categories.length" class="category-sticky-wrap">
        <div class="category-row">
          <button
            v-for="item in categories"
            :key="item.label"
            type="button"
            class="category-pill"
            :class="{ active: activeCategory === item.label, brand: item.isBrand }"
            @click="setCategory(item.label)"
          >
            <template v-if="item.isBrand">
              <span class="gree-mark">GREE格力</span>
            </template>
            <template v-else>
              {{ item.label }}
            </template>
          </button>
        </div>
      </div>

      <div class="card-grid">
        <template v-if="filteredCards.length">
          <article
            v-for="item in filteredCards"
            :key="item.uid || item.title"
            class="solution-card"
            :class="{ clickable: Boolean(item.uid || item.detailContent?.length) }"
            @click="openCardDetail(item)"
          >
            <div class="card-cover">
              <img :src="item.cover" :alt="item.title">
            </div>
            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <div class="scene-tags">
                <span v-for="tag in item.tags" :key="tag" class="scene-tag">{{ tag }}</span>
              </div>
              <p>{{ item.desc }}</p>
              <div class="card-brand">{{ item.modelType || item.alias || item.title }}</div>
            </div>
          </article>
        </template>
        <div v-else class="card-empty">暂无模型数据</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowDown, Search } from '@element-plus/icons-vue'
import { aiModelModelList } from '@/api/deploymentService'

const router = useRouter()

const searchText = ref('')
const showAllKeywords = ref(false)
const activeKeyword = ref('')
const activeCategory = ref('')
const cardList = ref([])

const keywords = [
  '城市管理',
  '工地',
  '监控室',
  '小区',
  '学校',
  '城市道路',
  '智能驾驶',
  '银行',
  '写字楼',
  '电焊车间',
  '后厨',
  '火车站',
  '交通枢纽',
  '光伏园区',
  '园区安防',
  '高危作业'
]

const categories = [
  { label: '智慧工业' },
  { label: '智慧城市' },
  { label: '智慧物联' },
  { label: '智慧零售' },
  { label: '智慧农业' },
  { label: 'GREE格力', isBrand: true }
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

const buildModelCard = (item) => {
  const title = item.name || item.alias || item.model_type || '未命名模型'
  const desc = item.description || `${title}模型`
  const statusText = item.approver_opinion || (Number(item.status) === 1 ? '审核通过' : '')
  const cover = item.cover || item.coverUrl || item.image || createPlaceholderImage(title)

  return {
    uid: item.uid,
    title,
    desc,
    category: item.model_type || '',
    keywords: normalizeList([item.alias, item.model_type, title]),
    tags: normalizeList([item.model_type, item.alias, formatFileSize(item.file_size), statusText]),
    cover,
    detailImage: cover,
    detailContent: normalizeList([item.description, item.approver_opinion]),
    alias: item.alias,
    modelType: item.model_type,
    status: item.status,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
    filePath: item.file_path,
    fileSize: item.file_size
  }
}

const visibleKeywords = computed(() => {
  return showAllKeywords.value ? keywords : keywords.slice(0, 13)
})

const filteredCards = computed(() => {
  const search = searchText.value.trim().toLowerCase()

  return cardList.value.filter((item) => {
    const tags = Array.isArray(item.tags) ? item.tags : []
    const itemKeywords = Array.isArray(item.keywords) ? item.keywords : []
    const matchesSearch = !search || [item.title, item.desc, ...tags, ...itemKeywords].filter(Boolean).join(' ').toLowerCase().includes(search)

    return matchesSearch
  })
})

const getModelList = async (keyword = '') => {
  try {
    const params = {
      page: 1,
      pageSize: 10
    }

    if (keyword) {
      params.keyword = keyword
    }

    const res = await aiModelModelList(params)

    if (res?.code !== 200 || !Array.isArray(res?.data?.list)) {
      cardList.value = []
      return
    }

    cardList.value = res.data.list.map(buildModelCard)
  } catch (error) {
    console.error('获取模型列表失败:', error)
    cardList.value = []
  }
}

const toggleKeyword = async (keyword) => {
  const nextKeyword = activeKeyword.value === keyword ? '' : keyword
  activeKeyword.value = nextKeyword
  activeCategory.value = ''
  await getModelList(nextKeyword)
}

const setCategory = async (label) => {
  const nextKeyword = activeCategory.value === label ? '' : label
  activeCategory.value = nextKeyword
  activeKeyword.value = ''
  await getModelList(nextKeyword)
}

const openCardDetail = (item) => {
  if (!item || (!item.uid && !(item.detailContent && item.detailContent.length))) {
    return
  }

  router.push({
    path: '/zh/ModelHub/ModelHubDetail',
    query: {
      uid: item.uid || '',
      card: JSON.stringify(item)
    }
  })
}

onMounted(() => {
  getModelList()
})
</script>

<style scoped>
.model-hub-page {
  min-height: 100%;
  padding: 28px 24px 56px;
  background: #ffffff;
}

.model-hub-panel {
  max-width: 1060px;
  margin: 0 auto;
}

.search-section {
  margin-bottom: 18px;
}

.search-input :deep(.el-input__wrapper) {
  height: 52px;
  padding: 0 18px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #e8edf3 inset;
}

.search-input :deep(.el-input__inner) {
  font-size: 18px;
}

.search-input :deep(.el-input__prefix-inner) {
  font-size: 18px;
  color: #a8b0ba;
}

.keyword-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 18px;
  row-gap: 12px;
  margin-bottom: 82px;
}

.keyword-label {
  font-size: 15px;
  font-weight: 600;
  color: #6b7280;
}

.keyword-chip,
.keyword-more,
.category-pill {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.keyword-chip {
  font-size: 15px;
  color: #3f3f46;
  transition: color 0.2s ease;
}

.keyword-chip:hover,
.keyword-chip.active {
  color: #ff6a13;
}

.keyword-more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 15px;
  color: #ff6a13;
}

.more-icon {
  font-size: 14px;
  transition: transform 0.2s ease;
}

.more-icon.expanded {
  transform: rotate(180deg);
}

.category-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.category-sticky-wrap {
  position: sticky;
  top: 82px;
  z-index: 20;
  margin: 0 -12px 12px;
  padding: 10px 12px 12px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
}

.category-row {
  gap: 12px;
}

.category-pill {
  height: 44px;
  padding: 0 28px;
  border: 1px solid #e7eaf0;
  border-radius: 10px;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #444;
  transition: all 0.2s ease;
}

.category-pill.active {
  color: #ff6a13;
  background: #fff1e9;
  border-color: #ffd7c2;
}

.category-pill.brand {
  min-width: 160px;
}

.gree-mark {
  font-style: italic;
  font-weight: 700;
  color: #1a4ca0;
  letter-spacing: 0.5px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.card-empty {
  grid-column: 1 / -1;
  padding: 56px 20px;
  border: 1px dashed #d8e0eb;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: #8a8f98;
  background: #fbfcfe;
}

.solution-card {
  overflow: hidden;
  border: 1px solid #e8edf3;
  border-radius: 10px;
  background: #fff;
}

.solution-card.clickable {
  cursor: pointer;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.solution-card.clickable:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(19, 30, 54, 0.1);
  border-color: #d8e0eb;
}

.card-cover {
  height: 190px;
  overflow: hidden;
  background: #f3f5f8;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 16px 16px 14px;
}

.card-content h3 {
  margin: 0 0 16px;
  font-size: 24px;
  line-height: 1.2;
  color: #2f3136;
}

.scene-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.scene-tag {
  padding: 3px 8px;
  border-radius: 4px;
  background: #f4f6f8;
  font-size: 14px;
  color: #8a8f98;
  line-height: 1.3;
}

.card-content p {
  margin: 0 0 16px;
  min-height: 84px;
  font-size: 15px;
  line-height: 1.75;
  color: #535862;
}

.card-brand {
  font-style: italic;
  font-size: 18px;
  font-weight: 700;
  color: #1a4ca0;
}

@media (max-width: 1100px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .model-hub-page {
    padding: 20px 16px 40px;
  }

  .keyword-section {
    margin-bottom: 40px;
  }

  .category-sticky-wrap {
    top: 0;
    margin-left: -8px;
    margin-right: -8px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .category-pill {
    height: 40px;
    padding: 0 16px;
    font-size: 15px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .card-content h3 {
    font-size: 20px;
  }

  .card-content p {
    min-height: auto;
  }
}
</style>
