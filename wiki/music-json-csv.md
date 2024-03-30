# music_json.csv

This document describes the structure and contents of the `music_json.csv` file, which defines information about songs in Piano Tiles 2.

By understanding the structure and meaning of each field in `music_json.csv`, you can gain valuable insights into the organization and properties of songs within Piano Tiles 2.

### File Structure

The CSV file is organized with each line representing a different song or level part. Each line contains several fields separated by commas.

## Field Descriptions

Here's a breakdown of each field in the CSV file:

-   **Id:** This field determines the song's order on the song selection screen; it also defines the separate parts of a level. These parts correspond to the `id` values within the `musics` array in the song's JSON file. For example, `101` represents `id: 1`, `102` represents `id: 2`, and so on.
-   **Mid:** This field contains a unique identifier for the music.
-   **BPM:** This field specifies the beats per minute for the song or level part.
-   **Ratio:** This field defines the base beat value for the song or level part.
-   **MusicJson:** This field indicates the filename of the corresponding JSON file for the song, located in the Piano Tiles 2 APK file at the path `/assets/res/song/{title}.json`.
-   **Musician:** This field lists the musician or composer of the song.
-   **Acceleration:** This field specifies the acceleration value for the song in the game's "Arena" mode.
-   **AniID:** This field refers to the index of the special effect used for the song.
-   **BridgeAniID:** This field refers to the index of the transition special effect used for the song.

## Usage

The information in `music_json.csv` is used by Piano Tiles 2 to define and manage the various songs and levels within the game. This includes details such as the song's unique identifier, tempo, base beat value, corresponding JSON file, musician, and special effects. The game references this data to display songs on the song selection screen, determine the order in which parts of a song are played, and apply appropriate gameplay settings based on the base beat value.
