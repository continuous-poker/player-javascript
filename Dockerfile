FROM node:21-alpine
WORKDIR /app
COPY package* ./
RUN npm install --production
COPY . ./
EXPOSE 8000
CMD ["npm", "start"]