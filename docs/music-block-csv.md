# music_block.csv

This document describes the structure and contents of the `music_block.csv` file, which specifies songs that are blocked or removed from Piano Tiles 2 based on language and copyright considerations.

By understanding the structure and meaning of each field in `music_block.csv`, you can gain insights into the regional variations and copyright restrictions applied to songs within Piano Tiles 2.

### File Structure

The CSV file is organized with each line representing a specific language or region. Each line contains two fields separated by a comma.

## Field Descriptions

Here's a breakdown of each field in the CSV file:

-   **Language:** This field indicates the language or region code for which the song restrictions apply. For example, `AR` represents Arabic, `CN` represents Chinese, and so on.
-   **MidBlock:** This field lists the unique music identifiers (Mid) of songs that are blocked for the specified language or region. The identifiers are separated by pipe (|) symbols.
-   **MidOffShelves:** This field lists the unique music identifiers (Mid) of songs that have been removed from the game due to expired copyrights. The identifiers are separated by pipe (|) symbols.

## Usage

The information in `music_block.csv` is used by the game to determine which songs should be hidden or unavailable for players in different languages or regions. This allows for customization based on licensing and cultural considerations.
