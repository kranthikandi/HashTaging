function searchTweets(){
	$("#about").hide();
	$("#data").empty();
	$("#preloader").show();
	
var text = $("#text").val();
var twitteCount;
var data = new Array();
var meta = new Array();
var tweetMedia = new Array();
var imgsize = new Array();
var senti1 = new Array();
var ncount;
var necount;
var pcount;
$("#preloader").hide();
var url="https://search-proxy.spredfast.com/search.json?q="+text+"&filter.start=-1d&filter.finish=0&view.entities.limit=20";
    $.ajax({url: url,
    	success: function(result){
    		console.log(result);
    	    twitteCount=result.views.entities.counts.total;
				   meta.push(result.views.entities.meta);
    			$.each(result.views.entities.data, function (i, value) {
    				tweetMedia.push(value.raw.entities.media);
    				$.each(tweetMedia, function (j, imgurls) {
    					$.each(imgurls, function (j, imgurl) {
    					
    				
    				var pageData = {
    						name:value.raw.user.name,
    						img: value.raw.user.profile_image_url,
    						date:value.raw.created_at,
    						tweet: value.raw.text,
    						screenName:value.raw.user.screen_name,
    						imgUrl:imgurl.media_url
    				}
    				data.push(pageData);
    					});
    				});
        					});
    			console.log(data);
    			console.log(tweetMedia);
//        				});
//        			});
//    			});
    			$.each(data, function (m, values) {
    				var twUrl = values.tweet.indexOf("https:"); 
    				var tweeturl = values.tweet.substring(twUrl);
    				var tweet = values.tweet.substring(0,twUrl);
    						
    				var img=values.img;
    				var name= "<div class='col-md-11 '><p style='font-size: 20px' ><b>"+values.name+"</b> @"+values.screenName+"</p>";
					var dat = "<p>"+values.date+"</p>";
					var datearray = dat.split(" ");
					var date =name+ datearray[0]+" "+datearray[1]+" "+datearray[2];
					var tweet =date+"<a href="+tweeturl+"><p>"+tweet+"</p></a><br>"+"<img src="+values.imgUrl+"><br><br><hr></div>";
					$("#data").append("<div class='col-md-1'><img src="+img+" ></div>"); 
					$("#data").append(tweet);
					if(m==5){
						return false;
					}
    						 
    				});
    			$.each(data, function (n, values) {
    				var img= "<div class='col-md-4'><img src="+values.imgUrl+"></div>";
    				$("#imgs").append(img);
    				if(n==5){
						return false;
					}
    			});
    			}
    });
    $.ajax({url: "https://search-proxy.spredfast.com/search.json?q=trump&filter.start=-12h&filter.finish=0&view.sentiment=true",
    	success: function(result){
    		console.log(result);
    		var total = result.views.sentiment.counts.total;
    		senti1.push(result.views.sentiment.data);
    		console.log(senti1);
    		$.each(senti1, function (o, values) {
    			$.each(values, function (p, value) {
    				if(value.name=="neutral"){
    					ncount=value.counts.total;
    				}else if(value.name=="negative"){
    					necount=value.counts.total;
    				}else{
    					pcount=value.counts.total;
    				}
    			});
    		});
    		console.log("neutral"+ncount+"negative"+necount+"positve"+pcount);
    	}
    });
    datapie = [
               {label: "neutal",  data: ncount, color: '#e1ab0b'},
               {label: "negative",  data: necount, color: '#fe0000'},
               {label: "positive",  data: pcount, color: '#93b40f'}
           ];

           $.plot($("#placeholder"), datapie, { 
               series: {
                    pie: {
                        show: true,
                        label: {
                            show: true,
                            formatter: function(label,point){
                                return(point.percent.toFixed(2) + '%');
                                
                            }
                        }
                   }
               },        
               legend: {show: true}
           });

}

