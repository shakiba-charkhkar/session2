/**
 * Created by abc on 9/26/2016.
 */
$(document).ready(function () {
    $("#submit").click(function () {
        var firstname=$("#name").val();
        var mail=$("#email").val();
        var telephone=$("#phonenumber").val();
        var email_patt = new RegExp(/^([A-Za-z]{1})([A-Za-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        var num_patt = new RegExp(/^[0-9]{11}$/g);
        if(firstname==' ' || mail=='' || telephone=='')
        {
            alert("Enter all feilds");
        }
        else if(!email_patt.test(mail))
        {
            alert("Wrong email format");
        }
        else if(!num_patt.test(telephone)){
            alert("Wrong phonenumber");
        }
        else

        {
            $("#result_table").append('<tr>')
                .append('<td>'+firstname+'</td>')
                .append('<td>'+mail+'</td>')
                .append('<td>'+telephone+'</td>')
                .append('</tr>');
        }

    })
})