var handleDashboardGritterNotification = function() {
    $(window).load(function() {
        setTimeout(function() {
            $.gritter.add({
                title: "Selamat Datang di ASIK !",
                text: "Aplikasi Sistem Informasi Kepegawaian </br> Developed by Runoichi Kun.",
                image: "../images/runoichikun.jpg",
                sticky: false,
                time: "",
                class_name: "my-sticky-class"
            });
        }, 1e3);
    });
};