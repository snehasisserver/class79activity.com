var participants = [];
function submit(){
    var name1 = document.getElementById("name_of_student_1").value;
    var name2 = document.getElementById("name_of_student_2").value;
    var name3 = document.getElementById("name_of_student_3").value;
    var name4 = document.getElementById("name_of_student_4").value;

    participants.push(name1);
    participants.push(name2);
    participants.push(name3);
    participants.push(name4);

    console.log(participants);
    document.getElementById("display_name").innerHTML=participants;
    document.getElementById("submit_bu").style.display="none";
    document.getElementById("sort_bu").style.display="inline-block";
}
function sorting(){
    participants.sort();
    document.getElementById("display_name").innerHTML=participants;
    console.log(participants);
}
