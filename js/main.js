  function validateForm(){
      var a=document.forms["f1"]["inputEesnimi"].value;
      var b=document.forms["f1"]["inputPerekonnanimi"].value;
      var c=document.forms["f1"]["inputIsikukood"].value;
      var d=document.forms["f1"]["inputSunniaeg"].value;
      var e=document.forms["f1"]["inputTelefon"].value;
      // Check eesnimi
      if (a==null || a==""){
        document.forms["f1"]["inputEesnimi"].focus();
        $(".eesnimi-v").addClass("has-error");
        $("#inputEesnimi").attr("placeholder", "Sisesta eesnimi");
        return false;
      }else{
        $(".eesnimi-v").addClass("has-success");
      }
      // Check perekonnanimi
      if(b==null || b==""){
        document.forms["f1"]["inputPerekonnanimi"].focus();
        $(".perekonnanimi-v").addClass("has-error");
        $("#inputPerekonnanimi").attr("placeholder", "Sisesta perekonnanimi");
        return false;
      }else{
        $(".perekonnanimi-v").addClass("has-success");
      }
      // if((c==null || c=="")|| (d==null || d=="")){
      if(c==null || c==""){
        alert("Sisesta isikukood või sünniaeg");
        document.forms["f1"]["inputIsikukood"].focus();
        document.forms["f1"]["inputSunniaeg"].focus();
        $(".isikukood-v").addClass("has-error");
        $(".sunniaeg-v").addClass("has-error");
        $("#inputIsikukood").attr("placeholder", "Sisesta isikukood");
        $("#inputSunniaeg").attr("placeholder", "Sisesta snniaeg");
        return false;
      }else{
        $(".isikukood-v").addClass("has-success");
        $(".sunniaeg-v").addClass("has-success");
      }
      
    return true;  
  }
