<template>
  <div class="uk-card uk-card-default uk-width-1-1 uk-margin-xlarge-bottom">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img class="uk-border-circle" width="50" height="50" src="@/assets/biznow-logo.svg" alt="로고" uk-svg>
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom uk-margin-small-bottom">클라우드 비대면 솔루션 제작</h3>
          <div class="uk-text-meta uk-margin-remove-top uk-margin-xsmall-bottom">총 개발 기간 : 2023년 1월 1일 ~ 2023년 7월 1일</div>
          <div class="uk-text-meta uk-margin-remove-top">디자인 작업 기간 : 2023년 4월 1일 ~ 2023년 5월 1일</div>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p class="uk-flex uk-flex-center uk-flex-around">
        <div class="uk-flex uk-flex-column uk-flex-center">
          <div class="uk-text-center uk-margin-bottom">디자인 논의</div>
          <circle-progress :percent="100" show-percent :size="100" />
        </div>
        <div class="uk-flex uk-flex-column uk-flex-center">
          <div class="uk-text-center uk-margin-bottom">디자인 작업</div>
          <circle-progress :percent="40" show-percent :size="100" />
        </div>
        <div class="uk-flex uk-flex-column uk-flex-center">
          <div class="uk-text-center uk-margin-bottom">디자인 수정</div>
          <circle-progress :percent="0" show-percent :size="100" />
        </div>
        <div class="uk-flex uk-flex-column uk-flex-center">
          <div class="uk-text-center uk-margin-bottom">디자인 완료</div>
          <circle-progress :percent="0" show-percent :size="100" />
        </div>
      </p>
    </div>
    <div class="uk-card-footer">
      <h3>담당자</h3>
      <article class="uk-comment" role="comment">
        <header class="uk-comment-header">
          <div class="uk-grid-medium uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
              <img class="uk-comment-avatar" src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTNfNTQg/MDAxNTg0MDcwMzE2MTA2.NYR99jIwGMCceGV4SlQGb9LkSAztEVEVFrLlE50JjIwg.8PAODnsmC0mahPwr3aewjll9Eof4V5L-FRmJ1lWAadIg.PNG.ourdreamis/image.png?type=w800" width="80" height="80" alt="">
            </div>
            <div class="uk-width-expand">
              <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">김순혁</a></h4>
              <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li><a href="#">CY 소속 디자이너</a></li>
                <li><a href="#">010-1234-1234</a></li>
                <li><a href="#">본사 근무</a></li>
              </ul>
            </div>
          </div>
        </header>
      </article>
      <article class="uk-comment" role="comment">
        <header class="uk-comment-header">
          <div class="uk-grid-medium uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
              <img class="uk-comment-avatar" src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MDVfNTAg/MDAxNTY3NjQ5OTMzODY4.fNMk2Lo4TmO5s1ojkavaHDRX1nlCKwVErKyjfWQYnOEg.Qr3WcCMA30yxv31pkC69CBwzlwX2z374WgXG-VBSlPAg.JPEG.neozion7/58003931_2387399978206401_1408838909055467520_n.jpg?type=w800" width="80" height="80" alt="">
            </div>
            <div class="uk-width-expand">
              <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">김슬기</a></h4>
              <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li><a href="#">프리랜서 디자이너</a></li>
                <li><a href="#">010-0000-0000</a></li>
                <li><a href="#">재택 근무</a></li>
              </ul>
            </div>
          </div>
        </header>
      </article>
    </div>
    <div class="uk-text-center">
      <button class="uk-button uk-button-secondary uk-width-1-3 uk-margin-right uk-margin-bottom ">수정</button>
      <button class="uk-button uk-button-primary uk-width-1-3 uk-margin-bottom ">다음</button>
    </div>
  </div>
</template>

<script>

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
  components: {CircleProgress}
}

</script>