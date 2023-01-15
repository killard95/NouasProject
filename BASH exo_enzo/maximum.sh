#!/bin/bash
clear
#Ecrire un script qui prend en entrée un tableau d'entiers et renvoie le plus grand élément du tableau.
#créer tableau
input=([*])
#récupérer valeur d'entrée en envoyant dans le tableau
read -p "entrer un tableau de nombre " -a input
#créer deux variable pour la boucle
maximum=$input
minimum=$input
#boucle pour  vérifier les éléments du tableau
for i in ${input[*]} 
do
	if [ $i -lt $minimum ]; then 
	minimum=$i
	fi
	if [ $i -gt $maximum ]; then
	maximum=$i
	fi
done
echo "Le plus grand nombre du tableau est "$maximum
exit 0
