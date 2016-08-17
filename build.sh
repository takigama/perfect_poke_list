#!/bin/bash

csplit --digits=2 --suppress-matched  --prefix=in parts/index.html "/__HEAD__/"

cat in00 > index.html
echo '<<script type="text/javascript">' >> index.html
cat parts/jquery.js >> index.html
echo '</script>' >> index.html
echo '<scripts type="text/javascript"></script>' >> index.html
cat parts/exec.js >> index.html
echo '</script>' >> index.html
echo '<style>' >> index.html
cat parts/css.css >> index.html
echo '</style>' >> index.html
cat in01 |grep -v __HEAD__ >> index.html
rm -f ln00 ln01
