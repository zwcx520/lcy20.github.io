$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "lcy" && pwd == "lcy") {
        
        event.preventDefault();
        $('form').fadeOut(2500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "https://lcy20.netlify.app/gd.html";
        }, 1000);
    } else {
        alert("\n用户名或密码不正确!\n若是没有账号密码，可以联系开发者申请!\n如登陆账号和密码忘记或多次错误❌请联系开发者获取账号密码\n\n联系邮件:  1837601513@qq.com！");
    }
});
