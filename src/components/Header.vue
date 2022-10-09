<template>
  <header class="header">
    <div class="container">
        <div class="header__menu">
            <router-link to="/e-student/">
                <img src="" alt="ЛОГО">
            </router-link>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link to="/e-student/lenta">Лента</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/e-student/student-work">СРС</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/e-student/profile">Иванов В.А.</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style>
.header {
    border-bottom: 1px solid #cecece;
    margin-bottom: 50px;
}
.menu__list {
    display: flex;
    gap: 50px;
}
.header__menu {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>