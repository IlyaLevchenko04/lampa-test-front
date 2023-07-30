# lampa-test-front

**Цей проект було виконано за допомогую React.js та TypeScript.**

Як запустити:

```sh
npm start
```

Це Single page Application з 4 роутами.
**1)** /products - тут можна побачити роут з усіма продуктами, які можна додати до себе у кошик, натиснувши на зелену кнопку buy.

**2)** /cart - корзина з товарами, де знаходиться форма для замовлення та усі товари, кількість кожного товару можна додати, або прибрати взагалі товар з корзини.

**3)** /login - форма для юзерів, що вже зареєстровані в базі данних. Зліва біля лого можна буде побачити привітання.

**4)** /register - форма для реєстрації нових юзерів.

Як back-end я використовував своє API[документація - https://products-api-umhe.onrender.com/api-docs].

Для збереження замовлень я використовував localStorage, тому що на беці не було логіки збереження замовлень. Також в localStorage зберігаються jwt ключі для рефрешу та аксесу, а також товари, що були у кошику в момент перезавантаження сторінки та їх кількість.

Був використаний redax toolkit, що був централізованим стейтом для усьої апки.

Для більш легкого користування формами використовував бібліотеку react-hook-form.

Для стилізації були використані styled-components.

Код викладений на гітхаб, та піднята сторінка за допомогою gitHub Pages[https://ilyalevchenko04.github.io/lampa-test-front/].