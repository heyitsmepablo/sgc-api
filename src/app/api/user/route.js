
import { Client } from "pg";

export async function GET() {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'sgc',
        password: 'postgres',
        port: 5432, // Porta padrão do PostgreSQL
      });

      try{
          await client.connect()
          const result = await client.query('SELECT id,nome,email,x,y FROM public."CLIENTE"')
          return new Response(result.rows,{
            status:200,
            headers:{'Content-Type':'application/json'}
          })
      }catch(/**@type {any} */ e){
          return new Response(e,{
            status:500,
            headers:{'Content-Type':'application/json'}
          })
      } finally{
          await client.end()
      }

}

export async function POST(request) {}
 

