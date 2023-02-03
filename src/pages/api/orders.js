 import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
export default async (req, res) => {
    

  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
 


    const oreders = await prisma.order.findMany({where: {
      AND: [
        
        { payed: true },
        { status:"verifing" },
       
      ],
    },}).finally(async()=>{prisma.$disconnect()})
    
    
     res.status(200).json(oreders)
    // console.log("JSON Web Token", JSON.stringify(token, null, 2))
    
  }  
  
 