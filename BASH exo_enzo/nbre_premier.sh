#!/bin/bash
clear
#Ecrire un script qui prend en entrée un nombre entier et renvoie true si c'est un nombre premier, false sinon.
#récupérer valeur d'entrée
read -p "entrer un nombre " nombre
#variable pour vérifier le nbre de diviseur
i=2
#boucle pour vérifier le nombre de diviseur
#tant que le modulo du input/i est différent de 0 et que input est plus grand que 1
#ajoute 1 à i chaque tour de boucle
while [ ! $(( $nombre % i )) -eq 0 -a $nombre -gt 1 ]
do
	i=$(( i + 1 ))
done
#condition pour afficher si input est nombre premier ou non
if [ ! $i -eq $nombre ]; then
	echo "false"
elif [ $nombre -eq 1 ] ; then
	echo "false"
else
	echo "true"
fi
exit 0

