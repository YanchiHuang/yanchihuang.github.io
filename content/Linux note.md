---
title: linux 筆記
date: 2018-02-10 20:04:19
tags: linux
metaTitle: "linux"
metaDescription: "linux"
---

## 想抓出log 最末 N筆

```shell
tail -100 <log file> > newLogfile
```

參考：[retrieve-last-100-lines-logs](https://stackoverflow.com/questions/36989457/retrieve-last-100-lines-logs)

## 使用awk建立script

```shell
ls -d test/*/*/*/ | awk '{print "find",$1,"-depth -type d -empty -delete"}' > empty.sh
ls -d test/*/*/*/ | awk '{print "rsync -rv --remove-source-files --log-file=rsync$(date +%Y%m%d).log",$1,"www/",$1}' > 0510.sh
```
