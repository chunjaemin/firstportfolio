<template>
    <div class="empty-box-250px"></div>
    <p class="ani-p">시작하기에 앞서서 상단의 <span class="red-color">배경음악재생과 <br>전체화면 </span> 한번만 부탁드립니다</p>
    <div class="empty-box"></div>
    <p class="ani-p">마우스 휠로 스크롤 하시는 것을 권장드립니다 <br> 감사합니다.</p>
    <div class="empty-box"></div>
    <p class="ani-p">안녕하세요!</p>
    <div class="empty-box"></div>
    <p class="ani-p">프론트엔드 개발자를 목표로 하고 있는 <br> 소프트웨어학부 전과 희망생 천재민입니다 </p>
    <div class="empty-box"></div>
    <p class="ani-p"> 코딩에 관심을 가지게 된 것은 올해 초쯤 이었으나, <br> 본격적으로 공부하게 된 것은 6월 전역이후 입니다</p>
    <div class="empty-box"></div>
    <p class="ani-p text-white">짧다고하면 짧을 수 있는 5개월 이지만 <br> 그동안 제가 해온 것들을 조금 소개해보고자 합니다</p>
    <div class="empty-box"></div>
    <p class="ani-p text-white">잘부탁드립니다</p>
    <div class="empty-box"></div>
</template>

<script>
import animation from '../animation.js';
export default{
    mounted(){
        animation.start()
    },
    data(){
        return{

        }
    }
}
</script>

<style>
@import '../css/TextAniMation.css';
@import '../css/App.css';
</style>