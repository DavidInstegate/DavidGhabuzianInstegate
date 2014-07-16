#!/bin/bash
text= sed -n "[/a/],[/a/]p" $1
echo $text
