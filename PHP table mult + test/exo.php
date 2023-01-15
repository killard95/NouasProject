<!DOCTYPE html>
<html>
    <head>
        <title>Table de multiplication php</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="exo.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <h2>Table de multiplication php</h2>

        <p>coucou</p>

        <?php
        setLocale(LC_TIME, 'fra_fra');
        date_default_timezone_set('Europe/Paris');
        $date = strftime('%A %d %B %Y');
        $heure = strftime('%H:%M:%S'); ?>

<?php echo "
<table class='mx-auto table table-bordered table-striped table-success bg-light'>
	<caption class='caption-top bg-dark fw-bolder'>
		Table de 1
	</caption>
	<thead>
		<th>
			nombre
		</th>
		<th>
			x
		</th>
		<th>
			multiplicateur
		</th>
		<th>
			=
		</th>
		<th>
			resultat
		</th>
	</thead>
	<tbody>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				0
			</td>
			<td>
				=
			</td>
			<td>
				0
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				1
			</td>
			<td>
				=
			</td>
			<td>
				1
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				2
			</td>
			<td>
				=
			</td>
			<td>
				2
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				3
			</td>
			<td>
				=
			</td>
			<td>
				3
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				4
			</td>
			<td>
				=
			</td>
			<td>
				4
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				5
			</td>
			<td>
				=
			</td>
			<td>
				5
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				6
			</td>
			<td>
				=
			</td>
			<td>
				6
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				7
			</td>
			<td>
				=
			</td>
			<td>
				7
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				8
			</td>
			<td>
				=
			</td>
			<td>
				8
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				9
			</td>
			<td>
				=
			</td>
			<td>
				9
			</td>
		</tr>
		<tr>
			<td>
				1
			</td>
			<td>
				x
			</td>
			<td>
				1
			</td>
			<td>
				=
			</td>
			<td>
				10
			</td>
		</tr>
</tbody>
</table>
<br>
<br>" ?>

<?php
$date1=1984;
echo 'Mon année de naissance est : ' . $date1; ?>
<br>
<?php
$date1=2022;
echo 'Nous sommes en l\'an '. $date1;
?>
<br>
<?php
$flottant = 1.97;
echo "Ce nombre est un flottant $flottant";
?>
<br>
<?php echo 'Nous sommes le ' . $date . '<br> Il est ' . $heure; ?>
<br>
<br>
<?php $add=1+3+6;
echo '1 + 3 + 6 = ' . $add; ?>
<br>
<?php $sub=8-2;
echo '8 - 2 = ' . $sub; ?>
<br>
<?php $mult = 15*2;
echo '15 * 2 = ' . $mult; ?>
<br>
<?php $div=30/3;
echo '30 / 3 = ' . $div; ?>
<br>
<br>






	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
</html>