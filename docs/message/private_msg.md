curl 'https://api.vc.bilibili.com/web_im/v1/web_im/send_msg' \
--data-urlencode 'msg[sender_uid]=7513863' \
--data-urlencode 'msg[receiver_id]=1778026586' \
--data-urlencode 'msg[receiver_type] =1' \
--data-urlencode 'msg[msg_type]=1' \
--data-urlencode 'msg[dev_id] =372778FD-E359-461D-86A3-EA2BCC6FF52A' \
--data-urlencode 'msg[timestamp] =1626181379' \
--data-urlencode 'msg[content]={"content":"ヤッホー，米米晚上好呀。最近过得还好吗w"}' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
