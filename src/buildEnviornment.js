import { writeFileSync, mkdirSync } from 'fs'

const outputToFIle = {
    production: true,
    API_HOST: process.env['API_HOST'],
    API_BEARER_TOKEN: process.env['API_BEARER_TOKEN'],
}

const dir = mkdirSync('/project/website/app/environments/', { recursive: true });
const file1 = writeFileSync('/project/website/app/environments/environment.ts', `export const environment = ${JSON.stringify(outputToFIle, null, 4)};`, 'hex');
// const file = writeFileSync('/project/website/app/environments/environment.ts', `export const environment = ${JSON.stringify(outputToFIle, null, 4)};`);

console.debug({dir, file1})