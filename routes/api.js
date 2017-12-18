var sha1 = require('sha1');

module.exports.login = function(req,res){

    var email = req.body.email;
    var password = sha1(req.body.password);

    req.getConnection(function (err, connection) {

        var query = connection.query('select * from tb_user where email = ? and password = ?', [email,password] , function(err, result){

            if(err)
              console.log("Error Selecting : %s ",err );
                
              res.status(200).json({data:result})
        })
    
    });
};