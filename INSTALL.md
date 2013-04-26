# Instalación paso a paso

- [Equipos soportados](http://wiki.openwrt.org/toh/start)
- [Instalación](http://wiki.openwrt.org/doc/howto/generic.flashing)
- Si tenes USB en el router podes tener una [raíz extendida](http://wiki.openwrt.org/doc/howto/extroot) \o/
  - Particionar discos
  - Copiar archivos

## Conectar el router a internet

Agregar en `/etc/config/wireless` lo siguiente.

<pre>
config wifi-iface
        option device   radio0
        option network  wan
        option mode     sta
        option ssid     EDUARDO
        option encryption [none|wep|psk]
        option key      [clave]
</pre>

**none:** sin codificar

**wep:** con codifcicacion WEP, la clave va en texto plano

**psk:** codificacion WAP, la clave hay que generarla con `wpa_passphrase`

## Generar IOS

genera particiones en un pendrive: con intercambio (swap) y raíz (root), por ahora lo creo usando gparted y 

## Raíz Extendia (Ext Root)

Copiar `/etc/config/fstab` a la memoria del router para montar automaticamente la imagen al iniciar.

### Montarlo

<pre>
opkg update
opkg install block-mount hotplug2 kmod-fs-ext4
/etc/init.d/fstab enable
/etc/init.d/fstab start
/etc/init.d/fstab overlay_enabele
</pre>

No se si estan todos

## Quehaceres

- Poner todo en español y hacer un script de instalación [similar a este](http://fffff.at/wifitagger/)
