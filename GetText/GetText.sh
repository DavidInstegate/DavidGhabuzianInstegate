#!/bin/bash
text= awk '$0=$2' FS=\< RS=\> $1
echo $text
