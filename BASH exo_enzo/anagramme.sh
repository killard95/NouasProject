#!/bin/bash
clear
#récupérer valeur d'entrée
read -p "veuillez entrer deux mots " mot1 mot2
#créer 2 tableaux
array1=()
array2=()
#envoyer chaque mot dans des tableaux différents en ignorant la casse et les chiffres
#et en mettant les lettres dans ordre alphabétique
array1+=$( echo $mot1 | grep -i -o "[a-z]" | sed "s/'[0-9]'//g" | tr '[:upper:]' '[:lower:]' | sort -d)
array2+=$( echo $mot2 | grep -i -o "[a-z]" | sed "s/'[0-9]'//g" | tr '[:upper:]' '[:lower:]' | sort -d)
# comparer longueur des tableaux et leurs index
if [ ${#array1[@]} -eq ${#array2[@]} ] && [[ "${array1[@]}" == "${array2[@]}" ]] ; then
	echo "true"
else
	echo "false"
fi

exit 0

