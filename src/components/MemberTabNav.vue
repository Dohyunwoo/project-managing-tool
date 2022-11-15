<template>
  <ul uk-tab style="margin-top:40px;margin-bottom:50px;">
    <li class="uk-active"><a href="#">전체</a></li>
    <li><a href="#">기획자</a></li>
    <li><a href="#">디자이너</a></li>
    <li>
      <a href="#">개발자 <span uk-icon="icon: triangle-down"></span></a>
      <div uk-dropdown="mode: click">
        <ul class="uk-nav uk-dropdown-nav">
          <li class="uk-active"><a href="#">백엔드</a></li>
          <li><a href="#">프론트엔드</a></li>
          <li><a href="#">인프라</a></li>
        </ul>
      </div>
    </li>
    <li><a href="#">운영</a></li>
    <li><a href="#">프리랜서(외주인원)</a></li>
  </ul>
</template>