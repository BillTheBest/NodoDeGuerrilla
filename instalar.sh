#!/bin/sh
#
#	basado en http://fffff.at/wifitagger/
#

# copia los archivos
scp -r  -o UserKnownHostsFile=/dev/null raiz/* root@192.168.1.1:/

# copiar archivo de instalación de programas
scp -r -o UserKnownHostsFile=/dev/null setup_remote.sh root@192.168.1.1:/root/

# instalación de programas
ssh -o UserKnownHostsFile=/dev/null root@192.168.1.1 'chmod +x /root/setup_remote.sh; /root/setup_remote.sh'


