1. Package : npm install env-cmd
2. Version : ^10.1.0

3. Advantage : We can use muplitple Env like .env ,.env.development , .env.production

4. File Extension : `.env.{ENV_NAME}`

   Here : ENV_NAME = production | development | qa

5. How to make variable in env file :
   `REACT_APP_{VAR_NAME}= VALUE`

EX : REACT_APP_BUILD = 212

6. How to run project on different different env

for development : `npm start `
for QA : `npm run start-qa`
for Prod : `npm run start-prod`

Note : For Build it should be sync with jenkins server for deployment
