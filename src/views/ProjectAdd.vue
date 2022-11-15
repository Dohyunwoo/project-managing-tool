<template>
  <div class="uk-container uk-container-small">
    <NavigationBar />
    <div style="margin-bottom:150px;">
      <ProjectAddForm />
    </div>
    <BottomNavigationBar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import BottomNavigationBar from '@/components/BottomNavigationBar'
import ProjectAddForm from '@/components/ProjectAddForm'

export default {
  components : { NavigationBar, BottomNavigationBar, ProjectAddForm },
}
</script>