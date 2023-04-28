#!/bin/sh

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if [ "$branch" == "wip" ]
then
    git add .
    git commit -am "WIP"
fi
