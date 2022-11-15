<template>
  <div class="uk-container uk-container-small">
    <NavigationBar />
    <NoticeTable />
    <BottomNavigationBar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import BottomNavigationBar from '@/components/BottomNavigationBar'
import NoticeTable from '@/components/NoticeTable'

export default {
  components : { NavigationBar, BottomNavigationBar, NoticeTable },
}
</script>