export class EnquiryModel
{
    constructor(

        public fullname:string,
        public email:string,
        public mobile:string,
        public picup_location:string,
        public dropoff_location:string,
        public picup_date:string,
        public picup_time:string,
        public vehicle_id:string,
        public added_by:number,
        public enq_status:string,
        

    ){}
}