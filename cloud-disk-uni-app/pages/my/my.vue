<template>
  <view>
    <view class="p-3 flex align-center">
      <image
        src="../../static/tabbar/me.jpg"
        style="width: 120rpx;height: 120rpx;"
        class=" flex-shrink mr-3"
      ></image>
      <view class="flex-1 flex flex-column text-muted font">
        <view class="flex align-end">
          <text class="font-lg text-dark mr-2">喝一杯芝麻糊</text>
     
        </view>
        <text class="text-ellipsis">芝麻糊</text>
      </view>
    </view>
    <view class="bg-light" style="height: 20rpx;"></view>
    <view class="p-3">
      <progress class="mb-3" percent="40" active stroke-width="3" />
      <view class="flex align-center justify-between font">
        <text class="text-light-muted">总：10GB</text>
        <text class="text-warning">已用：4GB</text>
      </view>
    </view>
    <view class="bg-light" style="height: 20rpx;"></view>
    <view class="flex justify-between p-3">
      <text class="text-muted font">设置</text>
      <image src="../../static/tabbar/右箭头.png" mode="" style="width:40rpx;height: 40rpx;"></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>