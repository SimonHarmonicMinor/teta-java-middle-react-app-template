# Java Course React App Template

Шаблон проекта на React для курса "Java Middle Разработчик".

Для запуска вам потребуется [NodeJS](https://nodejs.org/en/) (на момент написания,
LTS-версия `16.13.2`) Проект написан на [Typescript](https://www.typescriptlang.org/).

При разработке рекомендуется использовать IDEA или [VSCode](https://code.visualstudio.com/).

## Доступные скрипты

В директории проекта вы можете запустить следующие команды:

### `npm install`

Установить зависимости.

### `npm start`

Запустить приложение в dev-режиме. Откройте [http://localhost:3000](http://localhost:3000) адрес в
браузере, чтобы увидеть результат. Сервер поддерживает **hot-reload** вносимых изменений.

### `npm run lint`

Запустить линтовщик. Все изменения, которые могут быть исправлены автоматически, будут внесены
немедленно.

### `npm run build`

Собрать оптимизированную production-сборку приложения. Полученные файлы будут в директории `build`.

Больше про React читайте в [документации](https://reactjs.org/).

## О репозитории

Данный проект является шаблоном для UI финального задания курса "Java Middle разработчик". В
качестве библиотеки компонентов используется [Ant Design](https://ant.design/components/overview/).
Для выполнения HTTP-запросов - [axios](https://github.com/axios/axios).

Набор технологий не является обязательным и может быть изменен на любой другой.

### Запросы к backend

Все запросы выполняются к тому origin, на котором развернут проект (по
умолчанию [localhost:3000](http://localhost:3000)). Далее с помощью webpack-dev-server запросы
проксируются на [localhost:8080](http://localhost:8080) (порт по умолчанию для Spring Boot
приложений). Переопределить данную опцию можно в [package.json](package.json).

### Авторизация

В [base.ts](src/backend/base.ts) настроены два инстанса axios: `axiosNoAuth` и `axiosAuth`. Первый
отправляет запросы как обычно. Второй же ко всем запросам добавляет токен, который хранится в
[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Если HTTP-код
ответа равен 401, то `axiosAuth` также удаляет текущий токен. Пример реализации смотри
в [user.ts](src/backend/user.ts).

Если токен отсутствуют, все запросы перенаправляются на страницу
авторизации ([Auth.tsx](src/pages/Auth.tsx)).