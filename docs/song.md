# Song

This document provides a comprehensive explanation of the JSON data structure used to represent songs in the mobile game Piano Tiles 2. It defines key terminology, details each data element, and offers an illustrative example.

By understanding these elements and their functions, you can gain deeper insight into the game's music and potentially create your own custom songs.

## Gameplay

-   **TPS/TPM:** Tiles per second/minute. This indicates the speed at which objects scroll down during gameplay. Higher values represent faster speeds.

## Tiles

-   **Tiles:** Objects that appear during gameplay. Players must tap them to play the corresponding notes. Various types of tiles exist:

| Type | Description | Used In |
| --- | --- | --- |
| None | Black Tile. Requires a single tap. | All Songs |
| `3<>` | Combo Tile. A large black tile with a note count that decreases with rapid taps until it reaches zero. | `Canon ( Rock )`, `Christmas Zoo`, `Combo tile`, `Fur Elise`, `Korobeiniki`, `Turkish March` |
| `5<>` | Double Tiles. Two single black tiles appear simultaneously on the same row. | `3 Polkas de salon Op.7 No.3`, `6 Ecossaises WoO 83`, `A La Claire Fontaine`, `A Real Slow Drag`, `Adventure Of Tiger`, 426 Other Songs |
| `6<>` | Long Tile. Multiple tiles are combined into one long tile. | `Canon`, `Jasmine`, `Nocturne Op.9 No.2` |
| `7<>` | Diagonal Slider Tile. Requires a single slide from left to right or vice versa. | `All Seasons Red`, `Danse Chinoise`, `Red Carmation`, `Slider tile`, `Warblings At Eve`, `Wiegenlied Op.49 No.4` |
| `8<>` | Wavy Slider Tile. Requires multiple slides from left to right or vice versa. | `Carmen - Votre Toast`, `Christmas Zoo`, `Crazy pharaoh`, `Danse Chinoise`, `Nocturne in B Op.32 No.1`, `Puerta de tierra Op.71 No.5`, `Rainy Night Flower`, `Salty Rag`, `Slider tile`, `Warblings At Eve`, `Witches and strange cat` |
| `9<>` | Accompaniment Tile. Single-tap tiles on the second track played simultaneously with a long tile on the first track. | `Accompaniment tile` |
| `10<>` | Burst Tile. The first note triggers an exploding animation, followed by the appearance of remaining single-tap tiles. | `Canon-Adapted`, `Fur Elise-Adapted`, `Jasmine-Adapted`, `Little Star-Adapted`, `Mazourka Brillante Op.191` |

## Track Data

-   **Pitch Names:** Represented by letters (e.g., `c1`, `d2`, `A-1`). See the [table below](#valid-pitch-names) for valid pitch names.
-   **Beat Durations:** Represented by letters (e.g., `H`, `I`, `J`, `K`, `L`). These indicate the duration of a tile, with higher values representing longer durations. Durations above 1/8 become long tiles.
-   **Rest Durations:** Represented by letters (e.g., `Q`, `R`, `S`, `T`, `U`). These represent silent periods in the music and are invisible during gameplay. Durations above 1/8 become invisible long tiles.
-   **Note Separators:** Commas (`,`) and semicolons (`;`) function like barlines in traditional music notation.
-   **Note Grouping:** Parentheses `(` and `)` enclose groups of notes with operators.
-   **Beat Grouping:** Square brackets `[` and `]` enclose beat durations. The order of letters within the brackets does not affect gameplay.

## Operators

-   **Operators:** Operators define how notes within a group (enclosed by parentheses) are played:

| Operator | Description | Used In |
| --- | --- | --- |
| `.` | Chord. Notes played simultaneously. | `11 Bagatelles Op.119 No.1`, `11 Bagatelles Op.119 No.3`, `12 German Dances WoO8 No.9`, `26`, `3 Poetic Polkas Op.8 No.1`, 760 Other Songs |
| `~` | Tuplet. Notes in a group divided into equal subdivisions. | `Aida-Grand March`, `All Seasons Red`, `American Patrol`, `Beyer No.8`, `Bridal Chorus`, `Build The Dream`, `Canon ( Rock )`, `Carmen - Votre Toast`, `Carmen Overture`, `Christ The Lord Is Risen Today`, `Clarinet Polka`, `Combo tile`, `Danse Chinoise`, `Despacito-Remix`, `Despacito`, `Eine Kleine Nachtmusik`, `Elegie Op.3 No.1`, `Espana Cani`, `Hungarian Dance No.6`, `Invitation to the Dance`, `Kiss The Rain`, `Korobeiniki`, `La Fille aux cheveux de lin`, `Meditation from Thais`, `Minuet K.1`, `Miss Fox`, `Modlitwa Dziewicy`, `New World Symphony Mvt.4`, `Nocturne Op.55 No.1`, `Nocturne Op.9 No.1`, `Nocturne Op.9 No.2`, `Nostalgia`, `Nutcracker Op.71`, `Paganini Rhapsody Var.18`, `Peach Blossom`, `Piano Concerto No.1`, `Polonaise Op.40 No.1`, `Por Una Cabeza`, `Puerta de tierra Op.71 No.5`, `Rainy Night Flower`, `Red Carmation`, `Reverie`, `Romeo and Juliet`, `Salty Rag`, `Serenade`, `Slider tile`, `Solfeggietto`, `Sonatina Op.88 No.3`, `Spanish Dances`, `The Fountain`, `The Parade Of The Tin Soldiers`, `The Time We Spent Together`, `Tiger's Family`, `Trompeter Op.33 No.2`, `Tzigane Dance`, `Waltz in A minor`, `Waltz Op.64 No.1`, `Walzer Op.12 No.2`, `Wedding March` |
| `@` | Arpeggio. Notes played in a rolling fashion. | `Auf dem Wasser zu singen`, `Auld Lang Syne`, `Bagpipe Waltz`, `Beo dat may troi`, `Bluestone Alley`, `Breeze`, `Bridal Chorus`, `Canon ( Rock )`, `Csardas`, `Dayung Sampan`, `Doraji`, `Evening song of the Fisherman`, `Fantaisie - Impromptu`, `Fantaisies Op.16 No.1`, `Heidenroslein`, `Hungarian Dance No.6`, `Hungarian Dance No.7`, `If You Were By My Side`, `Le Nozze di Figaro`, `Liebestraum No.3`, `Love's Dream After the Ball`, `Maxbay Went Away`, `Melody of the Night No.5`, `Narrate`, `Nillili`, `O sole mio`, `Oh My Beloved Father`, `Paganini Rhapsody Var.18`, `Pastoral`, `Piano Sonata No.2`, `Prisoners Dream`, `Scherzo No.2 Op.31`, `Solitary Awakening`, `Sonata in C Major K309 Mvt.1`, `Sonata in D Major K284 Mvt.3`, `Song of Seikilos`, `Tears`, `The man regards me as the king`, `The Time We Spent Together`, `The Truth That You Leave`, `The Way To Get You`, `Turkish March`, `Vltava` |
| `&` | Mordent | `Sonata in C Major K545` |
| `^` | Trill | `Carmen Overture`, `Clarinet Polka`, `Four Seasons - Spring`, `Harmonious Blacksmith`, `Modlitwa Dziewicy`, `Nocturne Op.9 No.1`, `Nocturne Op.9 No.2`, `Sonata in C Major K545`, `Sonata in D Major K311`, `Waltz in A minor`, `Waltz Op.64 No.1` |
| `$` | Echo. Similar to `~` but with an echo effect. (?) | `Modlitwa Dziewicy` |
| `%` | Long Appoggiatura | `Auf Flugeln Des Gesanges`, `Bridal Chorus`, `Csikos Post`, `Etincelles Etude Op.36 No.6`, `Habanera`, `Hungarian Dance No.6`, `La Traviata Excerpts`, `Miss Fox`, `Modlitwa Dziewicy`, `Moments Musicaux`, `Nocturne Op.9 No.1`, `Nocturne Op.9 No.2`, `The Fountain`, `Turkish March`, `Waltz in A minor`, `Witches and strange cat` |
| `!` | Short Appoggiatura | `Falling Falling`, `Hungarian Dance No.6`, `Miss Fox`, `Moments Musicaux`, `New World Symphony Mvt.4`, `Witches and strange cat` |

## Valid Pitch Names

```json
[
	"#A-1",
	"#A-2",
	"#A-3",
	"#a",
	"#a1",
	"#a2",
	"#a3",
	"#a4",
	"#C-1",
	"#C-2",
	"#c",
	"#c1",
	"#c2",
	"#c3",
	"#c4",
	"#D-1",
	"#D-2",
	"#d",
	"#d1",
	"#d2",
	"#d3",
	"#d4",
	"#F-1",
	"#F-2",
	"#f",
	"#f1",
	"#f2",
	"#f3",
	"#f4",
	"#G-1",
	"#G-2",
	"#g",
	"#g1",
	"#g2",
	"#g3",
	"#g4",
	"A-1",
	"A-2",
	"A-3",
	"a",
	"a1",
	"a2",
	"a3",
	"a4",
	"B-1",
	"B-2",
	"B-3",
	"b",
	"b1",
	"b2",
	"b3",
	"b4",
	"C-1",
	"C-2",
	"c",
	"c1",
	"c2",
	"c3",
	"c4",
	"c5",
	"D-1",
	"D-2",
	"d",
	"d1",
	"d2",
	"d3",
	"d4",
	"E-1",
	"E-2",
	"e",
	"e1",
	"e2",
	"e3",
	"e4",
	"F-1",
	"F-2",
	"f",
	"f1",
	"f2",
	"f3",
	"f4",
	"G-1",
	"G-2",
	"g",
	"g1",
	"g2",
	"g3",
	"g4",
	"mute"
]
```

## Tiles and Rests Duration

| Tile | Rest | Duration              | Additional Points | Description               |
| :--: | :--: | --------------------- | ----------------- | ------------------------- |
|  H   |  Q   | 2 (double whole note) | +17               | single tile, long tile    |
|  I   |  R   | 1 (whole note)        | +9                | single tile, long tile    |
|  J   |  S   | 1/2 (half note)       | +5                | single tile, long tile    |
|  K   |  T   | 1/4 (quarter note)    | +3                | single tile, long tile    |
|  L   |  U   | 1/8 (eighth note)     | +1                | single tile               |
|  M   |  V   | 1/16                  | +4 (double tiles) | reserved for double tiles |
|  N   |  W   | 1/32                  | +4 (double tiles) | reserved for double tiles |
|  O   |  X   | 1/64                  | +4 (double tiles) | reserved for double tiles |
|  P   |  Y   | 1/128                 | +4 (double tiles) | reserved for double tiles |

## Special Effects

-   **{0}, {1}, etc.:** Hitting objects with these special effects may trigger visual background effects during gameplay.

## JSON Properties

-   **baseBpm:** Sets the initial speed of the song.
-   **musics:** This is an array containing parts of the song. Each part has:
    -   **scores:** Contains the track data for the song. Each element in the array represents a separate track.
    -   **bpm (Optional):** Sets the speed of a specific part of the song.
    -   **id:** Identifies the part number. Parts are played in ascending order starting from one.
    -   **baseBeats:** A fraction that modifies the song speed and tile durations in conjunction with `bpm`.
    -   **audition (Optional):** Defines a short excerpt of the song used in the song playlist.
    -   **instruments (Optional):** Specifies the downloaded instrument samples used for each track.
    -   **alternatives (Optional):** Specifies the offline instrument samples used for each track.

::: warning

-   **Three parts minimum:** Make sure your `musics` array has at least three parts, otherwise the game might crash.

:::

## Little Star Example

```json
{
	"baseBpm": 90,
	"musics": [
		{
			"bpm": 90,
			"baseBeats": 0.5,
			"scores": [
				"c[L],g[L],(e1.g1.c2)[K],g2[K],(g1.b1.g2)[K];a2[K],(a1.e2.a2)[K],g2[K],(g1.c2)[K];f2[K],(d2.f2)[K],(c2.e2)[K],(a1.e2)[K];",
				"c2[K],U,c1[L],e[L],c1[L],U,c2[L];f[L],c1[L],U,c2[L],e[L],c1[L],T;d1[L],a1[L],U,g1[L],U,g1[L],U,e1[L];"
			],
			"id": 1
		},
		{
			"bpm": 93,
			"baseBeats": 0.5,
			"scores": [
				"(f1.d2)[L],d1[L],(g1.d2)[L],(f1.b1)[L],(e1.c2)[L],g1[L],c2[L],d2[L];g2[L],U,(c2.g2)[L],U,f2[L],a1[L],(b1.f2)[L],c2[L];e2[L],U,(c2.e2)[L],a1[L],(g1.d2)[L],b1[L],(a1.d2)[L],g1[L];g2[L],c2[L],(d2.g2)[L],e2[L],(c2.f2)[L],a1[L],(c2.f2)[L],U;(c2.e2)[L],U,(c2.e2)[L],U,d2[K],g1[L],b1[L];",
				"R;c1[L],g1[L],U,e1[L],c1[L],U,T;c1[L],g1[L],T,S;c1[L],U,T,T,U,f1[L];U,d1[L],U,a1[L],g1[L],g[L],d[L],B-1[L];"
			],
			"id": 2
		},
		{
			"bpm": 95,
			"baseBeats": 0.5,
			"scores": [
				"c2[L],U,(e1.g1.c2)[L],c1[L],g2[L],c1[L],(g1.b1.g2)[L],c2[L];a2[L],U,(a1.e2.a2)[L],c2[L],g2[L],U,(g1.c2)[K];f2[L],U,(f1.c2.f2)[L],U,e2[L],U,(a1.c2.e2)[L],U;(f1.a1.d2)[L],d1[L],(f1.d2)[L],b1[L],(c1.e1.c2)[K];",
				"c[L],g[L],T,e[L],U,T;f[L],c1[L],T,e[L],c1[L],T;d[L],a[L],U,a[L],#f[L],d1[L],U,d1[L];g[L],U,T,T;"
			],
			"id": 3
		}
	],
	"audition": { "end": [0, 27], "start": [0, 0] }
}
```
