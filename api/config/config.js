const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/todo-app', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

module.exports=mongoose;