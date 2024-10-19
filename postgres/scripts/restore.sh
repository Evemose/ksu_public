#!/bin/sh

BACKUPFILENAME=$1

error_exit() {
    echo "$1" 1>&2
    exit 1
}

[ -z "$BACKUPFILENAME" ] && error_exit "Please specify the backup file"

[ ! -f "$BACKUPFILENAME" ] && error_exit "Backup file does not exist: $BACKUPFILENAME"
[ ! -r "$BACKUPFILENAME" ] && error_exit "Cannot read backup file: $BACKUPFILENAME"

echo "Starting restore Pg from file ${BACKUPFILENAME}"

gunzip -c "$BACKUPFILENAME" | pg_restore -Ft --clean --if-exists --dbname="$POSTGRES_DB" --username="$POSTGRES_USER" --verbose --single-transaction

echo "Finished restore of Pg from file ${BACKUPFILENAME}"
