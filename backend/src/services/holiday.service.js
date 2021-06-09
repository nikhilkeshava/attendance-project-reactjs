const Holiday = require('../models/holiday.model')

exports.createHoliday = async (Hdata) => {
    const holiday = new Holiday(Hdata);
    
    let promise = new Promise(async (resolve, reject) => {
        try {
            if ( holiday) {
                await holiday.save();
                resolve({ code: 200, holiday } );
            }
        } catch ( err ) {
            reject({ code: 500, message: err.message })
        }
    })
    return promise;
}



exports.getHoliday = async (skip,limit ) => {
  
  let promise = new Promise(async (resolve, reject) => {
      
      try {
       
        const holiday = await Holiday.find({ isDeleted: false }, null, {sort:{
          createdAt: -1 //Sort by Date Added DESC
      }})
          .skip(skip)
          .limit(limit);
          resolve({ code: 200, holiday } );
      } catch (error) {
        reject({ code: 500, message: error.message })
      }
  })
  return promise;
}