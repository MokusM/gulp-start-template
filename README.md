# Gulp - збірка MoiseievMykola

> Використовується Gulp 4

## Початок роботи

Для початку роботи зі стартовим шаблоном, потрібно склонувати цей репозиторій<br>
`git clone <this repo>`
Потім, знаходячись в корні проекту, запустити команду `npm i`, яка вставновить всі залежності з package.json.
Після цього ви можете використовувати будь яку команду зі збірки (всі файли потраплять в **app**): <br>
`gulp` - базова команда, яка запускає шаблон для розробки, використовує browser-sync

`gulp build` - команда для продакшн-збірки проекта. для того щоб фінально збирати проект в gulp файлі потрібно змінну isProd поставити true.

`gulp cache` - команда, яку варто запускаи після `gulp build`, якщо вам потрібно загрузити нові файли на хостинг без кешування.

`gulp zip` - команда збирає ваш готовий код в zip-архив.
