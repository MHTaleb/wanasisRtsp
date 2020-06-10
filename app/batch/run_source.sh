
source = $1
m3u8 = $2
ffmpeg  -i $source -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time $m3u8 &
 