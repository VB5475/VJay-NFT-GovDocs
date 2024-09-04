const schema = require("./signupschema");

async function signup(data) {
  try{
    await schema.create(data);
      return {
        ok: true,
      }
  }
  catch(err){
    return {
      ok:false,
      err:err,
    }
  }
}

async function findemail(data) {
  return await schema
    .findOne(
      { email: data },
      {
        _id: 0,
        __v: 0,
      }
    )
    .exec();
}
module.exports = { signup, findemail };
