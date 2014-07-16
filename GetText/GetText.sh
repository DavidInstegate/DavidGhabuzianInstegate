#!/bin/bash
awk '$0=$2' FS=\< RS=\> $1&>'temp.txt'
sort -u 'temp.txt'>'temp1.txt'
if [ -f $2 ]; then
    rm $2
fi
cat 'temp1.txt' |
while read line
do
    echo '<'$line'>'>>$2
done
rm temp*
