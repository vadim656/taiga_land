FROM node:18.0.0

ADD .output /webapp/.output

EXPOSE 3005

WORKDIR /webapp/.output

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3005

CMD ["node", "/webapp/.output/server/index.mjs"]