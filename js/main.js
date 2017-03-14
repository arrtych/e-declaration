  // $('#main-form [type="submit"]').click(function(){
  //     // выбираем все невидимые обязательные поля
  //     $('input, textarea, select').filter('[required]:hidden').each(function(){
  //         // проверяем их заполненность
  //         if (!$(this)[0].checkValidity()) {
  //             var tabId = $(this).closest('.tab-pane').attr('id');
  //             // переключаем таб
  //             $('.nav-tabs a[href="#' + tabId + '"]').tab('show');
  //             // прерываем обработку остальных обязательных полей
  //             return false;
  //         }
  //     });
  //         console.log("a");
  // });
  function validateForm(){
      var x=document.forms["f1"]["inputEesnimi"].value;
      var y=document.forms["f1"]["inputPerekonnanimi"].value;
      if (x==null || x==""){
        // alert("Sisesta eesnimi");
        // document.forms["f1"]["inputEesnimi"].focus();
        $(".eesnimi-v").addClass("has-error");
        $("#inputEesnimi").attr("placeholder", "Sisesta eesnimi");
        return false;
      }
 
      if(y==null || y==""){
        // alert("Введите isikukood");
        // document.forms["f1"]["inputPerekonnanimi"].focus();
        $(".perekonnanimi-v").addClass("has-error");
        $("#inputPerekonnanimi").attr("placeholder", "Sisesta perekonnanimi");
        return false;
      }
      
    return true;  
  }
