# Определить вид последовательности

| Ограничение по времени |  Ограничение по памяти|
|--|--|
| 1 секунда | 64Mb |

По последовательности чисел во входных данных определите ее вид:

-   **CONSTANT**  – последовательность состоит из  **одинаковых**  значений
-   **ASCENDING**  – последовательность является  **строго**  возрастающей
-   **WEAKLY ASCENDING**  – последовательность является  **нестрого**  возрастающей
-   **DESCENDING**  – последовательность является  **строго**  убывающей
-   **WEAKLY DESCENDING**  – последовательность является  **нестрого**  убывающей
-   **RANDOM**  – последовательность не принадлежит ни к одному из вышеупомянутых типов

## Формат ввода

По одному на строке поступают числа последовательности  a~i~, | a~i~ | ≤ 10^9^.  

Признаком окончания последовательности является число  -2× 10^9^.  Оно в последовательность не входит.

## Формат вывода

В единственной строке выведите тип последовательности.

### Пример 1

Ввод

    -530
    -530
    -530
    -530
    -530
    -530
    -2000000000
    
Вывод

    CONSTANT
