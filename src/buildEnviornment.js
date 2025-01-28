import { writeFileSync, mkdirSync } from 'fs'

const outputToFIle = {
    production: true,
    API_HOST: process.env['API_HOST'],
    API_BEARER_TOKEN: process.env['API_BEARER_TOKEN'],
}

mkdirSync('/project/website/environments/', { recursive: true });
writeFileSync('/project/website/environments/environment.prod.ts', `export const environment = ${JSON.stringify(outputToFIle, null, 4)};`);