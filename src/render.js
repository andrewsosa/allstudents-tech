$(() => {

        $.chain = function() {
            var promise = $.Deferred().resolve().promise();
            jQuery.each(arguments, () => {
                promise = promise.pipe(this);
            });
            return promise;
        };

        let animations = $.chain(() => {
            return $("h1").typed({
                strings: ["allstudents.tech ^1000", "(( allstudents.tech ))"]
            });
        }, () => {
            return $("h2").typed({
                strings: ["a network of sponsors in tech space \n who want your student group to suceed"]
            })
        })

        $.when(animations).done(() => {
            console.log("All animations complete!")
            $(".material-ripple").click()

        })


    });
