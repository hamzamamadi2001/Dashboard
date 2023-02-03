import { PrismaClient } from "@prisma/client"
 
const prisma = new PrismaClient()
 export default async function handler(req ,res ){
  console.log("i am in registation",req.body)
  
  
 

 
const result = await prisma.product.create({data:{name:req.body.name,price:req.body.price,unit:req.body.mizan,categoryId:req.body.cat,baseQuantity:req.body.baseQuantity,photo:req.body.url}}).finally(async()=>{prisma.$disconnect()})
      console.log(result)
  console.log("i am in 3333",result)

     return res.status(200).json({result:{error:0,mess:"every think is ok"}}) 

 
                   

  
  
}