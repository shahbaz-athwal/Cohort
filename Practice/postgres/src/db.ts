import {Client} from "pg"

const client = new Client({
    connectionString: "postgres://postgres.gvgiqepqxmamvnhzbqwk:EWF3cCYLQNAoDh0Q@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
})


async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertUser() {
    
    try {
        await client.connect()
        const query = `INSERT INTO users (username, email, password) VALUES ('shahbaz', 'shahbaz@gmail.com', '123456789');`
        const res = await client.query(query)
        console.log(res)
    } catch (error) {
        console.log(error)
        
    } finally {
        await client.end()
    }
}

insertUser()