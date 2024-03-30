# Understanding CSV

## What is CSV?

Imagine CSV as a simple way to organize information into rows and columns, like a spreadsheet. It's like a table where each row represents a different piece of information, and each column represents a different category.

## How CSV is Used

CSV is a common format for sharing data between different programs. It's easy to read and understand, even for people who aren't familiar with programming.

## Example of CSV

Here's an example of a CSV file that describes characters from the anime "Bocchi the Rock!":

```
Character Name,Age,Hair Color
Gotoh Hitori,15,Pink
Ikuyo Kita,15,Red
Ijichi Nijika,16,Yellow
Yamada Ryo,16,Blue
```

This CSV file can be represented as a table:

| Character Name | Age | Hair Color |
| -------------- | --- | ---------- |
| Gotoh Hitori   | 15  | Pink       |
| Ikuyo Kita     | 15  | Red        |
| Ijichi Nijika  | 16  | Yellow     |
| Yamada Ryo     | 16  | Blue       |

In this example, each row represents a different character, and each column represents a different piece of information about that character.

## Commas Inside Fields

Sometimes, the information in a CSV field might contain commas. To avoid confusion, you can enclose the field in quotation marks. For example:

```
Character Name,Age,Hair Color
"Gotoh, Hitori",15,Pink
"Ikuyo, Kita",15,Red
"Ijichi, Nijika",16,Yellow
"Yamada, Ryo",16,Blue
```

This CSV file can be represented as a table:

| Character Name | Age | Hair Color |
| -------------- | --- | ---------- |
| Gotoh, Hitori  | 15  | Pink       |
| Ikuyo, Kita    | 15  | Red        |
| Ijichi, Nijika | 16  | Yellow     |
| Yamada, Ryo    | 16  | Blue       |

This ensures that the CSV parser treats the entire field as a single value, even if it contains commas.
