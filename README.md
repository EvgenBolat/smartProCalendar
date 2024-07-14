# SmartProCalendar

В папкке [backendFolder](backendFolder) находится разработанный мною код серверной составляющей компонента – подключена postgresDB, для её запуска необходимо зайти в [application.yml](backendFolder/src/main/resources) и поменять данные бд на свои.
Остальная часть проекта является front-end частью.
Из функционала реализовано:
1. Открытие календаря;
2. Перемещение по месяцам;
3. Отображение выходных и сегодняшнего дня;
4. Отображение дней, у которых есть какие-либо события;
5. Возможность кликнуть на любую дату;
6. Отображение событий на каждом дне
7. Возможность поставить уведомление за день по почте (реализована как заглушка на сервере)
8. Возможность отменить уведомление за день по почте (реализована как заглушка на сервере)
9. Возможность вернуться на страницу лк студента
Синим цветом выделяются даты с событиями, ярко-красным – текущий день, бледно-красным – выходные. Все цвета условные и не относятся к реальному дизайну
