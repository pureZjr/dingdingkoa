#!/bin/bash
# # 构建成功后打包文件上传到服务器

## 腾讯云
scp -r ./dist root@119.29.139.200:/home/DingDongNode
scp -r ./package.json root@119.29.139.200:/home/DingDongNode
## 阿里云
scp -r ./dist root@47.107.72.163:/home/DingDongNode
scp -r ./package.json  root@47.107.72.163:/home/DingDongNode

# ssh -tt root@119.29.139.200   << remotessh  
# pm2 reload all
# exit
# remotessh