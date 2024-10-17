FROM postgres:16.2-alpine3.19

ARG DB_BACKUP_PATH
ARG AUTOBACKUP_TIME="0 0 * * *"

ARG SCRIPTS_PATH=./scripts

RUN mkdir -p ${DB_BACKUP_PATH}

RUN \
    apk update; \
    apk add --no-cache supervisor

COPY ${SCRIPTS_PATH}/backup.sh /usr/bin/backup
COPY ${SCRIPTS_PATH}/restore.sh /usr/bin/restore

RUN \
  chmod -R a+x /usr/bin/backup; \
  chmod -R a+x /usr/bin/restore

RUN echo "${AUTOBACKUP_TIME} /usr/bin/backup" > /etc/crontabs/root

COPY supervisor/postgres_cron.ini /etc/supervisor.d/

ENTRYPOINT ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
