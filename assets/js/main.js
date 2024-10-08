   /* Image Popup*/
   $('.workgallery .row').magnificPopup({
    delegate: 'a',
    type: 'image',
    fixedContentPos: true,
    closeOnBgClick: true,
    alignTop: false,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
});



let samt = 0;
  window.addEventListener('scroll', function () {

    samt <= 10 ? samt++ : AOS.refresh();

  });



  AOS.init({

    animatedClassName: 'aos-animate',

    disable: function () {

      var maxWidth = 769;

      return window.innerWidth < maxWidth;

    }

  }); 





$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 3,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
  });
  






//   dropzone 
/*
 * Nugget Name: Fully initialized web form (Project Planner) example that sends emails with attachments using Dropzone.js and PHPMailer
 * Nugget URI: http://www.onyxdev.net/snippets-item/form-example-send-emails-with-attachments-using-dropzone-js-phpmailer/
 * Author: Obada Qawwas
 * Author URI: https://www.onyxdev.net
 * Version: 1.0
**/


/**
 * Onyx party object
**/
var Onyx = {

    defaults: {
        debug: true
    },


    /**
     * Function to print results in the console if the above debug is true
    **/
    log: function() {
        if (Onyx.defaults.debug === true) {
            var argsArray = [],
                printOut = "console.log(args)";

            for ( var i = 0; i < arguments.length; i++ ) {
                argsArray.push("args[" + i + "]");
            }

            printOut = new Function( "args", printOut.replace( /args/, argsArray.join(",") ) );

            printOut(arguments);
        }
    },


    /**
     * Firing functions and bindings and other important stuff
    **/
    init: function(e) {

        if ( $("#smart-form").length ) {
            Onyx.projectPlanner();
            if ( $("body").data("form-completed") == "yes" ) {
                setTimeout(function() {
                    Onyx.plannerShowSuccess(true)
            }, 800)
            }
        }
    },


    /**
     * Project planner
    **/
    projectPlanner: function() {

        Onyx.initDropzone();

        var checkedValues = [];

        // Add default checked service
        $('input[name="planner_project_type_checkbox"]:checked').each(function() {
            $(this).val();
            checkedValues.push($(this).val())
        });

        $('input[name="planner_project_type"]').val(checkedValues.join(", "));

        $('div.type-selection').each(function() {

            $(this).on("click", function(e) {

                e.preventDefault();

                if ( $(this).find('input[checked]').length ) {
                    checkedValues.splice( $.inArray($(this).find('input[checked]').val(), checkedValues), 1 );
                    $(this).find('input[checked]').removeAttr('checked');
                    $('input[name="planner_project_type"]').val(checkedValues);

                    Onyx.log($.inArray($(this).find('input[name="planner_project_type_checkbox"]').val(), checkedValues));
                    Onyx.log(checkedValues);
                } else {
                    $(this).find('input[name="planner_project_type_checkbox"]').attr('checked', true);
                    checkedValues.push($(this).find('input[name="planner_project_type_checkbox"]').val());
                    $('input[name="planner_project_type"]').val(checkedValues.join(", "));

                    Onyx.log(checkedValues);
                    Onyx.log($.inArray($(this).find('input[name="planner_project_type_checkbox"]').val(), checkedValues));
                }

            });

        });

     

    },
    plannerShowSpinner: function(showSpinner) {
        if ("undefined" == typeof showSpinner) var showSpinner = true;

        if ( showSpinner ) {
            $(".form-controls, .fields-group").stop().animate({
                opacity: 0
            }, 400, function() {
                $(this).hide();
                $(".form-spinner").stop().css({
                    display: "block",
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 300)
            });
        } else {
            $(".form-spinner").stop().animate({
                opacity: 1
            }, 300, function() {
                $(this).hide();
                $(".form-controls, .fields-group").stop().css({
                    display: "block",
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 400)
            });
        }
    },
    plannerShowSuccess: function(showSuccess) {
        if ("undefined" == typeof showSuccess) var showSuccess = false;

        var showThankyou = function() {
            $(".form-spinner").stop().animate({
                opacity: 0
            }, 150, function() {
                $(this).hide();
                $(".form-thankyou-wrap").stop().css({
                    display: "block",
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 300)
            })
        };
        showSuccess ? $(".form-controls").stop().animate({
            opacity: 0
        }, 400, function() {
            $(this).hide(), showThankyou()
        }) : showThankyou()
    },


    /**
     * Upload button
    **/
    dropzone_active: false,
    updateDropzoneCount: function() {
        var uploadedCount = $(".dz-preview.dz-success").length,
            finalText = "";

        if ( uploadedCount == 1 ) {
            finalText = uploadedCount + " file uploaded.";
        } else if ( uploadedCount == 0 ) {
            finalText = "";
        } else {
            finalText = uploadedCount + " file uploaded.";
        }

        $(".total-uploaded").text(finalText)
    },
    initDropzone: function(e) {
        Dropzone.autoDiscover = false;

        Dropzone.options.plannerFilesDropzone = {
            paramName: "form_file",
            maxFilesize: 5,
            maxFiles: 2,
            acceptedFiles: "image/*,application/pdf",
            url: "form/file-upload.php",
            addRemoveLinks: true,
            forceFallback: false,
            clickable: true,

            /**
             * The text used before any files are dropped.
             */
            dictDefaultMessage: "Jetzt Fotos hochladen", // Default: Drop files here to upload

            /**
             * The text that replaces the default message text it the browser is not supported.
             */
            dictFallbackMessage: "Ihr Browser unterstï¿½zt kein Drag & Drop.", // Default: Your browser does not support drag'n'drop file uploads.

            /**
             * If the filesize is too big.
             * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
             */
            dictFileTooBig: "Datei ist zu groï¿½ ({{filesize}}MiB). Maxmium: {{maxFilesize}}MiB.", // Default: File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.

            /**
             * If the file doesn't match the file type.
             */
            dictInvalidFileType: "Diese Datei ist nicht erlaubt.", // Default: You can't upload files of this type.

            /**
             * If the server response was invalid.
             * `{{statusCode}}` will be replaced with the servers status code.
             */
            dictResponseError: "Server Fehler: {{statusCode}} .", // Default: Server responded with {{statusCode}} code.

            /**
             * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
             */
            dictCancelUpload: "X", // Default: Cancel upload

            /**
             * The text that is displayed if an upload was manually canceled
             */
            dictUploadCanceled: "Upload abgebrochen.", // Default: Upload canceled.

            /**
             * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
             */
            dictCancelUploadConfirmation: "Wollen Sie den Upload abbrechen?", // Default: Are you sure you want to cancel this upload?

            /**
             * If `addRemoveLinks` is true, the text to be used to remove a file.
             */
            dictRemoveFile: "X", // Default: Remove file

            /**
             * If this is not null, then the user will be prompted before removing a file.
             */
            dictRemoveFileConfirmation: null, // Default: null

            /**
             * Displayed if `maxFiles` is st and exceeded.
             * The string `{{maxFiles}}` will be replaced by the configuration value.
             */
            dictMaxFilesExceeded: "You can not upload any more files.", // Default: You can not upload any more files.

            /**
             * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
             * `b` for bytes.
             */
            dictFileSizeUnits: {tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b"},

            init: function() {
                Onyx.dropzone_active = true;
                $("input[name=form_file]").remove();

                this.on("addedfile", function(file) {
                    $('button[type="submit"]').attr("disabled", "disabled");
                    Onyx.updateDropzoneCount();
                });

                this.on("removedfile", function(file) {
                    Onyx.log('Start removing file!');

                    $.ajax({
                        type: "POST",
                        url: "http://127.0.0.1:5500/index.html",
                        data: {
                            target_file: file.upload_ticket,
                            delete_file: 1
                        },
                        sucess: function(jqXHR, textStatus){},
                        complete: function(jqXHR, textStatus){
                            var response = JSON.parse(jqXHR.responseText);

                            // Handle success
                            if (response.status === 'success') {
                                Onyx.log('Success: ' + response.info);
                            }

                            // Handle error
                            else {
                                Onyx.log('Error: ' + response.info);
                            }
                        }
                    });

                    var inputField = $("input[name=form_files_list]"),
                        filesArray = inputField.val().split(","),
                        fileIndex = $.inArray(file.upload_ticket, filesArray);

                    fileIndex !== -1 && filesArray.splice(fileIndex, 1);

                    inputField.val(filesArray.length > 0 ? filesArray.join(",") : "");
                    Onyx.updateDropzoneCount();
                });

                this.on("success", function(file, response) {
                    let parsedResponse = JSON.parse(response);
                    file.upload_ticket = parsedResponse.file_link;

                    var inputField = $("input[name=form_files_list]"),
                        filesArray = [];

                    Onyx.log(file.upload_ticket);

                    if ( "" != inputField.val() ) {
                        filesArray = inputField.val().split(",");
                    }

                    filesArray.push(file.upload_ticket);

                    inputField.val(filesArray.length > 0 ? filesArray.join(",") : "");

                    // Something to happen when file is uploaded
                });

                this.on("complete", function(file) {
                    if ( 0 === this.getUploadingFiles().length && 0 === this.getQueuedFiles().length ) {
                        $('button[type="submit"]').removeAttr("disabled");
                    }
                    Onyx.updateDropzoneCount()
                });

                this.on("error", function(file, t, a) {
                    this.removeFile(file);
                });
            }
        };

        $("#planner-files-dropzone").dropzone();

        $("#planner-files-dropzone .instructions").click(function(e) {
            var t = Dropzone.forElement("#planner-files-dropzone");
            t.hiddenFileInput.click();
            e.preventDefault()
        })
    },
    plannerValidate: function(e) {
        if ("" == e.val()) return e.addClass("error"), false;
        if (!e.is('[type="email"]')) return e.removeClass("error"), true;
        var t = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e.val());
        return t ? void 0 : (e.addClass("error"), false)
    }
};


$(function() {
    Onyx.init();
});