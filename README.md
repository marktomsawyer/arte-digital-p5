
## npm install canvas-sketch-cli -g

## canvas-sketch sketch.js --open

## canvas-sketch sketch.js --new --open

## exportando página web
canvas-sketch sketch-04.js --name teste2 --build --inline


# export
https://github.com/mattdesl/canvas-sketch/blob/master/docs/exporting-artwork.md

## Export image

With the browser in focus, you can use the following shortcuts to export your artwork:

Cmd + S or Ctrl + S

Export a single frame
Cmd + Shift + S or Ctrl + Shift + S

Start/stop exporting a sequence of frames
Cmd + K or Ctrl + K

Apply a new git commit and export appending the SHA-1 hash in the file name (see here for more details)
By default, exported files will be saved to your ~/Downloads folder.

canvas-sketch src/index.js --output=media/


## FFMPEG Streaming
Note: This feature needs at least canvas-sketch@0.5.x and canvas-sketch-cli@1.10.1 to work.

First, you'll need ffmpeg or a variant installed. If you haven't installed this before, you can do the following to install a global utility:

npm install @ffmpeg-installer/ffmpeg --global

FFMPEG Streaming
Note: This feature needs at least canvas-sketch@0.5.x and canvas-sketch-cli@1.10.1 to work.

First, you'll need ffmpeg or a variant installed. If you haven't installed this before, you can do the following to install a global utility:

npm install @ffmpeg-installer/ffmpeg --global

If you pass --stream with no options, it will default to --stream=mp4.

