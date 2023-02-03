const stripe = require('stripe')('sk_test_51ML3mmCZwBUcumd5gzAH8dvIQ5NA0VSCvB0Q0cnBVz0eRvDX8micDhbtvwwkPwjT5qPPIyOjuz6s7L1HqxnvLsVc00vB5AL5yc');


export default async (req, res) => {
    

 const balance = await stripe.balance.retrieve();
 
     res.status(200).json({balance:balance})
     
 
}