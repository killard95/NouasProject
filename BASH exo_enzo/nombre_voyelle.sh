#!/bin/bash
clear
#récupérer valeur d'entrée
read -p "entrer un mot ou une phrase " phrase

#minuscule=$(echo $phrase | tr '[[:upper:]]' '[[:lower:]]')
#echo ${#phrase}

#ignore la casse et ne garde que le motif, compte le nombre de caractéres correspondant
voyelle=$(echo $phrase | grep -o -i "[aeiouy]" | wc -l)
echo "Votre chaine de caractéres comporte $voyelle voyelle."
exit 0
