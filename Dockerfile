FROM java:8
MAINTAINER Andre Loureiro <andreloureiroo@gmail.com>

RUN apt-get update

ADD target/dckr.jar /srv/dckr.jar

EXPOSE 8080

CMD ["java", "-jar", "/srv/dckr.jar"]
