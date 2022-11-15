<template>
  <router-view/>
</template>

<script>
import {ChannelService} from '@/functions/ChannelService'
export default {
  setup() {
    // 채널톡 기능 불러오기
    const channelTalk = new ChannelService();
    // 채널톡 화면에 띄우기
    channelTalk.boot();
  }
}
</script>
