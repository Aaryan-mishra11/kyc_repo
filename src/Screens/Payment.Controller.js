import Razorpay from "razorpay"
export default {
    async orderCreate(req,res,next){
        try{

            const instances = new Razorpay({
                key_id:"rzp_test_nF1kIRSWXnjUzm",
                key_secret:"lDTyFnBqOfMti0iefJ4JdIeh"


            });
            const {order_id , amount , payment_capture, currency} = req.body;
            const options ={
                amount: amount *100,
                currency: currency,
                receipt: order_id,
                payment_capture: payment_capture,
            };
            const order = await instances.orders.create(options);
            if(!order) return res.status(500).send("something occured");
            res.status(200).json({success:true,data:order});
        } catch(err){
            console.log(err);
        }
    },
    async cardDetail(req,res,next){
        try{

            const instances = new Razorpay({
                key_id:"rzp_test_nF1kIRSWXnjUzm",
                key_secret:"lDTyFnBqOfMti0iefJ4JdIeh"


            });
            // const {order_id , amount , payment_capture, currency} = req.body;
            // const options ={
            //     amount: amount *100,
            //     currency: currency,
            //     receipt: order_id,
            //     payment_capture: payment_capture,
            // };
            const {id}=req.body;
            const order = await instances.payments.fetch(id);
            if(!order) return res.status(500).send("something occured");
            res.status(200).json({success:true,data:order});
        } catch(err){
            console.log(err);
        }
    }
};      
