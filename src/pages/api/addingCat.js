import { PrismaClient } from "@prisma/client"
 
const prisma = new PrismaClient()
 export default async function handler(req ,res ){
  console.log("i am in registation",req.body)
  
  
 

 
const result = await prisma.category.create({data:{name:req.body.name,photo:req.body.url}}).finally(async()=>{prisma.$disconnect()})
      console.log(result)
  console.log("i am in 3333",result)

     return res.status(200).json({result:{error:0,mess:"every think is ok"}}) 

 
                   

  
  
}