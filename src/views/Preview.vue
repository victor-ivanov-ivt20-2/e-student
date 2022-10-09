<template>
  <div class="preview container_preview">
    <span class="idea">IDEA CANVAS</span>
    <h1 class="title">E-Student</h1>
    <p>
      Наш проект помогает студентам, которые хотят максимально упростить процесс
      нахождения и обучения в ВУЗе.
    </p>
    <p>
      На платформе будет весь необходимый функционал для обеспечения комфортного
      протекания учебного процесса
    </p>
    <div class="bottom-info">
      <div class="team">
        <span class="team-title">КОМАНДА</span>
        <span class="team-name">laVIDA</span>
      </div>
      <div class="info">
        <img src="../assets/Preview/user-logo.svg" alt="" />
        <span>Основная аудитория - студенты.</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.preview {
  padding: 50px 140px 56px 125px;
}
.idea {
  background: #125cec;
  display: inline-block;
  font-weight: 600;
  font-size: 36px;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  text-align: center;
  color: #fff;
  padding: 17px 24px;
}
.title {
  font-weight: 600;
  font-size: 110px;
  line-height: 130px;
  color: #282828;
  font-style: normal;
  margin-top: 18px;
  letter-spacing: -5px;
  text-transform: capitalize;
}
p {
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #282828;
  margin-top: 40px;
  width: 596px;
}
.bottom-info {
  margin-top: 78px;
  display: flex;
  justify-content: space-between;
}
.team {
  display: flex;
  flex-direction: column;
}
.team-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #747474;
}
.team-name {
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #282828;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info span {
  width: 166px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #747474;
}
@media screen and (max-width: 1500px) {
  .preview {
    padding: 25px 25px 56px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    font-size: 72px;
    display: flex;
    justify-content: center;
  }
  p {
    font-size: 24px;
    width: inherit;
  }
  .header {
    display: none;
  }
}
</style>
