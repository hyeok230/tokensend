$(document).ready(function () {
    const ContractAddress = '0x349bb48239674D92A2B5fD461F180dFafBeFeA8a';
    // const ContractABI = $.getScript("/js/contractabi.json");

    $('#linkHome').click(function () { showView("viewHome") });
    $('#linkSubmitItem').click(function () { showView("viewSubmitItem"); });

    $('#account').val(ContractAddress);
    $('#contractLink').text(ContractAddress);
    $('#contractLink').attr('href', 'https://ropsten.etherscan.io/address/' + ContractAddress);

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function () { $("#loadingBox").show() },
        ajaxStop: function () { $("#loadingBox").hide() }
    });

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showInfo(message) {
        $('#infoBox>p').html(message);
        $('#infoBox').show();
        $('#infoBox>header').click(function () { $('#infoBox').hide(); });
    }

    function showError(errorMsg) {
        $('#errorBox>p').html("Error: " + errorMsg);
        $('#errorBox').show();
        $('#errorBox>header').click(function () { $('#errorBox').hide(); });
    }

});

