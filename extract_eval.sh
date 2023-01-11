#!/bin/bash
cat menu.txt     # Appel du fichier menu afin de l'afficher
echo 		 # Je saute une ligne afin de créer un espace entre le menu et la première instruction

array=()	 # Je créer un tableau pour stocker le prix des produitss sélectionnés
choix() {	 # Je commence la fonction qui va me permettre de valider la commande
	read -p "Que désirez vous ? " choix_produit	# Affiche l'instruction de selection du produit et stock la réponse
	prod="$choix_produit"				# Stock dans une variable le produit selectionné
	echo 'Vous avez sélectionné : '			# Affiche le produit selectionné
	grep -w "^$prod" menu.txt | sed -n "1 p"	# Extrait du menu et affiche la ligne qui commence par la variable prod
	prix=$(grep -w "^$prod" menu.txt | sed -n '1 p' | tail -c 6 | sed 's/€//g')	# Stock le prix du produit
	read -p "combien : " choix_qte			# Affiche l'instruction pour choisir le produit et stocke la réponse
	total=$(($prix*$choix_qte))			# Multiplie le prix du produit selectionné le multiplie par la quantité
							# et stocke le résultat
	array+=($total)					# Ajoute tout les résultats (prix * quantité) dans un tableau
	read -p "Désirez vous autre chose ?  oui ou non ? " reponse	# Question pour savoir si on continue de choisir 
									# des produits et stocke la réponse
	if  [ ! $reponse == "oui" ] ; then		# Condition qui analyse la réponse pour savoir si on continue 
       		total					# la fonction choix ou si l'on passe au calcul du prix total
	else						# Si la réponse est différente du mot oui, on passe au calcul du prix
		choix					# sinon, on recommence à choisir un produit et une quantité
	fi
	}

total() {						# Cette fonction va calculer le prix final
	result=0					# Au début la somme du prix de tous les produits choisi est à 0
	for i in ${array[@]}				# Boucle pour additionner tous les index du tableau (montant HT)
        do
		let result+=$i
	done

	ht=$result
	tva=11.67/100

	echo "HT : $ht €"				# Affiche le montant HT de la commande
	montant_tva=$(bc -l <<<"scale=2; $ht*$tva")	# Calcule et stock le montant TVA avec 2 chiffres aprés la virgule
	echo "TVA : $montant_tva €"			# Affiche le montant de la TVA de la commande
	ttc=$(bc -l <<<"scale=2; $result+$montant_tva")	# Calcule et stock le montant TTC (HT + TVA)
	echo "TTC : $ttc €"				# Affiche le montant TTC de la commande
}

choix							# Appel de la fonction choix
