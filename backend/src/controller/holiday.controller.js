const HolidayService = require("../services/holiday.service");


exports.createHoliday=async (req, res) => {
    try{
        let response = await HolidayService.createHoliday(req.body);
        if(response){
            // console.log("res",response,response.code)
                res.status(response.code).json(response)
        }else{
            res.status(400)
        }
    }
    catch(error){
        console.log("error",error)
        let code = error.code ? error.code : 400;
        res.status(code).json({ code: code, message: error.message });
    }
}


exports.getHoliday=async (req, res) => {
  try{
    const skip = parseInt((req.query.page-1) * req.query.limit);
    const limit = parseInt(req.query.limit);
      let response = await HolidayService.getHoliday(skip,limit);
      if(response){
          // console.log("res",response,response.code)
              res.status(response.code).json(response)
      }else{
          res.status(400)
      }
  }
  catch(error){
      console.log("error",error)
      let code = error.code ? error.code : 400;
      res.status(code).json({ code: code, message: error.message });
  }
}