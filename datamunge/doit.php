<?php

// poke list
$csvData = file_get_contents("pokemon.csv");
$lines = explode(PHP_EOL, $csvData);
$plist = array();
foreach ($lines as $line) {
    $tlk = str_getcsv($line);
    if($tlk[0] <= 151 &&$tlk[0] > 0) $plist[] = $tlk;
}


// stat list
$csvData = file_get_contents("pokemon_stats.csv");
$lines = explode(PHP_EOL, $csvData);
$slist = array();
global $slist;
foreach ($lines as $line) {
    $tlk = str_getcsv($line);
    if($tlk[0] <= 151 &&$tlk[0] > 0) $slist[] = $tlk;
}
//print_r($slist);

function getstat($tid, $st)
{
global $slist;
	foreach($slist as $tk => $lv) {
		if($lv[0] == $tid && $lv[1] == $st) return $lv[2];
	}

	return 0;
}


$flist = array();
$i = 0;
foreach($plist as $key => $val) {
	$id = $val[0];
	$flist[$id]["name"] = $val[1];
	$flist[$id]["hp"] = getstat($id, 1);
	$flist[$id]["atk"] = getstat($id, 2);
	$flist[$id]["def"] = getstat($id, 3);
	$flist[$id]["sat"] = getstat($id, 4);
	$flist[$id]["sdef"] = getstat($id, 5);
	$flist[$id]["spd"] = getstat($id, 6);
}

echo json_encode($flist);
?>
