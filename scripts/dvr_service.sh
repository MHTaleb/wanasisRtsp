echo "processing launch of ..." $1
echo "deleting cached stream"
find /var/www/html/stream/$1/subtype_0 -mindepth 2 -delete
source = ""
link = ""
params = ""
case "$1" in
DVR-41)
   $link = "rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor"
   for i in $(seq -f "%03g" 1 32); do
      $params = "?channel="$i"&subtype=0 "
      ffmpeg_param=" -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time -progress - -nostats "
      ffmpeg -i $link$params $ffmpeg_param "/var/www/html/stream/DVR-41/subtype_0/stream_"$i"/index.m3u8 " 2>log_$1_${i}.txt &
      echo $! 2>log_$1_${i}-pid.txt &
   done
   ;;
DVR-137)
   $link = "rtsp://admin:admin1234@192.168.1.137:554"
   for i in $(seq 1 32); do
      $params = "/Streaming/Channels/"$i"01"
      ffmpeg_param =" -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time -progress - -nostats "
      ffmpeg -i $link$params $ffmpeg_param "/var/www/html/stream/DVR-137/subtype_0/stream_"$i"/index.m3u8 " 2>log_$1_${i}.txt &
      echo $! 2>log_$1_${i}-pid.txt &
   done
   ;;
DVR-138)
   $link = "rtsp://admin:admin1234@192.168.1.138:554"
   for i in $(seq 1 32); do
      $params = "/Streaming/Channels/"$i"01"
      ffmpeg_param=" -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time -progress - -nostats "
      ffmpeg -i $link$params $ffmpeg_param "/var/www/html/stream/DVR-137/subtype_0/stream_"$i"/index.m3u8 " 2>log_$1_${i}.txt &
      echo $! 2>log_$1_${i}-pid.txt &
   done
   ;;
DVR-251)
   $link = "rtsp://admin2:admin1234@192.168.0.251:554/cam/realmonitor"
   for i in $(seq -f "%03g" 1 32); do
      $params = "?channel="$i"&subtype=0 "
      ffmpeg_param=" -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time -progress - -nostats "
      ffmpeg -i $link$params $ffmpeg_param "/var/www/html/stream/DVR-41/subtype_0/stream_"$i"/index.m3u8 " 2>log_$1_${i}.txt &
      echo $! 2>log_$1_${i}-pid.txt &
   done
   ;;
*)
   echo " $1 : Not processed"
   ;;
esac
