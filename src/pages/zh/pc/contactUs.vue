<template>
  <div class="page_container">
    <div class="cu_page">
      <div class="cu_title">
        {{ $t('contactUs.Online') }}
      </div>
      <div class="flexRowAC themeGap">
        <div class="theme heightbg flexRowAC">
          {{ $t('contactUs.Theme') }}
          <span class="red">*</span>
          <el-input v-model="value" class="themeInput" placeholder="" />
        </div>
        <div class="acomp heightbg flexRowAC">
          {{ $t('contactUs.company') }}
          <el-input v-model="value" class="themeInput" placeholder="" />
        </div>
      </div>
      <div class="flexRowAC themeGap">
        <div class="nameT heightbg flexRowAC">
          {{ $t('contactUs.Name') }}
          <span class="red">*</span>
          <el-input v-model="value" class="themeInput" placeholder="" />
        </div>
        <div class="nameT heightbg flexRowAC">
          {{ $t('contactUs.address') }}
          <span class="red">*</span>
          <el-input v-model="value" class="themeInput" placeholder="" />
        </div>
        <div class="nameT heightbg flexRowAC">
          {{ $t('contactUs.Telephone') }}
          <span class="red">*</span>
          <el-input v-model="value" class="themeInput" placeholder="" />
        </div>
      </div>
      <div class="cu_mess heightbg">
        {{ $t('contactUs.Message') }}
        <div>
          <el-input v-model="value" class="themeInput" placeholder="" />
        </div>
      </div>
      <div class="cu_submit">
        {{ $t('contactUs.Submit') }}
      </div>
      <div class="cu_map">
        <div class="cu_mapTBox flexRowAC">
          <el-icon size="28" color="#fff">
            <LocationFilled />
          </el-icon>
          <div class="cu_mapText">
            {{ $t('contactUs.Technology') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let value = ref('')
</script>

<style scoped lang="less">
@import "src/assets/style/vars.less";
.cu_mapTBox {
  position: absolute;
  //left: 40px;
  //bottom: 42px;
  height: 300px;
  width: 100%;
  padding: 40px;
  align-items: flex-end;
  background-image: linear-gradient(180deg, rgba(11,22,43,0.00) 46%, rgba(11,22,43,0.50) 100%);
  bottom: 0;
  .cu_mapText {
    padding-left: 12px;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: 400;
  }
}
.themeInput {
  width: auto;
  background-color: transparent;
}

:deep .el-input__wrapper {
  background-color: transparent;
  border: 0px;
  box-shadow: 0 0 0 0px;
  padding-left: 20px;
  font-size: 18px;
}

.page_container {
  background-color: #fff;
}

.red {
  color: red;
}

.cu_page {
  width: 1488px;
  margin: 0 auto;
  padding-bottom: 150px;
}

.cu_title {
  align-items: flex-start;
  padding-top: 150px;
  padding-bottom: 16px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 48px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 700;
}

.heightbg {
  height: 52px;
  line-height: 52px;
  font-size: 16px;
  color: #999999;
  padding-left: 16px;
  background-color: #F7F7F9;
}

.themeGap {
  padding-top: 30px;
  gap: 30px;
}

.theme {
  width: 982px;
}

.acomp {
  flex: 1;
}

.nameT {
  width: 476px;
}

.cu_mess {
  margin-top: 30px;
  font-size: 16px;
  color: #999999;
  padding-left: 16px;
  height: 210px;
}

.cu_submit {
  cursor: pointer;
  width: 210px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: #EB691C;
  color: #fff;
  margin-top: 40px;
}

.cu_map {
  margin-top: 100px;
  height: 680px;
  width: 100%;
  background-color: #f7f7f7;
  background-image: url("@/assets/VLimg/map.png");
  background-size: 100% 100%;
  position: relative;
}
</style>
