#!/bin/sh
#
#	genera una ISO en un pendrive, SD o miroSD para un router con openWRT
#

tar -C /overlay -cvf - . | tar -C /mnt/sda1 -xf -
