
const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "123456";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);



function signJwt(email, password){
    const emailResponse = emailSchema.safeParse(email);
    const passwordResponse = passwordSchema.safeParse(password);

    if ( !emailResponse.success || !passwordResponse.success){
        return null;
    }

    const signed = jwt.sign({
        email
    }, jwtPassword)

    console.log(signed)
    return signed;

}

function verifyJwt(token, password){
    const verify = jwt.verify(token, jwtPassword)
    console.log(verify)
}

signJwt("shahbaz@gmail.com","122sdddd")
verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWhiYXpAZ21haWwuY29tIiwiaWF0IjoxNzE1NTk5NjM1fQ.hKRDb9Gns12OGls7k6SANYr6Ktf30r35F2WCwWDru5")


