import { Pool } from "pg";

const pool = new Pool({
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "Coder@2004",
    database: "movie-next-app"
});
 
export default Pool;