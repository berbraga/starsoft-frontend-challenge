# Usa a imagem do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json, yarn.lock e instala as dependências com Yarn
COPY package.json yarn.lock ./
RUN yarn install

# Copia o restante do código para dentro do contêiner
COPY . .

# Exponha a porta que o Next.js vai rodar (3000 por padrão)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["yarn", "dev"]
