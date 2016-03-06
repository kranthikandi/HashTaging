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
    
    var name= "<div class='/ '/><p style='font-size: 16px' ><b>"+values.name+"</b></p><p style='font-size: 12px'>@"+values.screenName+"</p>";
    var date = "<p>"+values.date+"</p>";
    var datearray = date.split(" ");
    var date = datearray[0]+" "+datearray[1]+" "+datearray[2];
    var img=values.img;
    var tweet ="<p>"+values.tweet+"</p><br>"+"<img src="+values.imgUrl+"><br>";
    $("#data").append("<img src="+img+">"); 
    $("#data").append(name);
    $("#data").append(date);
    $("#data").append(tweet);
     if(index==4){
	return false;
}
    });
    }
    });
}