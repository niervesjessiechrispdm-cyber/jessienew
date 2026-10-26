$(document).ready(function(){
    $("#btntitle").click(function(){
         $("#stud1").text("My name's JEFF")
         $("#message").text("You Click")
         $("#stud1").css("color", "black")
         $("#name").css("color", "black")
         $("#course").css("color", "black")
         $("#yearlevel").css("color", "black")
         $("#pick").css("color", "black")
    })

    $("#btnhide").click(function(){
        $("#message").text("Suck It")
        $("#profile1").hide("slow")
    })

    $("#btnshow").click(function(){
        $("#profile1").show("slow")
    })

    $("#btntitle").dblclick(function(){
         $("#par2").text("you double click me")
         $(this).css("background", "violet")
         $("#message").text("You Double Click")
    })

    $("#courses").change(function(){
        $("#course").text($(this).val())
        let courses = $(this).val();
        if(courses == "BSIT"){
             $("#message1").text("You select BSIT")
        }
        else if(courses == "BSCS"){
             $("#message1").text("You select BSCS")
        }
        else if(courses == "BSTM"){
             $("#message1").text("You select BSTM")
        }
        else{
             $("#message1").text(" ")
        }
    })

    
    

})