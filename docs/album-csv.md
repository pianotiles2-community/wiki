# Album.csv

This document describes the structure and contents of the `Album.csv` file, which defines information about music albums in Piano Tiles 2.

By understanding the structure and meaning of each field in `Album.csv`, you can gain insights into how albums are organized and presented within Piano Tiles 2.

### File Structure

The CSV file is organized with each line representing a different album. Each line contains several fields separated by commas.

## Field Descriptions

Here's a breakdown of each field in the CSV file:

-   **AlbumId:** This field contains a unique identifier for the album.
-   **AlbumType:** This field specifies the type of album. Possible values include:
    -   `1`: VIP album
    -   `2`: Musician album
    -   `3`: Premium in-app purchase album
    -   `4`: Diamond album
    -   `5`: Coin album
-   **AlbumMusic:** This field lists the unique music identifiers (Mid) of songs included in the album. The identifiers are separated by pipe (|) symbols.
-   **AlbumName:** This field refers to the album's name, identified by its TID (translation identifier).
-   **AlbumTitle:** This field contains the album's main title, identified by its TID.
-   **AlbumSubtitle:** This field contains the album's subtitle, identified by its TID.
-   **Platform:** This field specifies the platforms on which the album is available or unavailable. Possible values include:
    -   `1`: Android Google Play
    -   `2`: Android China
    -   `3`: iOS
-   **Language:** This field specifies the languages in which the album is available or unavailable. Possible values include:
    -   `1`: English
    -   `2`: Chinese (Simplified)
    -   `3`: Chinese (Traditional)
    -   `4`: German
    -   `5`: French
    -   `6`: Dutch
    -   `7`: Norwegian
    -   `8`: Portuguese
    -   `9`: Turkish
    -   `10`: Spanish
    -   `11`: Italian
    -   `12`: Arabic
    -   `13`: Korean
    -   `14`: Japanese
    -   `15`: Russian
-   **AlbumCard:** This field refers to the filename of the card image used to represent the album in the game's interface.
-   **CardColor1:** This field specifies the primary color used for the album card.
-   **CardColorBG:** This field specifies the background color used for the album card.
-   **FontColorTitle:** This field specifies the font color used for the album title on the card.
-   **FontColorSub:** This field specifies the font color used for the album subtitle on the card.
-   **AlbumMark:** This field indicates whether the album is marked as new.
-   **AlbumScene:** This field specifies where the album is displayed in the game. Possible values include:
    -   `1`: Home screen
    -   `2`: Shop
-   **AlbumPrice:** This field specifies the price of the album, or the product ID if it is a musician or premium in-app purchase album.

## Usage

The information in `Album.csv` is used by the game to display and manage music albums within the game's interface. This includes details such as the album's name, artwork, price, and song list.
