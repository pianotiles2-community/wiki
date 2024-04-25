# midi2json

Despite its name, `midi2json` doesn't actually produce JSON files. Instead, it converts quantized MIDI files into text files containing Piano Tiles 2 song notations. The notations can then be used to create custom levels in the game.

This guide will walk you through the process of using `midi2json`, from setting up the development environment to converting your MIDI files.

## Environment Setup (Windows)

::: tip

You can try using this tool directly in your web browser!

[Click here to open in a new tab.](https://pianotiles2-community.github.io/midi2json/)

:::

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
git clone https://github.com/Volian0/midi2json.git
```

## Compiling the Program

Navigate to the downloaded source code directory using the `cd` command:

```bash
cd midi2json
```

Run the following command to compile the source code into an executable:

```bash
g++ src/*.cpp src/midi/*.cpp -std=c++11 -o midi2json
```

This will create the `midi2json` executable in the current directory.

## Using the Program

### Converting MIDI to PT2 Song Notation

1. **Run the program:** You can double-click the executable or open the terminal and navigate to the `midi2json` directory. Then, run:

```bash
./midi2json
```

2. **Specify MIDI file:** The program will prompt you to enter the path to your MIDI file. Enter the path and press Enter.
3. **Optional settings:** You will be asked for optional settings:

-   **Ignore rests on MIDI track:** Choose a track number to ignore rests on, or 0 to disable.
-   **MIDI tick for Q:** This defines the length of a quarter note in MIDI ticks. The program will suggest a value based on the MIDI file, but you can adjust it if needed.
-   **MIDI track for 5<>:** This enables double tile notation using the specified track and tick value. Enter 0 to disable.

4. **Conversion:** The program will convert the MIDI file and create a text file with the PT2 song notation. The text file will have the same name as the MIDI file, but with the `.txt` extension.

## Troubleshooting

`midi2json` and the underlying MIDI library might display warnings and errors during conversion. Here's a table explaining some common messages:

| Message | Description | Solution |
| --- | --- | --- |
| `Wrong track number value.` | The MIDI file has no tracks. | Make sure your MIDI file is valid and contains at least one track. |
| `Wrong note range.` | The MIDI file contains notes outside the valid range. | Edit the MIDI file to ensure all notes are within the supported range. |
| `Wrong length value.` | The program encountered an unexpected note length value. | Make sure your MIDI file is quantized. |
| `Fatal error with 5<>!` | There's a problem with the double tile notation. | Ensure the specified track and tick values are correct. |
| `5<> not closed!` | The double tile notation is not properly closed in the song file. | Review the generated song file and ensure proper closing of the double tile notation. (e.g. `5<a[M],(insert-new-notes-here)[M]>,`) |
| `Duplicated note removed: ...` | The MIDI file contains duplicate notes at the same time. | The program will remove duplicates and issue a warning. You can review the generated song file and adjust if needed. |
