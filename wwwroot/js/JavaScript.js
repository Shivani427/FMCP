/******Common Js********/
    function bindAgain() {
        $(window).bind("load", function () {
            $('#hr').show();
            $('#orgdetial').show();
            $('#orgdetial1').show();
            $('#orgdetial2').show();
            $('#orgdetial3').show();

            var radiovalue = $('input[name=organisationtype]:checked', '.checkout-form').val();
            if (radiovalue === 'rdNonGov') {
                document.getElementById('lblOrganisationType').innerText = 'Non Government';
            }
            else if (radiovalue === 'rdGov') {
                document.getElementById('lblOrganisationType').innerText = 'Government';
            }
        });
    }

    function hideAgain() {
        $(window).bind("load", function () {
            $('#hr').hide();
            $('#orgdetial').hide();
            $('#orgdetial1').hide();
            $('#orgdetial2').hide();
            $('#orgdetial3').hide();
        });
    }
