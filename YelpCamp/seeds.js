var 	mongoose 	= require("mongoose"),
		Campground	= require("./models/campground"),
		Comment		=require("./models/comment");

// var data = [
// 	{name: "Cloud's Rest", 
// 	 image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
// 	 description: "Bacon ipsum dolor amet ground round bresaola sirloin pastrami. Swine ball tip doner, sirloin spare ribs pork kielbasa pig kevin beef ribs jerky drumstick chuck burgdoggen. Pastrami burgdoggen salami shank jowl frankfurter landjaeger. Meatball cow pancetta, leberkas pork belly burgdoggen chuck brisket doner shoulder. Biltong buffalo spare ribs, shank andouille bresaola ribeye pork chop meatball tail beef ribs. Shank cupim shankle meatball."
// 	}, 
// 	{name: "Desert Mesa", 
// 	 image: "https://hotelgestion.files.wordpress.com/2017/05/fusion-campingco-campsy.jpg",
// 	 description: "Bacon ipsum dolor amet ground round bresaola sirloin pastrami. Swine ball tip doner, sirloin spare ribs pork kielbasa pig kevin beef ribs jerky drumstick chuck burgdoggen. Pastrami burgdoggen salami shank jowl frankfurter landjaeger. Meatball cow pancetta, leberkas pork belly burgdoggen chuck brisket doner shoulder. Biltong buffalo spare ribs, shank andouille bresaola ribeye pork chop meatball tail beef ribs. Shank cupim shankle meatball."
// 	},
// 	{name: "Canyon Floor", 
// 	 image: "https://lossaboresdemexico.com/wp-content/uploads/2019/04/gettyimages-649155058.jpg",
// 	 description: "Bacon ipsum dolor amet ground round bresaola sirloin pastrami. Swine ball tip doner, sirloin spare ribs pork kielbasa pig kevin beef ribs jerky drumstick chuck burgdoggen. Pastrami burgdoggen salami shank jowl frankfurter landjaeger. Meatball cow pancetta, leberkas pork belly burgdoggen chuck brisket doner shoulder. Biltong buffalo spare ribs, shank andouille bresaola ribeye pork chop meatball tail beef ribs. Shank cupim shankle meatball."
// 	},
// ];

function seedDB(){
	//Remove all campgrounds
	Campground.remove({}, function (err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds!");
//		add a few campgrounds
//	data.forEach(function(seed){
//		Campground.create(seed, function(err, campground){
//			if(err){
//				console.log(err);
//			} else {
//				console.log("added a campground");
				//create a comment 
//				Comment.create(
//				{
//					text: "This place is great but I wish there was",
//					author: "Homer"
//				}, function(err, comment){
//					if(err){
//						console.log(err);
//					} else{ 
//					campground.comments.push(comment);
//					campground.save();	
//					console.log("Create new comment");
//					}
//				});
//			}
//		});
//	});

});
	//add a few comments
}

module.exports = seedDB;