run the project:
```bash
docker compose up -d --build
```

### Interaction with the database
Automatic database backup is set by default (it is triggered daily at midnight UTC+0).
Automatic deletion of backups that are more than 14 days old (deletion occurs only if the backup is triggered).
To change:
- the start time of the automatic database backup, change `AUTOBACKUP_TIME` in `.env`, setting the time in cron format.
- backup lifespan, change `BACKUP_LIFESPAN` in `.env`, setting the number of days after which the deletion will occur.

manual backup of the database:
```bash
docker compose exec db backup
```

restore the database from the backup file:
```bash
docker compose exec db restore <docker_path_to_file/(*.tar.gz)>
```