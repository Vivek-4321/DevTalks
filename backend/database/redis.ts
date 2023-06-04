import { connect } from 'https://deno.land/x/redis/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const envVars = config();

console.log(envVars.DATABASE_URL);

const redis = await connect({
    hostname: envVars.REDIS_HOSTNAME,
    port: 12476,
    password: envVars.REDIS_PASSWORD,
});

export default redis;