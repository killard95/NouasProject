#!/bin/bash
#Ecrire un script qui prend en entrée un nombre entier et renvoie le nombre de chiffres de ce nombre.
clear
#récupérer valeur d'entrée
read -p "entrer un nombre: " nombre
#on ne garde que les chiffres et on compte le nobre de caractéres
var1=$(echo $nombre | grep -o "[0-9]" | wc -l)
#affiche le résultat
echo $var1
exit 0
