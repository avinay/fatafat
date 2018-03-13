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
            window.plugins.toast.showLongBottom('Please Check Your Internet Connection!', 'long', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                        document.location.href = "refresh.html";
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
