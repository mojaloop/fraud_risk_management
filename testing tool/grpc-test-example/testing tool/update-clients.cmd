@ECHO OFF
rem CALL rm ./src/grpc -r
CALL docker-compose up
CALL docker-compose down 
rem --rmi local -v --remove-orphans
