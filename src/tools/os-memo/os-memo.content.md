Linux 常用命令

## 查看内存
```shell
free

or

cat /proc/meminfo
```

## 主机名

```shell
hostname

# 设置主机名

hostname xxx
```

## hosts 域名绑定

```shell
sudo vim /etc/hosts
```

## CPU

```shell
lscpu
```

## 版本信息

```shell
cat /proc/version

uname -a

lsb_release -a
```

## 文件打包

```shell
tar -cvf source.tar source  # 仅打包，不压缩。输出名称 需要打包的文件/文件夹
tar -zcvf source.tar.gz source # 打包并用 gzip 压缩
tar -jcvf source.tar.bz2 source # 打包并用 bzip2 压缩

zip -r target.zip source  # 递归压缩文件夹，不需要递归压缩可以不用 -r
unzip target.zip
```

## 解压

```shell
解压1：gunzip target.gz
解压2：gzip -d target.gz

压缩：gzip target
解压：tar -zxvf target.tar.gz
```

## 进程列表

```shell
top

or

htop

or

ps -ef 
```

## 用户

```shell
sudo adduser username # 添加用户
sudo passwd username  # 设置密码
sudo chown -R username:usergroup xxx # 改变资源归属的用户和组
sudo chmod -R 777 xxx # 改变执行权限
```

## 将html 转为png

```shell
CutyCapt

dos2unix
```