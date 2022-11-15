<template>
  <LoadingScreen v-if="isLoading" />
  <div class="uk-container uk-container-small" v-else>
    <NavigationBar />
    <ProjectCardList />
    <BottomNavigationBar />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import LoadingScreen from '@/components/LoadingScreen'
import NavigationBar from '@/components/NavigationBar'
import BottomNavigationBar from '@/components/BottomNavigationBar'
import ProjectCardList from '@/components/ProjectCardList'

export default {
  components : { NavigationBar, BottomNavigationBar, LoadingScreen, ProjectCardList },
  setup() {
    let isLoading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    })
    return { isLoading }
  }
}
</script>
