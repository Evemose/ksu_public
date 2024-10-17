#!/bin/sh

FILEPREFIX="ksu_news_dump_"
FILEEXTENSION=".tar.gz"

TIMESTAMP=$(date +"%Y-%m-%d"_"%H-%M-%S")
BACKUPFILENAME="${FILEPREFIX}${TIMESTAMP}${FILEEXTENSION}"

echo "Starting backup of Pg to file ${BACKUPFILENAME}"

pg_dump -Ft ${POSTGRES_DB} -U ${POSTGRES_USER} | gzip > ${DB_BACKUP_PATH}/${BACKUPFILENAME}


if [[ $? == 0 ]]; then
  echo "Finished backup of Pg to file ${BACKUPFILENAME}"

  echo "Deleting files '${FILEPREFIX}*.gz' older than ${BACKUP_LIFESPAN} days."
  find ${DB_BACKUP_PATH} -type f -name "${FILEPREFIX}*.gz" -mtime +${BACKUP_LIFESPAN} -delete
  echo "Done."
else
  echo "Backup failed. No files will be deleted."
fi
