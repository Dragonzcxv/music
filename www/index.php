<?php
$config = include('../.config.php');
$assets = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/frontend/assets/{$config['env']}.json"));
$js_path = str_replace($_SERVER['DOCUMENT_ROOT'], '', $assets->index->js);
$css_path = str_replace($_SERVER['DOCUMENT_ROOT'], '', $assets->index->css);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="<?=$js_path;?>"></script>
	<link rel="stylesheet" href="<?=$css_path;?>">
	<title>Document</title>
</head>
<body>
	<div id="app"></div>
</body>
</html>