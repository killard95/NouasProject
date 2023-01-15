  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <?php $nombre = (int)$_GET['nombre']; 

  echo "<h3>Voila la Table de " . $nombre . " comme vous l'avez demandé.</h3><br><br>";

echo '<style>
body, table, caption
{
	text-align:center;
}

caption
{
	color:white;
}
</style>' ;

$titre = "<table class='mx-auto table table-bordered table-striped table-success bg-light'> <caption class='caption-top bg-dark fw-bolder'> Table de " . $nombre . "</caption> <thead> <th> Nombre </th> <th> x </th> <th> Multiplicateur </th> <th> = </th> <th> Résultat </th> <tbody> ";

  if ($nombre < 0) {
	echo "Veuillez entrer un nombre positif !";
	} else {
		echo $titre ;
		for ($i = 0; $i < 11; $i++) {
		$resultat =  $nombre * $i;
		echo '<tr> <td>' . $nombre .'</td> <td> x </td> <td>' . $i . '</td> <td> = </td> <td>' . $resultat . ' </td> </tr> ';
	}
}

echo '</tbody> </table>'; ?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>