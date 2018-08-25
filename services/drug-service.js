
getDrugs=function(req,res,next){
    res.status(200);
    res.send({drugList:"list"});
}

module.exports=getDrugs;

