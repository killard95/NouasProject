#!/bin/bash
#Ecrire un script qui prend en entrée un nombre entier et affiche tous les nombres de 1 à ce nombre.
clear
#récupérer valeur d'entrée
read -p "entrer un nombre " nombre
#création tableau
array=()
#fonction pour envoyer tous les nombre de 1 jusqu'a input dans un tableau
function send_number_in_array(){
#boucle qui créer tous les nombre de 1 jusqu'a input et les envois dans le tableau
	for (( i=1 ; i < $nombre ; i++ ))
	do
	array+=($i)
	done
	afficher_array
}
# fonction qui affiche le tableau
function afficher_array(){
#boucle qui affiche toutes les valeurs du tableau
	for entier in ${array[@]}
	do
	echo -e "$entier \c"
	done
}

send_number_in_array

#=========================================================================================

# 2éme methode plus simple
# boucle qui affiche tous les chiffre de 1 jusqu'a input

#for (( i=1; i<$nombre; i++ ))
#	do
#	echo -n "$i "
#	done
exit 0
