
#!/bin/bash

source = $1
m3u8 = $2
folder = $3

>&2 echo "source = "$1
>&2 echo "m3u8 = "$2
>&2 echo "folder "$3

rm -f $3
mkdir -p $3

ffmpeg  -i $1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time $2 &

>&2 echo "pid="$! 