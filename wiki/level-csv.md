# level.csv

This document explains the structure and contents of the `level.csv` file, which plays a critical role in displaying songs on the song selection screen in Piano Tiles 2. The information in this file is based on the data defined in `music_json.csv`.

By understanding the structure and meaning of each field in `level.csv`, you can gain valuable insights into how songs are presented and categorized within the Piano Tiles 2 game.

### File Structure

The CSV file is organized with each line representing a song entry on the song selection screen. Each line contains various fields separated by commas.

## Field Descriptions

Here's a breakdown of each field in the CSV file:

-   **Id:** This field determines the order in which songs are displayed on the song selection screen.
-   **Mid:** This field references the unique music identifier defined in `music_json.csv`.
-   **Type:** This field indicates the type of song or level. Possible values include:
    -   `1`: Normal level
    -   `2`: Purchased level
    -   `3`: Arena level
    -   `10`: Class song
    -   `15`: Facebook song
    -   `16`: Popular song
-   **Lock:** This field specifies how the song is unlocked. Possible values include:
    -   `1`: Unlocked by reaching a specific level
    -   `2`: Unlocked by spending coins
    -   `13`: Unlocked by spending diamonds
    -   `14`: Unlocked by having a VIP subscription
    -   `15`: Unlocked through Facebook
    -   `16`: Unlocked by watching a video
    -   `17`: Unlocked by using a music key on a normal level song
    -   `18`: Unlocked by using a music key
    -   `19`: Unlocked through in-app purchase
    -   `22`: Unlocked by purchasing an album
-   **NeedLv:** This field specifies the level requirement needed to unlock the song, if applicable.
-   **NeedGold:** This field specifies the amount of coins needed to unlock the song, if applicable.
-   **NeedDiamond:** This field specifies the number of diamonds needed to unlock the song, if applicable.
-   **NeedCrow:** This field specifies the number of stars needed to unlock the song, if applicable.
-   **NeedCrow2:** This field specifies the number of crowns needed to unlock the song, if applicable.
-   **Musiclevel:** This field represents a calculated value based on the song's speed.
-   **RewarID:** This field is likely related to rewards associated with the song.
-   **LocalMusicVer:** This field indicates whether the song is a new addition.
-   **Recommend:** This field marks whether the song is recommended to players.
-   **MusicCard:** This field refers to the corresponding card displayed for the song in the game's interface.
-   **FavoriteRate:** This field represents the song's popularity rating.
-   **Playmark:** This field provides notes about the gameplay mechanics featured in the song. Possible values include:
    -   `1`: Black tiles
    -   `2`: Long tiles
    -   `3`: Double tiles
    -   `4`: Frenzy tiles (Combo tiles)
    -   `5`: Slider tiles
    -   `6`: Burst tiles
-   **Stylelabel:** This field provides notes about the song's style or genre. See the table below for possible values.
-   **Fallingrate:** This field is likely related to the speed at which tiles fall in the game.
-   **TID:** This field is currently unclear.
-   **GoldenSong:** This field indicates whether the song is considered a hard difficulty level. This information is used for a button on the game over screen that recommends playing a hard song.
-   **MusicTime:** This field contains a timestamp of when the song became available in the game.
-   **HomeOrder:** This field determines the song's order on the game's home screen.
-   **VipMusicVersion:** This field indicates the VIP subscription period associated with the song, if applicable.
-   **VipCn:** This field is related to handling VIP subscriptions in the Chinese version of the game.
-   **ProduceId:** This field likely refers to the product ID associated with the song for in-app purchases.
-   **card_selection:** This field specifies the filename of the card image used for in-app purchase songs.
-   **needvideo:** This field indicates whether watching a video is required to unlock the song.

### Style Label Values

The `Stylelabel` field uses numerical values to represent different musical styles or genres. Here's a table of possible values:

| Value | Style/Genre      |
| ----- | ---------------- |
| 1     | Folk Music       |
| 2     | Sonata           |
| 3     | Etude            |
| 4     | Art Song         |
| 5     | Nocturne         |
| 6     | March            |
| 7     | Dance Music      |
| 8     | Tango            |
| 9     | Piano Piece      |
| 10    | Symphony         |
| 11    | Variation        |
| 12    | Sonatina         |
| 13    | Serenades        |
| 14    | Rondo            |
| 15    | Ragtime          |
| 16    | Opera Overture   |
| 17    | Creative Music   |
| 18    | Humoresque       |
| 19    | Suite            |
| 20    | Unknown          |
| 21    | Impromptu        |
| 22    | Orchestral Music |
| 23    | Concerto         |
| 24    | Rhapsody         |
| 25    | Fugue            |
| 26    | Prelude          |
| 27    | Opera Excerpt    |
| 28    | Romance          |
| 29    | Ensemble Music   |
| 30    | Cello Suite      |
| 31    | Czardas          |
| 32    | Chinese Music    |
| 33    | Meditation       |
| 34    | Requiem          |
| 35    | Toccata          |
| 36    | Dream Music      |
| 37    | Interlude        |
| 38    | Religious Music  |
| 39    | Cantata          |
| 40    | Partita          |
| 41    | Capriccio        |
| 42    | Heavy            |
| 43    | Fast-paced       |
| 44    | Joyful           |
| 45    | Lively           |
| 46    | Lyrical          |
| 47    | Neutral          |
| 48    | Sad              |
| 49    | Bright           |
| 50    | Passionate       |
| 51    | Refreshing       |

## Usage

The information in `level.csv` is used by Piano Tiles 2 to determine the order in which songs are displayed on the song selection screen. It also specifies how each song is unlocked, whether it is purchaseable, and other relevant information for presenting songs to players. The game references this data to populate the song selection screen and provide appropriate information and options to players based on their progress and level.
