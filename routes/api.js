var sha1 = require('sha1');

module.exports.login = function(req,res){

    var email = req.body.email;
    var password = sha1(req.body.password);

    req.getConnection(function (err, connection) {

        var query = connection.query('select * from tb_user where email = ? and password = ?', [email,password] , function(err, result){

            if (err) 
            	  res.status(500).json(err);
 
		    for (var i in result) {
		        console.log(result[i]);
		        res.status(200)
		        .json({
		        	status:'true',
		        	data:result[i]
		        })
		    }
        })
    
    });
};