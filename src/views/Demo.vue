<template>
  <div class="uk-container uk-container-small">
    <NavigationBar />
    <DemoList />
    <BottomNavigationBar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import BottomNavigationBar from '@/components/BottomNavigationBar'
import DemoList from '@/components/DemoList'

export default {
  components : { NavigationBar, BottomNavigationBar, DemoList },
}
</script>