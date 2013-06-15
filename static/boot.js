/**
 * boot the web app
 */
(function(){    
    //=========================
    // CONFIG
    //=========================

    $LAB.setGlobalDefaults({BasePath:'lib/'});
    //=========================
    // Load Library
    //=========================
    $LAB.script("require.js")
        .script("director.js")
        .wait(boot);

    //========================
    // Load Main Module
    //========================
    function boot(){

        config();

        require(["app"], function(app){
            app.start();
        })
    }


    function config(){

        requirejs.config({
            paths : {
                async   : "lib/async",
                onecolor : "lib/onecolor",
                qpf     : "lib/qpf",
                emage  : "lib/emage",
                knockout : "lib/knockout",
                'ko.mapping' : 'lib/ko.mapping',
                // Use jquery temporary, zepto's bind does not support context
                "$" : "lib/jquery",
                "_" : "lib/underscore"
            },
            shim : {
                '$' : {
                    exports : "$"
                },
                '_' : {
                    exports : "_"
                },
                'app' :["modules/common/histogram",
                        "modules/common/list",
                        "modules/common/modal",
                        "modules/common/region",
                        "modules/common/iconbutton",
                        "modules/common/nativehtml",
                        "modules/common/color"]
            },
        })
    }

}).call( this )