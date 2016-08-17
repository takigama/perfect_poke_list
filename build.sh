#!/bin/bash

csplit --digits=2 --suppress-matched  --prefix=in parts/index.html "/__HEAD__/"

cat in00 > index.html
echo '<script type="text/javascript">' >> index.html
cat parts/jquery.js >> index.html
echo '</script>' >> index.html
echo '<script type="text/javascript">' >> index.html
echo -n "var jsonStats=JSON.parse('" >> index.html
cat parts/stats.json >> index.html
echo "');" >> index.html
cat parts/exec.js >> index.html
echo '</script>' >> index.html
echo '<style>' >> index.html
cat parts/css.css >> index.html
echo '</style>' >> index.html
cat in01 |grep -v __HEAD__ >> index.html
rm -f in00 in01
