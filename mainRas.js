//$(document).ready(function(){
//$('.result').on('click', function(){
//    var res;
//    res=$('input[name="intNuber"]').val();
//    res = eval(res);
//    $('.intNuberStyle').val(function(i, val){
//        return val + '=' +res;
//    });
//});
$('input').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      var res2=$(this).val();
      res2=eval(res2);
        $('.intNuberStyle').val(function(i, val){
            return val + '=' +res2;
        });
  }
});

$('#pos1').on('click', function (){
   // console.log("Ветка ввода"); // вывод для проверки что мы выбрали  
    $('.intNuberStyle').val(function(i, val){
        return val+'7'
        // return 'Настройка и корректировка данных';
    });
});

$('#pos2').on('click', function (){
    $('.intNuberStyle').val(function(i, val){
        return 'Расчет и вывод предупреждений';
    });
});
$('#pos3').on('click', function (){
    $('.intNuberStyle').val(function(i, val){  
   console.log("Ветка СБУ"); // вывод для проверки что мы выбрали 
   console.log("val");
       return 'sbu';
    });
});

$('#btndel').on('click', function (){
    $('.intNuberStyle').val(function(i, val){
        return val+'/';
    });
});

$('#btnplus').on('click', function (){
    $('.intNuberStyle').val(function(i, val){
        return val+'+';
    });
});
$('#btnper').on('click', function (){
    $('.intNuberStyle').val(function(i, val){
        return val+'%';
    });
});
$('#btnum').on('click', function (){
    $('.intNuberStyle').val(function(i, val){
        return val+'*';
    });
});
$('#btnminus').on('click', function (){
    $('.intNuberStyle').val(function(i, val){
        return val+'-';
    });
});
$('#btnDot').on('click', function (){
    $('.intNuberStyle').val(function(i, val){
        return val+'.';
    });
});
$('#btnClear').on('click', function (){
    $('.intNuberStyle').val(function(i, val){
        return ' ';
    });
});
<a href="https://url.ssu.gov.ua" target="_blank">Сайт СБУ</a>;
