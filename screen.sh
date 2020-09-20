#!/bin/bash

SCREEN_NAME="scroll"

exec() {
    tabName=$1
    cmd=$2
    echo $tabName
    if ! screen -list | grep -q "${SCREEN_NAME}"; then
        screen -dmS ${SCREEN_NAME};
        sleep 1;
    fi
    screen -S ${SCREEN_NAME} -X screen -t ${tabName}
    screen -S ${SCREEN_NAME} -p ${tabName} -X stuff "$cmd^M";
}

case "$1" in
    stopall)
        screen -X -S ${SCREEN_NAME} quit
        ;;
    startall)
        exec "server" "./compile.sh s"
        exec "hot" "./compile.sh hot"
        ;;
    *)
        echo $"Usage: $0 {startall|stopall}"
        exit 1
esac

exit $?
