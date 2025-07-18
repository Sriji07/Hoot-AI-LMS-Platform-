import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./configs/schema.js",
    dbCredentials: {
        'url': process.env.NEXT_PUBLIC_DATABASE_CONNECTION_STRING || 'postgresql://neondb_owner:npg_ncbm6Itrukx7@ep-icy-fire-adi73qfx-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
    }
});
