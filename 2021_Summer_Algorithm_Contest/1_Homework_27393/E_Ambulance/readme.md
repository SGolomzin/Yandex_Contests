# Скорая помощь

| Ограничение по времени |  Ограничение по памяти|
|--|--|
| 1 секунда | 64Mb |

Бригада скорой помощи выехала по вызову в один из отделенных районов. К сожалению, когда диспетчер получил вызов, он успел записать только адрес дома и номер квартиры **K1**, а затем связь прервалась. Однако он вспомнил, что по этому же адресу дома некоторое время назад скорая помощь выезжала в квартиру **K2**, которая расположена в подъезда **P2** на этаже **N2**. Известно, что в доме **M** этажей и количество квартир на каждой лестничной площадке одинаково. Напишите программу, которая вычисляет номер подъезда **P1** и номер этажа **N1** квартиры **K1**.

## Формат ввода

Во входном файле записаны пять положительных целых чисел **K1, M, K2, P2, N2**. Все числа не превосходят 10**6.

## Формат вывода

Выведите два числа **P1** и **N1**. Если входные данные не позволяют однозначно определить **P1** или **N1**, вместо соответствующего числа напечатайте 0. Если входные данные противоречивы, напечатайте два числа –1 (минус один).

### Пример 1

Ввод

    89 20 41 1 11

Вывод

    2 3

### Пример 2

Ввод

    11 1 1 1 1

Вывод

    0 1

### Пример 3

Ввод

    3 2 2 2 1

Вывод

    -1 -1