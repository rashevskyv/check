function checkSerial() {


    var x = document.getElementById("nxsn");
    if (x.validity.valid && x.value.length > 8) {
        var series = x.value.substring(1, 2).toUpperCase();
        var sn;

        var failed = '<div class="failed checker_p">Вразливість усунена</div><p>Ви не зможете прошити приставку методом <a href="https://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a>.</p><p>Перейдіть в <strong>Системні налаштування</strong> -> <strong>Система</strong> і зверніть увагу на пункт "<strong>Поточна версія системи</strong>". Якщо <strong>версія системного ПЗ на консолі 4.1.0</strong>, то її можна прошити за допомогою <a class="checker_a" href="http://switch.customfw.xyz/caffeine">Caffeine</a></p><img class="checker_img" src="http://check.customfw.xyz/img/system-version.jpg" alt="Версія системного ПЗ"><p>Якщо версія системного ПЗ вище зазначеної, то все що вам залишається - чіпування. </p><p><strong>Детальніше про чіпи <a href="https://switch.customfw.xyz/modchip">в керівництві</a>. Там же можна зробити замовлення.</strong></p>';

        var maybe = '<div class="maybe checker_p">Вразливість можливо усунена</div><p class="checker_p">Це означає, що неможливо визначити за допомогою серійного номера чи можна прошити приставку через <a class="checker_a" href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a> чи ні. Єдиний вірний спосіб, який допоможе зрозуміти прошивається ваша приставка чи ні без покупки чіпа - <a class="checker_a" href="http://switch.customfw.xyz/fusee-gelee">спробувати</a>. </p><p class="checker_p"><strong>Якщо вразливість присутня то приставка запустить переданий їй пейлоад.</strong> Якщо ні, екран залишиться чорним, хоча у вікні tegrarcmGUI і буде показано, що пейлоад прокинуто успішно. У лозі програми буде вказано значення <strong>0x0000</strong>. Це означає, що вашу приставку не можна прошити за допомогою <a class="checker_a" href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a></p><img class="checker_img" src="http://check.customfw.xyz/img/tegra.png"></p><p class="checker_p">Якщо це ваш випадок, то для вашої приставки підійде <strong>чіп SX Core.</strong></p><p class="checker_p"><strong>Детальніше про чіпи <a href="https://switch.customfw.xyz/modchip">в керівництві</a>. Там же можна зробити замовлення.</strong></p>';

        var passed = '<div class="passed checker_p">Вразливість присутня</div><p class="checker_p">Ви можете прошити свою приставку методом <a href="https://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a>. Для цього перейдіть за посиланням і уважно дотримуйтесь інструкції!';

        var new_revision = '<div class="new_revision checker_p">Ваша приставка нової ревізії і прошивається тільки за допомогою чіпа</div><p class="checker_p"><strong>Детальніше про чіпи <a href="https://switch.customfw.xyz/modchip">в керівництві</a>. Там же можна зробити замовлення.</strong></p>';

        var unknown = '<div class="unknown checker_p">Немає інформації по введеному серійному номеру</div><p class="checker_p">Перевірте, чи правильно ви ввели серійний номер</p><p class="checker_p">Якщо серійний номер все-таки введений вірно, значить серійників такого типу ще немає в нашій базі. Можливо, приставка випускалася ексклюзивно для китайського регіону. </p><p class="checker_p">У будь-якому випадку, якщо серійник введений вірно, то вашу приставку не можна прошити за допомогою <a class="checker_a" href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a>. Якщо це ваш випадок, то для вашої приставки підійде <strong>чіп SX Core.</strong></p><p class="checker_p"><strong>Детальніше про чіпи <a href="https://switch.customfw.xyz/modchip">в керівництві</a>. Там же можна зробити замовлення.</strong></p>';


        // $('.table__wrapper').slideUp(300);
        $('.check-result').removeClass('hidden')
        $('.checker_p').slideUp(300);
        $('.check-result').fadeIn(300);

        switch (series) {
            case 'K':
                document.querySelector(".check-result").innerHTML = new_revision;
            case 'J':
                document.querySelector(".check-result").innerHTML = new_revision;
            case 'T':
                document.querySelector(".check-result").innerHTML = new_revision;

            case 'A':
                var series = x.value.substring(1, 4).toUpperCase();
                var sn;
                switch (series) {
                    case 'AW1':
                        sn = x.value.substring(4, 8);
                        if (sn.localeCompare('012') >= 0) {
                            document.querySelector(".check-result").innerHTML = failed;
                        } else if (sn.localeCompare('0075') >= 0) {
                            document.querySelector(".check-result").innerHTML = maybe;
                        } else if (sn.localeCompare('0074') <= 0) {
                            document.querySelector(".check-result").innerHTML = passed;
                        } else {
                            document.querySelector(".check-result").innerHTML = unknown;
                        }
                        break;

                    case 'AW4':
                        sn = x.value.substring(4, 8);
                        if (sn.localeCompare('0012') >= 0) {
                            document.querySelector(".check-result").innerHTML = failed;
                        } else if (sn.localeCompare('0011') >= 0) {
                            document.querySelector(".check-result").innerHTML = maybe;
                        } else if (sn.localeCompare('0011') < 0) {
                            document.querySelector(".check-result").innerHTML = passed;
                        } else {
                            document.querySelector(".check-result").innerHTML = unknown;
                        }
                        break;

                    case 'AW7':
                        sn = x.value.substring(4, 9);
                        if (sn.localeCompare('003') >= 0) {
                            document.querySelector(".check-result").innerHTML = failed;
                        } else if (sn.localeCompare('00178') >= 0) {
                            document.querySelector(".check-result").innerHTML = maybe;
                        } else if (sn.localeCompare('00178') < 0) {
                            document.querySelector(".check-result").innerHTML = passed;
                        } else {
                            document.querySelector(".check-result").innerHTML = unknown;
                        }
                        break;

                    case 'AJ1':
                        sn = x.value.substring(4, 7);
                        if (sn.localeCompare('003') >= 0) {
                            document.querySelector(".check-result").innerHTML = failed;
                        } else if (sn.localeCompare('002') >= 0) {
                            document.querySelector(".check-result").innerHTML = maybe;
                        } else if (sn.localeCompare('002') < 0) {
                            document.querySelector(".check-result").innerHTML = passed;
                        } else {
                            document.querySelector(".check-result").innerHTML = unknown;
                        }
                        break;

                    case 'AJ4':
                        sn = x.value.substring(4, 10);
                        if (sn.localeCompare('0083') >= 0) {
                            document.querySelector(".check-result").innerHTML = failed;
                        } else if (sn.localeCompare('00532') < 0) {
                            document.querySelector(".check-result").innerHTML = passed;
                        } else if (sn.localeCompare('00533') >= 0) {
                            document.querySelector(".check-result").innerHTML = maybe;
                        } else {
                            document.querySelector(".check-result").innerHTML = unknown;
                        }
                        break;

                    case 'AJ7':
                        sn = x.value.substring(4, 9);
                        if (sn.localeCompare('00464') >= 0) {
                            document.querySelector(".check-result").innerHTML = failed;
                        } else if (sn.localeCompare('004') >= 0) {
                            document.querySelector(".check-result").innerHTML = maybe;
                        } else if (sn.localeCompare('004') < 0) {
                            document.querySelector(".check-result").innerHTML = passed;
                        } else {
                            document.querySelector(".check-result").innerHTML = unknown;
                        }
                        break;

                    case 'AW9':
                        document.querySelector(".check-result").innerHTML = '<div class="passed">Швидше за все це відновлена в Nintendo приставка <br>Як правило, вони прошиваються</div>';
                        break;

                    case 'AK1':
                        sn = x.value.substring(4, 10);
                        if (sn.localeCompare('0006') >= 0) {
                            document.querySelector(".check-result").innerHTML = failed;
                        } else if (sn.localeCompare('0006') < 0) {
                            document.querySelector(".check-result").innerHTML = passed;
                        } else {
                            document.querySelector(".check-result").innerHTML = unknown;
                        }
                        break;


                }

        }

    }
    else {
        if (x.value.length > 8) {
            document.querySelector(".check-result").innerHTML = "<b>Немає даних. Перевірте чи правильно введений серійний номер.</b>";
        }
    }
}
