const ConstantHelper = {
    "service_url":"http://abcdef",
    "api_login":"AuthenticateUser", // ?username=&password=
    "db_name":"tracktreads.db",
    "photo_save_folder":"photos",
}

const TimeHelper = {

    getCurrentTimeStamp() {
        let currentdate = new Date(); 
        let datetime = currentdate.getDate() + ""
            + (currentdate.getMonth()+1)  + ""
            + currentdate.getFullYear() + "_"
            + currentdate.getHours() + ""
            + currentdate.getMinutes() + ""
            + currentdate.getSeconds();
        return datetime;
    }
}

export const Util = {
    TimeHelper,
    ConstantHelper,
};

export default Util;