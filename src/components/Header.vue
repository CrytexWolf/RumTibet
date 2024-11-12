<template>
    <header class="header">
        <div class="container">
            <section class="header__inner">
                <img src="/logo.svg" alt="">
                <nav class="header__nav">
                    <a class="header__nav--item" href="#">Главная</a>
                    <a class="header__nav--item" href="#">Про гида</a>
                    <a class="header__nav--item" href="#">Программа тура</a>
                    <a class="header__nav--item" href="#">Стоимость</a>
                    <a class="header__nav--item" href="#">Блог</a>
                    <a class="header__nav--item" href="#">Контакты</a>
                    <a class="header__nav--btn">Консультация</a>
                </nav>
            </section>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    .header__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header__nav--item {
        margin-right: 24px;
        font-size: clamp(14px, 5vh, 18px);
        color: #FDFDFD;
    }

    .header__nav--item:last-child {
        margin: 0;
    }

</style>