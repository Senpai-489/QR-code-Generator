$(document).ready(function() {
    


$("button").on("click", buttClicked);
        $(document).on("keydown", function(event) {
            if (event.key === "Enter") {
                buttClicked();
            }
        });

        function buttClicked() {
            var button1 = $("#text_url").val();
            var qrNew = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+button1;
            
            $('#target').attr("src",qrNew);
            $('#downloadbutton').attr("href",qrNew);
        }
    });