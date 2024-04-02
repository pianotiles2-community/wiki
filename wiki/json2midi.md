# json2midi

`json2midi` is a handy tool that allows you to convert your custom Piano Tiles 2 songs, created in JSON format, into MIDI files. This opens up a world of possibilities, letting you share your creations with others, edit them in music software, or even play them on real instruments.

This guide will walk you through the process of using `json2midi`, from setting up the development environment to converting your songs.

## Environment Setup (Windows)

### Download and Install MSYS2

-   Visit the MSYS2 website: https://www.msys2.org/
-   Download the 64-bit installer (`.exe`) for your Windows version.
-   Run the installer and follow the on-screen instructions. Choose a default installation path (like `C:\msys64`) for simplicity.

### Update MSYS2 Packages

-   Open a new MSYS2 terminal (search for "MSYS2 MSYS" in the Start menu).
-   Update the package database:

```bash
pacman -Syu
```

### Install C++ Development Tools and Git

Install the essential C++ development tools and Git using the `pacman` package manager:

```bash
pacman -S --needed base-devel mingw-w64-x86_64-toolchain git
```

## Getting the Source Code

Use the `git clone` command to download the source code:

```bash
git clone https://github.com/Volian0/json2midi.git
```

## Compiling the Program

Navigate to the downloaded source code directory using the `cd` command:

```bash
cd json2midi
```

Run the following command to compile the source code into an executable:

```bash
g++ src/*.cpp -std=c++11 -o json2midi
```

This will create the `json2midi` executable in the current directory.

## Using the Program

### Command-line arguments

`json2midi` accepts the following arguments:

-   **`song.json`:** The path to your Piano Tiles 2 song file in JSON format.
-   **`auto` (optional):** This tells the program to use automatic mode, assuming the JSON file contains "bpm" and "baseBeats" values.
-   **`[bpm1] [baseBeats1] [bpm2] [baseBeats2] ...` (optional):** These are used for manual mode, where you specify the "bpm" and "baseBeats" values for each part of the song.

### Converting JSON to MIDI

1. **Automatic mode:** If your JSON file contains "bpm" and "baseBeats" values, simply run:

```bash
./json2midi song.json
```

2. **Manual mode:** If you need to specify "bpm" and "baseBeats" values yourself, run:

```bash
./json2midi song.json [bpm1] [baseBeats1] [bpm2] [baseBeats2] ...
```

### Batch conversion using a CSV file

If you have a CSV file containing information about multiple songs (e.g., music_json.csv), you can convert them all at once:

```bash
./json2midi music_json.csv
```

This will convert each song listed in the CSV file.

## Troubleshooting

`json2midi` will display warnings and errors during conversion. Here's a table explaining some common messages:

| Message | Description | Solution |
| --- | --- | --- |
| `Track is too long` | A track in your song is longer than the first track. | The program will automatically shrink the track to match the length of the first track. |
| `Track is shorter than the first track` | A track is shorter than the first track. | The program will add silence to the end of the track to match the length of the first track. |
| `Problem with operators` | There's an issue with the operators used in your song. | Don't mix operators with others. |
| `Couldn't parse ...` | The program couldn't understand a specific element in your song. | Use valid syntax and note names. |
| `Wrong BaseBeats` | The `baseBeats` value is invalid. | Use a valid `baseBeats` value. |
| `Dividing by 0` | The BPM value is 0, which is not allowed. | Set a valid BPM value for the part. |
| `Invalid CSV` | The CSV file format is incorrect. | Ensure the CSV file is formatted correctly and contains the required information. |
