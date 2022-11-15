<template>
  <div class="uk-container uk-container-small">
    <NavigationBar />
    <ProgressBar />
    <ProjectDetailCard />
    <BottomNavigationBar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import BottomNavigationBar from '@/components/BottomNavigationBar'
import ProgressBar from '@/components/ProgressBar'
import ProjectDetailCard from '@/components/ProjectDetailCard'

export default {
  components : { NavigationBar, BottomNavigationBar, ProgressBar, ProjectDetailCard },
}
</script>