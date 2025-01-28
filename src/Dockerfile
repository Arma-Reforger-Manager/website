# syntax=docker/dockerfile:1.4

FROM --platform=$BUILDPLATFORM node:latest as builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@13

COPY package.json package-lock.json ./
RUN npm i

COPY buildEnviornment.js .
RUN npm run build:env
RUN cd /project/website/environments; ls -a  

WORKDIR /project

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0", "---configuration", "production"]

FROM builder as dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]