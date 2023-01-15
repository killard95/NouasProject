#!/bin/bash
#Ecrire un script qui prend en entrée un nombre entier et renvoie la somme des chiffres de ce nombre.
clear
#récupérer valeur d'entrée
read -p "entrer un nombre : " input
#créer variable egale à zero pour pouvoir jouer par la suite avec les valeur contenues dans le tableau
somme=0
#créer le tableau
array=()
#on ne garde que les chiffres de 1 à 9 .Du coup on ignore les espaces
chiffre=$(echo $input | grep -o "[1-9]")
#on met chaque chiffre du input dans le tableau
array+=($chiffre)
#on boucle pour aditionner toutes les valeurs du tableau
for i in ${array[@]}
do
	let somme+=$i
done
#affiche le résultat
echo $somme
exit 0
