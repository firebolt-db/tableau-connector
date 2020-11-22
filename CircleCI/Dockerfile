FROM python:3.9.0-alpine
### Get Java via the package manager
RUN apk update \
&& apk upgrade \
&& apk add --no-cache bash \
&& apk add --no-cache --virtual=build-dependencies unzip \
&& apk add --no-cache curl \
&& apk add --no-cache openjdk8

### INSTALL GIT 
RUN apk add git


### SET JAVA_HOME environment variable, uncomment the line below if you need it
ENV JAVA_HOME="/usr/lib/jvm/java-1.8-openjdk"
ENV PATH="${JAVA_HOME}/bin:${PATH}"

### clone connector plugin sdk
WORKDIR /tableau
RUN git clone https://github.com/tableau/connector-plugin-sdk.git 
RUN mkdir connector-plugin-sdk/samples/plugins/firebolt_connector 



