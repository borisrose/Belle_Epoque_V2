ARG VERSION=20
FROM node:${VERSION}
WORKDIR /app
COPY minimum-deps.sh initial-script
RUN chmod u+x initial-script 
RUN ./initial-script
RUN echo "✅ Dependencies have been installed"
COPY minimum-deps.sh initial-architure
RUN chmod u+x initial-architecture.sh
RUN ./initial-architecture ./
RUN echo "✅ Minimal Architecture done"
RUN ls -l
