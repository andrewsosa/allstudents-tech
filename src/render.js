$("#header h1").html("")
$("#header h2").html("")
$("#header button").css({opacity: 0})

$(() => {


    let type_h1 = function() {
        $("#header h1").typed({
                strings: ["Students(q='tech').all() ^1000", "(( allstudents.tech ))"],
                callback: type_h2
        });
    }

    let type_h2 = function() {
        $("#header h2").typed({
            strings: ["a network of sponsors in tech space <br> who want your student group to suceed ^300"],
            callback: ping_btn
        })
    }

    let ping_btn = function () {
        $("#header button").css({opacity: 1}).triggerHandler("click")
    }

    type_h1()

        // $("h1").typed({
        //         strings: ["allstudents.tech ^1000", "(( allstudents.tech ))"]
        //         callback:
        // });
        //
        // // $("h2").typed({
        // //     strings: ["a network of sponsors in tech space \n who want your student group to suceed"]
        // // })
        //
        //
        // // Flicker button on load
        // setTimeout(() => {
        //     $(".material-ripple").triggerHandler("click")
        // }, 3000)




});
