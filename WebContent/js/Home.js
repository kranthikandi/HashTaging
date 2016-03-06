function searchTweets(){
var text = $("#text").val();
var twitteCount;
var data = new Array();
var meta = new Array();
var tweetMedia = new Array();
var imgsize = new Array();
    $.ajax({url: "https://search-proxy.spredfast.com/search.json?q=nbcuhackathon&filter.start=-1d&filter.finish=0&view.entities.limit=20",
    success: function(result){
    console.log(result);
        twitteCount=result.views.entities.counts.total;
   meta.push(result.views.entities.meta);
    $.each(result.views.entities.data, function (index, value) {
    tweetMedia.push(value.raw.entities.media);
    $.each(tweetMedia, function (index, elements) {
        $.each(elements, function (index, element) {
        imgsize.push(element.sizes);
        $.each(imgsize, function (index, ele) {
        var h= ele.small.h;
        var w= ele.small.w;
        
    var pageData = {
    id:index,
    name:value.raw.user.name,
    img: value.raw.user.profile_image_url,
    date:value.raw.created_at,
    tweet: value.raw.text,
    screenName:value.raw.user.screen_name,
    imgUrl:element.media_url,
    h: ele.small.h,
    w: ele.small.w
    }
    data.push(pageData);
        });
        });
        });
    });
    console.log(data);
$.each(data, function (index, values) {
	    var twUrl = values.tweet.indexOf("https:"); 
	    var tweeturl = values.tweet.substring(twUrl);
	    var tweet = values.tweet.substring(0,twUrl);
	    var name= "<div class='col-md-11 '><p style='font-size: 20px' ><b>"+values.name+"</b>  @"+values.screenName+"</p>";
	    var dat = "<p>"+values.date+"</p>";
	    var datearray = dat.split(" ");
	    var date = name+datearray[0]+" "+datearray[1]+" "+datearray[2];
	    var img=values.img;
	var tweet =date+"<a href="+tweeturl+"><p>"+tweet+"</p></a>"+"<img style='height:300 ;width:250 ; '"+"src="+values.imgUrl+"><hr><br></div>";
	    $("#data").append("<div class='col-md-1' style='border-top=solid 1px black'><img src="+img+"></div>"); 
	    $("#data").append(tweet);
	    if(index==5){
	    return false;
	    }
	     
	    });
	    $.each(data, function (index, values) {
	    var img= "<div class='col-md-4' style='padding-right=10px'><img src="+values.imgUrl+" height='200' width='255'></div><br>";
	    $("#photos").append(img);
	    if(index==5){
	return false;
	}
	    });
    }
    });
}

