# Creating Your First Piano Tiles 2 Song

## Prerequisites

Here's what you need to know:

-   [**Basic JSON knowledge:**](/understanding-json.md) JSON is a simple format for storing data. You can learn the basics in just a few minutes.
-   **Text editor:** Any text editor will do, even Notepad.

## Writing the Music

Each track in the "scores" array is written using a simple notation. Here's an example of "Twinkle Twinkle Little Star":

### JSON

```json
{
	"baseBpm": 90,
	"musics": [
		{
			"id": 1,
			"bpm": 90,
			"baseBeats": 0.5,
			"scores": [
				"c1[K],c1[K],g1[K],g1[K];a1[K],a1[K],g1[J];f1[K],f1[K],e1[K],e1[K];d1[K],d1[K],c1[J];",
				"c[J],e[J];f[J],e[J];d[J];c[J];G-1[J],c[J];"
			]
		}
	]
}
```

## Understanding the JSON Data

For a more in-depth understanding of the JSON data representing the song, please refer to the [song documentation](/song.md).
