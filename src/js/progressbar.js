$(document).ready(function(){
    jQuery.fn.anim_progressbar = function (aOptions) {
        // def values
        var iCms = 1000;
        var iMms = 60 * iCms;
        var iHms = 3600 * iCms;
        var iDms = 24 * 3600 * iCms;

        // def options
        var aDefOpts = {
            start: new Date(), // now
            finish: new Date().setTime(new Date().getTime() + 60 * iCms), // now + 60 sec
            interval: 100
        }
        var aOpts = jQuery.extend(aDefOpts, aOptions);
        var vPb = this;

        // each progress bar
        return this.each(
            function() {
                var iDuration = aOpts.finish - aOpts.start;

                // calling original progressbar
                $(vPb).children('.progress-bar__ui').progressbar();

                // looping process
                var vInterval = setInterval(
                    function(){
                        var iLeftMs = aOpts.finish - new Date(); // left time in MS
                        var iElapsedMs = new Date() - aOpts.start, // elapsed time in MS
                            iDays = parseInt(iLeftMs / iDms), // elapsed days
                            iHours = parseInt((iLeftMs - (iDays * iDms)) / iHms), // elapsed hours
                            iMin = parseInt((iLeftMs - (iDays * iDms) - (iHours * iHms)) / iMms),                             
                            iSec = parseInt((iLeftMs - (iDays * iDms) - (iMin * iMms) - (iHours * iHms)) / iCms), // elapsed seconds
                            lMin = 4-iMin;// progres minutes
                            lSec = 60-iSec;// progres seconds
                            iPerc = (iElapsedMs > 0) ? iElapsedMs / iDuration * 100 : 0; // percentages

                        // display current positions and progress
                        $(vPb).children('.progress-bar__percent').html(iPerc.toFixed(1)+'%');
                        $(vPb).children('.progress-bar__time').children('.progress-bar__time-start').html(lMin+':'+lSec);
                        $(vPb).children('.progress-bar__time').children('.progress-bar__time-finish').html(iMin+':'+iSec);
                        $(vPb).children('.progress-bar__ui').children('.ui-progressbar-value').css('width', iPerc+'%');

                        // in case of Finish
                        if (iPerc >= 100) {
                            clearInterval(vInterval);
                            $(vPb).children('.progress-bar__time').children('.progress-bar__time-start').html('0:0');
                            $(vPb).children('.progress-bar__time').children('.progress-bar__time-finish').html('5:00');
                            $(vPb).children('.progress-bar__percent').html('100%');
                        }
                    } ,aOpts.interval
                );
            }
        );
    }

     // from 1 second till 5:00
    var iNow = new Date().setTime(new Date().getTime() + 1 * 1000); // now plus 5 secs
    var iEnd = new Date().setTime(new Date().getTime() + 300 * 1000); // now plus 15 secs
    $('#progress1').anim_progressbar({start: iNow, finish: iEnd, interval: 100});

    // default mode
    $('#progress2').anim_progressbar();
});