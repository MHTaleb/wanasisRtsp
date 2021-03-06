#!/bin/bash

#dvr41.1

find /var/www/html/stream/DVR-41/subtype_1 -mindepth 2 -delete

ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=1&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_001/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=2&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_002/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=3&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_003/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=4&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_004/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=5&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_005/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=6&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_006/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=7&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_007/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=8&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_008/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=9&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_009/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=10&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_010/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=11&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_011/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=12&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_012/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=13&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_013/index.m3u8
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=14&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_014/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=15&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_015/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=16&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_016/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=17&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_017/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=18&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_018/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=19&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_019/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=20&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_020/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=21&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_021/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=22&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_022/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=23&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_023/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=24&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_024/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=25&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_025/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=26&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_026/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=27&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_027/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=28&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_028/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=29&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_029/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=30&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_030/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=31&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_031/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin3:admin12345@192.168.0.41:554/cam/realmonitor?channel=32&subtype=1 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-41/subtype_1/stream_032/index.m3u8 &

## fin dvr41


##begin dvr 137 



# dvr 137.1

find /var/www/html/stream/DVR-137/subtype_1 -mindepth 2 -delete

ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/102 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_001/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/202 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_002/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/302 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_003/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/402 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_004/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/502 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_005/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/602 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_006/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/702 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_007/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/802 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_008/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/902 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_009/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1002 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_010/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1102 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_011/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1202 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_012/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1302 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_013/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1402 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_014/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1502 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_015/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1602 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_016/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1702 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_017/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1802 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_018/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/1902 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_019/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2002 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_020/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2102 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_021/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2202 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_022/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2302 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_023/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2402 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_024/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2502 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_025/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2602 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_026/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2702 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_027/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2802 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_028/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/2902 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_029/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/3002 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_030/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/3102 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_031/index.m3u8 &
ffmpeg -loglevel error -i rtsp://admin:admin1234@192.168.1.137:554/Streaming/Channels/3202 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-137/subtype_1/stream_032/index.m3u8 &

## fin 137

## debut 138


#138.1

find /var/www/html/stream/DVR-138/subtype_1 -mindepth 2 -delete

ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/102 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_001/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/202 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_002/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/302 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_003/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/402 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_004/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/502 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_005/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/602 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_006/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/702 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_007/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/802 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_008/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/902 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_009/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1002 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_010/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1102 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_011/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1202 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_012/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1302 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_013/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1402 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_014/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1502 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_015/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1602 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_016/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1702 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_017/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1802 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_018/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/1902 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_019/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2002 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_020/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2102 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_021/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2202 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_022/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2302 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_023/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2402 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_024/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2502 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_025/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2602 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_026/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2702 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_027/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2802 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_028/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/2902 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_029/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/3002 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_030/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/3102 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_031/index.m3u8 &
ffmpeg -loglevel error  -i rtsp://admin:admin12345@192.168.1.138:554/Streaming/Channels/3202 -an -c:v copy -f hls -hls_time 3 -hls_list_size 3 -hls_flags delete_segments+split_by_time /var/www/html/stream/DVR-138/subtype_1/stream_032/index.m3u8 &

# fin 138
