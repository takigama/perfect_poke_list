<?php

// poke list
$csvData = file_get_contents("cpm.csv");
$lines = explode(PHP_EOL, $csvData);
$plist = array();
echo "switch(val) {\n";
foreach ($lines as $line) {
    $tlk = str_getcsv($line);
	//print_r($tlk);
	$ilk[0] = $tlk[0]*10;
	if($ilk[0] != 0) {
		$ilk[1] = $tlk[1];
		//$plist[$ilk[0]] = $ilk[1];
		//echo "cpm[".$ilk[0]."] = ".$ilk[1].";\n";
		echo "\tcase(".$ilk[0]."):\n\t\treturn ".$ilk[1].";\n\n";
	}
}
echo "}\n";


