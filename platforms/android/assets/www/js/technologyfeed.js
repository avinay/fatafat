/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        //testing

        if(navigator.connection.type==Connection.NONE){
            if(localStorage.getItem("technewsfeed") === null){
            //alert("Needed internet connection!");
            window.plugins.toast.showLongBottom('Please Check Your Internet Connection!', 'long', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
            document.location.href = "refresh.html";
                }else{
                  window.plugins.toast.showLongBottom('No internet connection!', 'long', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                  var local_data=JSON.parse(localStorage.getItem("technewsfeed"));
                  //alert(local_data.counts);
                  if(local_data.counts >= 50 ){
                  for(var inc=0;inc<50;inc++){
                  if(local_data.posts[inc].publisher_image == ""){
                  data_content='<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box"><div class="img-container"><img src=""></div><div class="conent-container"><h4>'+local_data.posts[inc].title+'</h4><p>'+local_data.posts[inc].description+'</p><div class="con-btm"><div class="lef"><a class="timestamp" href="#"><span class="more-txt">'+local_data.posts[inc].time+'</span></a><a class="more" href="javascript:void(0);" onclick="error_con();"><span class="more-txt">Read more</span></a></div><div class="righ"><span class="share-txt"><a href="javascript:void(0);" onclick="error_con();" ><i class="ion-android-share"></i> Share</a></span></div></div></div></div></div></div>';
                  }else{
                  data_content='<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box"><div class="img-container"><img src=""></div><div class="conent-container"><h4>'+local_data.posts[inc].title+'</h4><p>'+local_data.posts[inc].description+'</p><div class="con-btm"><div class="lef"><a class="timestamp" href="#"><span class="more-txt">'+local_data.posts[inc].time+'</span></a><a class="more" href="javascript:void(0);" onclick="error_con();"><span class="more-txt">Read more at <span class="pub-txt">'+local_data.posts[inc].publisher_name+'</span></span></a></div><div class="righ"><span class="share-txt"><a href="javascript:void(0);" onclick="error_con();"><i class="ion-android-share"></i> Share</a></span></div></div></div></div></div></div>';
                  }
                  $('#fullpage').append(data_content);
                  }

                  }else{
                  for(var inc=0;inc<local_data.counts;inc++){
                  if(local_data.posts[inc].publisher_image == ""){
                  data_content='<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box"><div class="img-container"><img src=""></div><div class="conent-container"><h4>'+local_data.posts[inc].title+'</h4><p>'+local_data.posts[inc].description+'</p><div class="con-btm"><div class="lef"><a class="timestamp" href="#"><span class="more-txt">'+local_data.posts[inc].time+'</span></a><a class="more" href="javascript:void(0);" onclick="error_con();"><span class="more-txt">Read more</span></a></div><div class="righ"><span class="share-txt"><a href="javascript:void(0);" onclick="error_con();" ><i class="ion-android-share"></i> Share</a></span></div></div></div></div></div></div>';
                  }else{
                  data_content='<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box"><div class="img-container"><img src=""></div><div class="conent-container"><h4>'+local_data.posts[inc].title+'</h4><p>'+local_data.posts[inc].description+'</p><div class="con-btm"><div class="lef"><a class="timestamp" href="#"><span class="more-txt">'+local_data.posts[inc].time+'</span></a><a class="more" href="javascript:void(0);" onclick="error_con();"><span class="more-txt">Read more at <span class="pub-txt">'+local_data.posts[inc].publisher_name+'</span></span></a></div><div class="righ"><span class="share-txt"><a href="javascript:void(0);" onclick="error_con();"><i class="ion-android-share"></i> Share</a></span></div></div></div></div></div></div>';
                  }
                  $('#fullpage').append(data_content);
                  }


                  }

                  data_content = '<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box last"><div class="last-post-web"><p>For more posts</p><a href="http://avinay.com/newshots/"><img class="icon" src="img/web.png"></a></div></div></div></div></div>';
                                      $('#fullpage').append(data_content);
                  $('#section1').remove();
                  $('#fullpage').fullpage({
                  	scrollingSpeed: 300,
                  	touchSensitivity: 5,
                          afterLoad: function(anchorLink, index){
                              var loadedSection = $(this);
                      $('.swiper-slide').css('height', $(window).innerHeight());
                  	}

                  	});
                  $("#menu").hide();
                  $("#menu-btn").click(function(){
                  $("#menu").show( "scale", 100 );
                  });
                  $("#close-btn").click(function(){
                  $("#menu").hide( "scale", 100 );
                  });
                  }

        }
        else{
              $.get("http://avinay.com/newshots/getPostCat", {
                      category: 2,
                      take: 1,
                      skip: 0
                  }, function(feed){
                  var count=feed.counts;
                  //alert(count);
              if(count >= 50){
              $.get("http://avinay.com/newshots/getPostCat", {
                category: 2,
                take: 50,
                skip: 0
            }, function(result){
                if(result.success == true){
                    //alert(JSON.stringify(result));
                    localStorage.removeItem("technewsfeed");
                    localStorage.setItem('technewsfeed',JSON.stringify(result));
                    if(localStorage.getItem("technewsfeed") === null){
                    }else{
                    var local_data=JSON.parse(localStorage.getItem("technewsfeed"));
                    //alert(local_data.counts);
                    for(var inc=0;inc<50;inc++){
                    var title=local_data.posts[inc].title;
                    var modified_title= title.replace(/[^a-z0-9%$&\s]/gi, '');
                    if(local_data.posts[inc].publisher_image == ""){
                                      data_content='<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box"><div class="img-container"><img src="'+local_data.posts[inc].image+'"></div><div class="conent-container"><h4>'+local_data.posts[inc].title+'</h4><p>'+local_data.posts[inc].description+'</p><div class="con-btm"><div class="lef"><a class="timestamp" href="#"><span class="more-txt">'+local_data.posts[inc].time+'</span></a><a class="more" href="javascript:void(0);" onclick="open_this_url(\''+ local_data.posts[inc].url +'\');"><span class="more-txt">Read more</span></a></div><div class="righ"><span class="share-txt"><a href="javascript:void(0);" onclick="window.plugins.socialsharing.share(\''+modified_title+'   -via PointBlankNews\', null, null, \''+local_data.posts[inc].share_link+'\')"><i class="ion-android-share"></i> Share</a></span></div></div></div></div></div></div>';
                                      }else{
                                      data_content='<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box"><div class="img-container"><img src="'+local_data.posts[inc].image+'"></div><div class="conent-container"><h4>'+local_data.posts[inc].title+'</h4><p>'+local_data.posts[inc].description+'</p><div class="con-btm"><div class="lef"><a class="timestamp" href="#"><span class="more-txt">'+local_data.posts[inc].time+'</span></a><a class="more" href="javascript:void(0);" onclick="open_this_url(\''+ local_data.posts[inc].url +'\');"><span class="more-txt">Read more at</span><img src="'+local_data.posts[inc].publisher_image+'"></a></div><div class="righ"><span class="share-txt"><a href="javascript:void(0);" onclick="window.plugins.socialsharing.share(\''+modified_title+'   -via PointBlankNews\', null, null, \''+local_data.posts[inc].share_link+'\')"><i class="ion-android-share"></i> Share</a></span></div></div></div></div></div></div>';
                                      }
                    $('#fullpage').append(data_content);
                    }
                    data_content = '<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box last"><div class="last-post-web"><p>For more posts</p><a href="http://avinay.com/newshots/"><img class="icon" src="img/web.png"></a></div></div></div></div></div>';
                                        $('#fullpage').append(data_content);
                    $('#section1').remove();
                    $('#fullpage').fullpage({
                    	scrollingSpeed: 300,
                    	touchSensitivity: 5,
                            afterLoad: function(anchorLink, index){
                                var loadedSection = $(this);
                        $('.swiper-slide').css('height', $(window).innerHeight());
                    	}

                    	});
                    }
                }
            });
              }else{
              $.get("http://avinay.com/newshots/getPostCat", {
                category: 2,
                take: count,
                skip: 0
            }, function(result){
                if(result.success == true){
                    //alert(JSON.stringify(result));
                    localStorage.removeItem("technewsfeed");
                    localStorage.setItem('technewsfeed',JSON.stringify(result));
                    if(localStorage.getItem("technewsfeed") === null){
                    }else{
                    var local_data=JSON.parse(localStorage.getItem("technewsfeed"));
                    //alert(local_data.counts);
                    for(var inc=0;inc<local_data.counts;inc++){
                    var title=local_data.posts[inc].title;
                    var modified_title= title.replace(/[^a-z0-9%$&\s]/gi, '');
                    if(local_data.posts[inc].publisher_image == ""){
                                      data_content='<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box"><div class="img-container"><img src="'+local_data.posts[inc].image+'"></div><div class="conent-container"><h4>'+local_data.posts[inc].title+'</h4><p>'+local_data.posts[inc].description+'</p><div class="con-btm"><div class="lef"><a class="timestamp" href="#"><span class="more-txt">'+local_data.posts[inc].time+'</span></a><a class="more" href="javascript:void(0);" onclick="open_this_url(\''+ local_data.posts[inc].url +'\');"><span class="more-txt">Read more</span></a></div><div class="righ"><span class="share-txt"><a href="javascript:void(0);" onclick="window.plugins.socialsharing.share(\''+modified_title+'   -via PointBlankNews\', null, null, \''+local_data.posts[inc].share_link+'\')"><i class="ion-android-share"></i> Share</a></span></div></div></div></div></div></div>';
                                      }else{
                                      data_content='<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box"><div class="img-container"><img src="'+local_data.posts[inc].image+'"></div><div class="conent-container"><h4>'+local_data.posts[inc].title+'</h4><p>'+local_data.posts[inc].description+'</p><div class="con-btm"><div class="lef"><a class="timestamp" href="#"><span class="more-txt">'+local_data.posts[inc].time+'</span></a><a class="more" href="javascript:void(0);" onclick="open_this_url(\''+ local_data.posts[inc].url +'\');"><span class="more-txt">Read more at</span><img src="'+local_data.posts[inc].publisher_image+'"></a></div><div class="righ"><span class="share-txt"><a href="javascript:void(0);" onclick="window.plugins.socialsharing.share(\''+modified_title+'   -via PointBlankNews\', null, null, \''+local_data.posts[inc].share_link+'\')"><i class="ion-android-share"></i> Share</a></span></div></div></div></div></div></div>';
                                      }
                    $('#fullpage').append(data_content);
                    }
                    data_content = '<div class="section fp-section fp-table"><div class="fp-tableCell"><div class="swiper-slide"><div class="news-box last"><div class="last-post-web"><p>For more posts</p><a href="http://avinay.com/newshots/"><img class="icon" src="img/web.png"></a></div></div></div></div></div>';
                                        $('#fullpage').append(data_content);
                    $('#section1').remove();
                    $('#fullpage').fullpage({
                    	scrollingSpeed: 300,
                    	touchSensitivity: 5,
                            afterLoad: function(anchorLink, index){
                                var loadedSection = $(this);
                        $('.swiper-slide').css('height', $(window).innerHeight());
                    	}

                    	});
                    }
                }
            });
              }

            });

            $("#menu").hide();

            	    	$("#menu-btn").click(function(){
            			    $("#menu").show( "scale", 100 );
            			});

            			$("#close-btn").click(function(){
            			    $("#menu").hide( "scale", 100 );
            			});


            }


        //testing end
        var push = PushNotification.init({
            "android": {
                "senderID" : "xxxxxxxxxxxx",
                'badge'    : true,
                "icon": "icon"


            },
            "ios": {"alert": "true", "badge": "true", "sound": "true"},
            "windows": {}
        });

        push.on('registration', function(data) {

            console.log(JSON.stringify(data));


                var device_token = device.uuid;
                var device_type= device.platform;
                var gcm=data.registrationId;
                $.get( "http://avinay.com/newshots/register", { device_token: device_token , device_type: device_type ,gcm: gcm } )
                .done(function(data ) {

                localStorage.setItem('gcm',gcm);
                if(data.success==true){
                    //alert( "Device registeration successful!" );
                 }else{
                 }
                });



        });

        push.on('notification', function(data) {

             //alert(JSON.stringify(data));

            if(data.additionalData.foreground == false) {

                localStorage.single_id = data.additionalData.single_id;

                //alert(localStorage.single_id);

                document.location.href = "single.html";
            }
            push.finish(function () {
                console.log('finish successfully called');
            });
        });

        push.getApplicationIconBadgeNumber(function(n) {
            console.log('success', n);
        }, function() {
            console.log('error');
        },data.count);

        push.on('error', function(e) {
            console.log("push error");
        });


  }

};

app.initialize();
