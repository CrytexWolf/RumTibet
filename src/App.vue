<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
</script>

<template> 
    <Header />
        <main class="main">
            <section class="intro">
                <div class="container">
                    <div class="intro__inner">
                        <h1 class="intro__title">Насладись прогулкой в горах
                            с командой единомышленников</h1>
                        <form class="intro__from">
                            <section class="intro__input--block">
                                <select class="intro__input" name="" id="">
                                    <option disabled value="">Локация для тура</option>
                                </select>
                                <span class="intro__subtitle">выберите из списка</span>
                            </section>
                            <section class="intro__input--block">
                                <input class="intro__input" type="text" placeholder="Дата похода">
                                <span class="intro__subtitle">укажите диапазон</span>
                            </section>
                            <section class="intro__input--block">
                                <select class="intro__input" name="" id="">
                                    <option disabled value="">Участники</option>
                                </select>
                                <span class="intro__subtitle">минимум 4 человека</span>
                            </section>
                            <a  class="intro__btn" href="#">Найти программу</a>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    <Footer />
</template>

<style scoped>
    .main {
        height: 100%;
    }
    .intro {
        background-image: url('./assets/img/bg-intro.png');
        background-size: cover;
    }

    .intro__inner {
        padding-top: 551px;
        padding-bottom: 82px;
    }

    .intro__title {
        font-family: 'NextArt heavy';
        font-size: 50px;
        letter-spacing: 0.02em;
        margin-bottom: 41px;
    }

    .intro__from {
        display: flex;
        justify-content: space-between;
        background-color: rgb(255, 255, 255, 0.2);
        padding: 40px;
        border-radius: 10px;
        flex-wrap: wrap;
    }

    .intro__input--block {
        display: flex;
        flex-direction: column;
        width: 25%;
    }

    .intro__input {
        width: 100%;
        height: 52px;

        border-radius: var(--border-10);
        background-color: rgb(255, 255, 255, 0.2);
        border: 1px solid #e1e3e4;
        color: #FDFDFD;
        margin-bottom: 8px;
        padding: 14px 16px;
    }

    .input__intro::placeholder,
    ::-webkit-input-placeholder,
    option {
        color: #FDFDFD;
        font-weight: 700;
        font-size: 16px;
    }

    .intro__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 213px;
        height: 52px;
        color: #1A3E3E;
        font-size: 16px;
        font-weight: 700;
        background-color: #FDFDFD;
        border-radius: var(--border-10);
    }

    @media (max-width: 1060px) {
        .intro__input--block {
            width: 45%;
            margin-bottom: 10px;
        }

        .intro__btn {
            width: 45%;
        }
    }
</style>
