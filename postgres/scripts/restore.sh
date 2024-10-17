#!/bin/sh

BACKUPFILENAME=$1

if [[ -z "$BACKUPFILENAME" ]]; then
    echo "Please specify the file"
    exit 1
fi

echo "Starting restore Pg from a file ${BACKUPFILENAME}"

gunzip -c ${BACKUPFILENAME} | pg_restore -Ft --clean --if-exists --dbname=${POSTGRES_DB} --username=${POSTGRES_USER} --verbose --single-transaction

echo "Finished restore of Pg to file ${BACKUPFILENAME}"
