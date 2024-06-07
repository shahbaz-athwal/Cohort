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
    await client.end()
}

async function createAddressTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(50)  NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(6) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `)
    console.log(result)
    await client.end()

}

async function insertUser() {
    
    try {
        await client.connect()
        const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`
        const res = await client.query(query, ["Mantaj" ," mantaj@gmail.com", "123456789" ])
        console.log(res)
    } catch (error) {
        console.log(error)
        
    } finally {
        await client.end()
    }
}

async function insertAddress() {
    
    try {
        await client.connect()
        const query = `INSERT INTO address (user_id, city, street, pincode) VALUES ($1, $2, $3, $4);`
        const res = await client.query(query, [2, 'Punajb', '123 amyy St', '10001'])
        console.log(res)
    } catch (error) {
        console.log(error)
        
    } finally {
        await client.end()
    }
}
async function getUserDetailsWithAddress(userId: string) {
    
    try {
        await client.connect();
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.street, a.pincode
            FROM users u
            JOIN address a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}
getUserDetailsWithAddress("2");

// createAddressTable()
// insertAddress()

