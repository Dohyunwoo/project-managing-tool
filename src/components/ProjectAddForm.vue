<template>
  <form action="/dashboard">
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">프로젝트 등록</legend>
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-type">프로젝트 유형</label>
        <div class="uk-form-controls">
          <select class="uk-select" id="form-stacked-type">
            <option>SI</option>
            <option>과제 사업</option>
            <option>내부</option>
          </select>
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-title">프로젝트 명</label>
        <div class="uk-form-controls">
          <input class="uk-input" id="form-stacked-title">
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">프로젝트 작업 담당</label>
        <div class="uk-form-controls">
          <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input class="uk-checkbox" type="checkbox"> 기획</label>
            <label><input class="uk-checkbox" type="checkbox"> 디자인</label>
            <label><input class="uk-checkbox" type="checkbox"> 개발</label>
            <label><input class="uk-checkbox" type="checkbox"> 운영</label>
            <label><input class="uk-checkbox" type="checkbox"> 추가 개발</label>
          </div>
        </div>
      </div>
      <div class="uk-margin">
        <div class="uk-form-label">프로젝트 작업 장소</div>
        <div class="uk-form-controls">
          <label class="uk-margin-right"><input class="uk-radio" type="radio" name="radio1"> 상주</label>
          <label><input class="uk-radio" type="radio" name="radio1"> 비상주</label>
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">담당자(PM)</label>
        <div class="uk-form-controls">
          <input class="uk-input" id="form-stacked-text" value="김승훈" disabled>
        </div>
      </div>
      <div style="font-size:14px;">클라이언트 담당자</div>
      <div class="uk-margin-bottom uk-grid-small" uk-grid>
        <div class="uk-width-1-4@s">
          <input class="uk-input" type="text" placeholder="25" aria-label="25" value="최인혁">
        </div>
        <div class="uk-width-1-2@s">
            <input class="uk-input" type="text" placeholder="50" aria-label="50" value="010-9999-9999">
        </div>
        <div class="uk-width-1-4@s">
            <input class="uk-input" type="text" placeholder="25" aria-label="25" value="대리">
        </div>
      </div>
      <div class="uk-margin">
        <div style="font-size:14px;">Worker</div>
        <ul class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s" uk-sortable="handle: .uk-card" uk-grid>
          <li>
            <button class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-example">
              <span class="uk-sortable-handle uk-margin-small-right uk-text-center" uk-icon="icon: plus-circle"></span>추가
            </button>
          </li>
        </ul>
      </div>
      <div id="modal-example" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <h2 class="uk-modal-title">Worker 선택</h2>
          <p>Worker 선택 화면 구성</p>
          <p class="uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-primary" type="button">Save</button>
          </p>
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-date">프로젝트 기간</label>
        <div class="uk-form-controls">
          <Datepicker id="form-stacked-date" v-model="date" range />
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-title">프로젝트 수주 비용</label>
        <div class="uk-form-controls">
          <input class="uk-input" id="form-stacked-title" type="number">
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">프로젝트 개요</label>
        <div class="uk-form-controls">
          <textarea class="uk-textarea" id="form-stacked-text" rows="5" placeholder="Textarea" aria-label="Textarea"></textarea>
        </div>
      </div>
      <div class="uk-margin">
        <div class="uk-form-controls" uk-form-custom="target: true">
          <input type="file" aria-label="Custom controls">
          <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" aria-label="Custom controls" disabled>
        </div>
        <button class="uk-button uk-button-default">Submit</button>
      </div>
      <div class="uk-margin uk-text-center">
        <button class="uk-button uk-button-primary uk-margin-right uk-button-large">등록</button>
        <button class="uk-button uk-button-danger uk-button-large">취소</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { Datepicker },
  setup() {
    const date = ref();
    onMounted(() => {
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        date.value = [startDate, endDate];
    })
    return { date }
  }
}
</script>