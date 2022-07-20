<<<<<<< HEAD
**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Список друзей

Необходимо создать компонент `<FriendList>`, с помощью которого мы могли бы
отображать информацию о друзьях пользователя. Информация о друзьях хранится в
файле [friends.json](./friends.json).

![Превью компонента FriendList](./preview.jpg)

## Описание компонента `<FriendList>`

Компонент должен принимать один проп `friends` - массив объектов друзей.

Компонент должен создавать DOM следующей структуры.

```html
<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul>
```

## Описание компонента `<FriendListItem>`

Компонент должен принимать несколько пропов:

- `avatar` - ссылка на аватар
- `name` - имя друга
- `isOnline` - буль сигнализирующий о состоянии друга, в сети или нет.

В зависимости от пропа `isOnline`, должен меняться цвет фона `span.status`. Это
можно сделать через разный CSS-класс или Styled Components.

Компонент должен создавать DOM следующей структуры.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

## Пример использования

```js
import friends from 'путь/к/friends.json';

<FriendList friends={friends} />,
```
=======
Описание компонента <FriendList>

Компонент должен принимать один проп friends - массив объектов друзей.

Компонент должен создавать DOM следующей структуры.

<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul>

Описание компонента <FriendListItem>

Компонент должен принимать несколько пропов:

    avatar - ссылка на аватар
    name - имя друга
    isOnline - буль сигнализирующий о состоянии друга, в сети или нет.

В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

Компонент должен создавать DOM следующей структуры.

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>

Пример использования

import friends from 'путь/к/friends.json';

<FriendList friends={friends} />,
>>>>>>> 2c2ec9d412d56a86e9d549f4f626708beaa6f4c3
