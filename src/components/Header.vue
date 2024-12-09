<template>
    <header class="header">
        <div class="container">
            <section class="header__inner">
                <img src="/logo.svg" alt="РУМТИБЕТ">
                <nav class="header__nav">
                    <a class="header__nav--item" href="#">Главная</a>
                    <a class="header__nav--item" href="#">Про гида</a>
                    <a class="header__nav--item" href="#">Программа тура</a>
                    <a class="header__nav--item" href="#">Стоимость</a>
                    <a class="header__nav--item" href="#">Блог</a>
                    <a class="header__nav--item" href="#">Контакты</a>
                    <a class="header__nav--btn">Консультация</a>
                </nav>
                <button class="burger-menu">
                    <span class="burger-item"></span>
                </button>
            </section>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 72px;
    }

    .header__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header__nav {
        display: flex;
        align-items: center;
    }

    .header__nav--item {
        margin-right: 24px;
        font-size: clamp(14px, 5vw, 18px);
    }

    .header__nav--item:last-child {
        margin: 0;
    }

    .header__nav--btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--border-10);
        width: 157px;
        height: 44px;
        background-color: #1A3E3E;
    }

    .burger-menu {
        display: none;
        padding: 9px 2px;
        background: none;
        border: 0;
        cursor: pointer;
    }
    .burger-item {
        display: block;
        width: 30px;
        height: 3px;
        background-color: #fff;

        font-size: 0;
        color: transparent;

        position: relative;
    }
    .burger-item::before,
    .burger-item::after {
        content: "";
        width: 100%;
        height: 100%;

        background-color: #fff;
        position: absolute;
        left: 0;
        z-index: 1;
    }
    .burger-item::before {
        top: -8px;
    }
    .burger-item::after {
        bottom: -8px;
    }

    @media (max-width: 1010px) {
        .header__nav {
            display: none;
        }

        .burger-menu {
            display: flex;
        }
    }

</style>