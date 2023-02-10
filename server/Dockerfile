FROM alpine:3.15.0

# Install java
RUN apk update
RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community openjdk17-jre-headless

# Name of the app jar
ARG JAR_FILE

# Copy files
COPY $JAR_FILE app.jar

CMD java -jar app.jar

#ENTRYPOINT [ \
#    "java", \
#    "-jar", \
#    "app.jar" \
#]