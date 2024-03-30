# life.csv

This document describes the structure and contents of the `life.csv` file, which defines the relationship between player level and life (energy) system in Piano Tiles 2.

By understanding the structure and meaning of each field in `life.csv`, you can gain insights into the game's life system and its connection to player progression.

### File Structure

The CSV file is organized with each line representing a different player level. Each line contains four fields separated by commas.

## Field Descriptions

Here's a breakdown of each field in the CSV file:

-   **id:** This field represents a unique identifier for the level entry.
-   **lv:** This field indicates the player's level.
-   **Life:** This field specifies the maximum number of lives (energy points) a player has at the corresponding level.
-   **LifeRecovery:** This field specifies the rate at which lives regenerate per second at the corresponding level.

## Usage

The information in `life.csv` is used by the game to determine the maximum number of lives a player has and how quickly those lives regenerate based on their current level. This system limits the number of songs a player can attempt consecutively and encourages them to wait for lives to replenish or purchase additional lives.
