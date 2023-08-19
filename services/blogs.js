import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(),"database","blogs.json")



export function getAll(){
    const data =fs.readFileSync(filePath)
    return JSON.parse(data)
}
export function getByEmail(email){
    const data = getAll()
    return data.filter(user => user.email.toLowerCase() === email.toLowerCase())
}
export function deleteById(id) {
    let data = getAll();
    data = data.filter(product => product.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Write updated data back to the file

    return data;
}
export async function save (email, title,description) {
    // if (!email || !title || !description ) {
    //     // throw new Error("Please fill out all the requirements");
    //     return res.status(422).json({error:"Please fill out all the fields"})
    // }
    // else{
    console.log(email,title,description)
    const data = getAll();
    
    data.push({
        id: data.length + 1,
       email,title,description
        
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
    }
    
// }