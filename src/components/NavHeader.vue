<template>
  <div class="nav flexRowAC" :class="{navFixed:isSticky}">
    <div style="width: 300px;text-align: center;">
      <img class="navLogo" src="@/assets/VLimg2.0/logo1.png" alt="" />
    </div>
    <div class="flexRowAC nav_t">
      <div
        v-for="(item,i) in navList"
        :key="i"
        class="nav_title"
        :class="{nav_t_line:isActPath===item.path}"
        @click="navClick(item)"
      >
        <!--:class="{nav_t_line:isActPath===item.path}"-->
        {{ item.title }}
      </div>
    </div>
    <div class="flexRowAC nav_r">
      <el-dropdown v-if="langText" :hide-on-click="false" @command="toggleLang">
        <div class="flexRowAC langBox">
          <img class="demo_img" src="@/assets/VLimg/lang.png" alt="" />
          <div class="langBoxT">
            {{ langText }}
          </div>
          <el-icon color="#333">
            <CaretBottom />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh" :disabled="lang==='zh'">
              简体中文
            </el-dropdown-item>
            <el-dropdown-item command="en" :disabled="lang==='en'">
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="flexRowAC nav_r">
      <NuxtLink :to="Config.LoginURL" target="_blank">
        <div class="login_but">
          <span>登录/注册</span>
        </div>
      </NuxtLink>
      <el-popover placement="bottom" trigger="hover" popper-class="popover_panel">
        <template #reference>
          <img class="right_info_nine" src="@/assets/navheader/nightpointpng.png" />
        </template>
        <commonRightPoPover />
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, computed, watch, defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Config from '@/config/index.js'

const { locale, t } = useI18n()
let lang = ref('')
let langText = ref('')
const router = useRouter()
const route = useRoute()
const isActPath = computed(() => {
  let tempActive = route.path
  if (route.path === '/serviceExtend') {
    tempActive = '/service'
  }
  if (route.path === '/productworkUp' || route.path === '/productxoa' || route.path === '/productaPaas' || route.path === '/productmPaas') {
    tempActive = '/product'
  }
  if (route.path === '/zh/pc' || route.path === '/zh/hardwareJC' || route.path === '/zh/hardwareQJ' || route.path === '/zh/hardwareZQ' || route.path === '/zh/hardwareZY') {
    tempActive = '/zh/hardware'
  }
  console.log(route.path)
  return tempActive
})
const emit = defineEmits(['handle'])
const navList = ref([
  { title: '应用程序', path: '/zh/' },
  { title: 'Model Hub', path: '/zh/ModelHub/ModelHub' },
  { title: '行业', path: '/zh/service' },
  { title: '社区', path: '/zh/community', isExternal: true, externalUrl: 'https://github.com/OortCloudGroup' },
  { title: '硬件', path: '/zh/hardware' },
  { title: '定价', path: '/zh/tabs/price' },
  { title: '联系方式', path: '/zh/contactUs' }
])

const toggleLang = (val) => {
  lang.value = val === 'en' ? 'en' : 'zh'
  langText.value = val === 'en' ? 'English' : '简体中文'
}
const navClick = (item) => {
  emit('handle', item.path)

  // 如果是外部链接，直接打开新窗口
  if (item.isExternal) {
    window.open(item.externalUrl, '_blank') // _blank表示在新窗口打开
    return
  }
  router.push(item.path)
}

defineProps({
  isSticky: Boolean
})

watch(() => locale.value, () => {
  navList.value.forEach(item => {
    item.title = t('menu.' + item.path)
  })
})

onMounted(() => {
  lang = locale
  toggleLang(lang.value)
})

</script>

<style>

.popover_panel {
  width: 400px!important;
  background-color: #EDF3F9!important;
  border-radius: 10px!important;
}

.popover_panel .el-popper__arrow:before {
  background-color: #EDF3F9!important;
}

</style>

<style lang="less" scoped>
@import "src/assets/style/vars.less";
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}

.login_but:hover {
  background-color: #f75606;
}
.login_but {
  cursor: pointer;
  width: 132px;
  height: 44px;
  margin: 0 10px;
  border-radius: 2px;
  background-color: #FF5E10;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 24px;
    letter-spacing: 1px;
  }
}

.right_info_nine {
  width: 46px;
  height: 46px;
  margin: 0 12px;
  cursor: pointer;
  border-radius: 0;
  transition: border-radius 0.5s ease; /* 添加过渡效果 */
}

.right_info_nine:hover {
  border-radius: 50%;
}

.langBox {
  cursor: pointer;
  margin-left: 20px;
  background: rgba(216, 216, 216, 0.00);
  padding: 12px;
  border: 0.6px solid #333;

  .langBoxT {
    font-size: 14px;
    color: #333;
  }

  img.demo_img {
    width: 16px;
    height: 16px;
  }
}
.navFixed{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 82px;
  z-index: 10;
}

.nav_title::after {
  content: "";
  display: block;
  position: relative;
  width: 36px;
  margin: auto;
  top: 10px;
  border-bottom: 4px solid transparent;
}

.nav_t_line {
  color: #EB691C;
}

.nav_t_line::after {
  border-bottom: 4px solid #EB691C;
}

.more{
  margin-left: 20px;
  img{
    width: 46px;
    height: 46px;
  }
}

.nav {
  color: #5C5C5C;
  height: 82px;
  justify-content: space-between;
  padding: 0 220px;
  box-shadow: 0px 0px 4px 2px #f3f3f3;
  background-color: #fff;

  .nav_t {
    cursor: pointer;
    gap: 28px;
    width: 600px;
    font-size: 18px;
    color: #5C5C5C;
    font-weight: 700;
  }

  .nav_r {
    justify-content: end;
  }

  .navLogo {
    height: 48px;
    background-size: cover;
  }

  .demo_img {
    width: 24px;
    height: 24px;
    background-size: cover;
    margin-right: 8px;
  }
}

</style>
