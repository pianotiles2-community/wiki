# Adding Your Level to Piano Tiles 2

This guide will walk you through the process of adding your own custom song to Piano Tiles 2.

## Create the JSON File

First, you need to create a JSON file that represents your song. This file will contain information about the song's structure, tempo, and tile sequences. Refer to the ["Creating Your First Piano Tiles 2 Song" guide](/creating-your-first-piano-tiles-2-song.md) for detailed instructions on how to write the JSON file for your song.

Songs are stored in the `assets/res/song` directory.

## Update the CSV Files

Next, you need to update three CSV files within the APK to register your custom song:

### A. music_json.csv

1. Open the [`music_json.csv`](/music_json.csv.md) file located in the `assets/res/DB` folder within the APK.
2. Add a new line anywhere of the file for your song.
3. Fill in the fields according to the following example:

::: code-group

```[CSV]
Id,Mid,BPM,,Ratio,MusicJson,Musician,Acceleration,AniID,BridgeAniID
101,100001,85,0.5,170,Little Star,English Folk Music,,1024001,2048001
102,100001,90,0.5,180,Little Star,,,1024002,2048002
103,100001,94,0.5,188,Little Star,,,1024008,
201,100002,105,0.5,210,Jingle Bells,James Lord Pierpont,,,
202,100002,110,0.5,220,Jingle Bells,,,,
203,100002,115,0.5,230,Jingle Bells,,,,
301,100003,63,0.25,252,Canon,Johann Pachelbel,,,
302,100003,63,0.25,252,Canon,,,,
303,100003,64,0.25,256,Canon,,,,
...
...
...
3301,100428,100,0.5,200,Piano Tiles,Congfei Wei,,, // [!code ++]
3302,100428,100,0.5,200,Piano Tiles,,,, // [!code ++]
3303,100428,100,0.5,200,Piano Tiles,,,, // [!code ++]
```

```[Formatted]
Id   Mid    BPM           Ratio MusicJson    Musician            Acceleration AniID   BridgeAniID
--   ---    --- --------- ----- ---------    --------            ------------ -----   -----------
101  100001 85  0.5       170   Little Star  English Folk Music               1024001 2048001
102  100001 90  0.5       180   Little Star                                   1024002 2048002
103  100001 94  0.5       188   Little Star                                   1024008
201  100002 105 0.5       210   Jingle Bells James Lord Pierpont
202  100002 110 0.5       220   Jingle Bells
203  100002 115 0.5       230   Jingle Bells
301  100003 63  0.25      252   Canon        Johann Pachelbel
302  100003 63  0.25      252   Canon
303  100003 64  0.25      256   Canon
...
...
...
3301 100428 100 0.5       200   Piano Tiles  Congfei Wei // [!code ++]
3302 100428 100 0.5       200   Piano Tiles // [!code ++]
3303 100428 100 0.5       200   Piano Tiles // [!code ++]
```

:::

-   **3301:** This is the `Id` value, determining the song's order on the song selection screen.
-   **100428:** This is the unique music identifier (`Mid`). Choose a unique number for your song.
-   **100:** This is the BPM (beats per minute) for the song.
-   **0.5:** This is the `baseBeats` value, which affects the duration and speed of falling tiles.
-   **200:** This is the calculated `Musiclevel` value.
-   **Piano Tiles:** This is the song title.
-   **Congfei Wei:** This is the song's musician.

:::tip

Remember, `Id` values less than 70101 represent levels unlocked by player level, while values greater than or equal to 70101 represent selection levels.

:::

### B. level.csv

1. Open the [`level.csv`](/level.csv.md) file located in the `assets/res/DB` folder within the APK.
2. Add a new line anywhere of the file for your song.
3. Fill in the fields according to the following example:

::: code-group

```[CSV]
Id,Mid,Type,Lock,NeedLv,NeedGold,NeedDiamond,NeedCrow,NeedCrow2,Musiclevel,RewarID,LocalMusicVer,Recommend,MusicCard,FavoriteRate,Playmark,Stylelabel,Fallingrate,TID,,GoldenSong,MusicTime,HomeOrder,VipMusicVersion,VipCn,ProduceId,card_selection,needvideo
1,100001,1,1,1,,,,,1,1,,,,50,1,1,,song_tag_1,1,,,,,,,,
2,100002,1,1,2,,,,,2,2,,,,97,1,1,,song_tag_1,1,,,,,,,,
3,100003,1,1,2,,,,,2,2,,1,,112,2,25,,song_tag_8,1,,,,,,,,
4,100004,1,1,2,,,,,2,2,,,,66,2,1,,song_tag_1,1,,,,,,,,
5,100441,1,2,2,300,,,,5,4,1,,,129,2,9,,song_tag_22,1,1,,,,,,,4
...
41,100428,1,2,9,850,,,,3,30,1,,,143,1,9,,song_tag_22,1,1,,,,,,,4 // [!code ++]
```

```[Formatted]
Id Mid    Type Lock NeedLv NeedGold NeedDiamond NeedCrow NeedCrow2 Musiclevel
-- ---    ---- ---- ------ -------- ----------- -------- --------- ----------
1  100001 1    1    1                                              1
2  100002 1    1    2                                              2
3  100003 1    1    2                                              2
4  100004 1    1    2                                              2
5  100441 1    2    2      300                                     5
...
41 100428 1    2    9      850                                     3 // [!code ++]
```

:::

-   **41:** This is the `Id` value. It determines the song's order on the song selection screen.
-   **100428:** This should be the same unique music identifier (`Mid`) you used in `music_json.csv`.
-   **1** - This is the `Type` value. It indicates that this is a normal level.
-   **2** - This is the `Lock` value. It indicates that this is unlockable by spending coins.
-   **9** - This is the `NeedLv` value. It specifies the level requirement needed to unlock the song.
-   **3** - This is the `Musiclevel` value. It represents a calculated value based on the song's speed.

::: tip

Remember, `Id` values less than 701 represent levels unlocked by player level, while values greater than or equal to 701 represent selection levels.

:::

### C. language_music.csv

1. Open the [`language_music.csv`](/language_music.csv.md) file located in the `assets/res/DB` folder within the APK.
2. Add a new line anywhere of the file for your song title and another line for the musician.
3. Fill in the fields according to the following examples:

**Song Title:**

```
,TID,CN,TW,EN,ES,RU,PO,DE,KR,JP,FR,IT,AR,TR,IN
1,Little Star,小星星,小星星,Little Star,Little Star,Маленькая звезда,Little Star,Kleiner Stern,반짝반짝 작은별,Little Star,Little Star,Little Star,نجمة صغيرة,Little Star,Little Star
```

**Musician:**

```
,English Folk Music,英国民谣,英國民謠,English Folk Music,Música folklórica del Reino Unido,Английская Hародная Mузыка,Música Folclórica Inglesa,Englischer Folk,영국 민속 음악,イギリス民謡,Musique Folklorique Anglaise,Musica Folk Britannica,الموسيقى الشعبية الإنجليزية,İngiltere Halk Müzikleri,English Folk Music
```

Replace the existing song title and musician with your song's title and musician, ensuring you provide translations for each language.

## Build the Modified APK

Once you have updated the CSV files, you need to rebuild the APK file. Refer to the [Apktool](/apktool.md) guide for decompiling and building the modified APK.

After successfully building the modified APK, you can install it on your Android device and enjoy playing your custom song in Piano Tiles 2!

::: warning

Modifying APK files can be risky. Proceed at your own risk and ensure you have a backup of the original APK file.

:::
