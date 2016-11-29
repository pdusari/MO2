module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./client/index.html');
	});
	app.get('/myteam', function(req, res) {
		res.sendfile('./client/index.html');
	});
	app.get('/reports', function(req, res) {
		res.sendfile('./client/index.html');
	});

};
