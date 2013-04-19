#!/bin/sh
#
#	Instalacion de un extendido root en un router con OpenWRT
#
#	basado en http://fffff.at/wifitagger/
#

echo "¡esto no anda todavia!"

exit
# genera el password via telnet
echo "passwd 1234
exit" | nc 192.168.1.1 23

# SSH de la lista de conocidos, por si las moscas
ssh-keygen -f "$HOME/.ssh/known_hosts" -R 192.168.1.1

# copia los archivos
#scp -r  -o UserKnownHostsFile=/dev/null raiz/* root@192.168.1.1:/

# **NOTA** no se si los permisos van a quedar bien

# scp raiz/etc/config/firewall root@192.168.1.1:/etc/config/

echo "La clave del router es 1234"

# instalación de root extendido
echo "

echo 'Wifi'
cat /etc/config/wireless | grep -v 'disabled'  | grep -v '#' > /tmp/wireless
cp /tmp/wireless /etc/config/wireless

echo 'Uniendo ethernet con wifi'
echo -e 'config interface wan \n\t option proto dhcp \n\t option network lan' >> /etc/config/network

echo 'Reiniciando la red'
/etc/init.d/firewall restart
/etc/init.d/network restart

echo 'Actualizando Opkg'
opkg update

echo 'Instalando programas necesarios'
opkg install block-mount block-hotplug block-extroot

echo 'Generar particiones'

echo 'Raiz'

echo 'Intercambio'

/etc/init.d/fstab enable
/etc/init.d/fstab init
echo 'Particionando disco'

fdisk || exit
dd || exit

echo 'Montando discos'
mount /mnt/sda1

echo 'Copiando sistema Base al extendido'
tar -C /overlay -cvf - . | tar -C /mnt/sda1 -xf -
/etc/init.d/fstab overlay_enable
reboot
" | ssh -o UserKnownHostsFile=/dev/null root@192.168.1.1 \
|| echo "Algo malo paso"

echo "Por favor espere a que el router reincie y presione <ENTRADA>"
choice

sleep 3

# instalación de programas en el root extendido
echo "
echo 'Instalando el Nodo de Guerrilla'
echo 'Actualizando Opkg'
opkg update

echo 'este programa todavia no anda'
opkg install kmod-fs-ext4 e2fsprogs

" | ssh -o UserKnownHostsFile=/dev/null root@192.168.1.1 \
|| echo "Algo malo paso"

