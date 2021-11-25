function getParams(){
    var name = document.getElementById("name").value
    var index = document.getElementById("index").value
    var phone = document.getElementById("phone").value
    var ocenki = document.getElementsByName("grade")
    for(let i = 0 ; i < ocenki.length ; i++){
        if(ocenki[i].checked){
            var grade = ocenki[i].value;
        }
    }
    var sesija = document.getElementById("session").value

    if(name == "" || index == "" || phone == "" || grade == "" || sesija == ""){
        alert("Popolni gi site fields")
    }else{

        tabela = document.getElementById("tabela");

        var tel1 = phone.slice(0,3);
        var tel2 = phone.slice(3,6);
        var tel3 = phone.slice(6,9);


        tabela.innerHTML +=
        `
        <tr>
        <td>${name}</td>
        <td>${index}</td>
        <td>${tel1}/${tel2}-${tel3}</td>
        <td class="grades">${grade}</td>
        <td>${sesija}</td>
        <td><button onclick="confirmData(this)">Confirm</button>
            <button onclick="revertData(this)">Revert</button>
        </td>
        </tr>
        `
        sum()
    }
}
    function sum(){
        var average = document.getElementById("showAverage");
        var grades = document.getElementsByClassName("grades");
        var suma = 0 ;
        for(let i=0;i<grades.length;i++){
            suma += parseInt(grades[i].innerHTML);
        }
        average.innerHTML = "Average: " + suma/grades.length;
    }
    function confirmData(row){
        tr = row.parentNode;
        tr.parentNode.style.backgroundColor = "lightgreen"
        row.setAttribute('disabled','true')
        row.parentNode.lastElementChild.setAttribute('disabled','true')
    }
    function revertData(kopce){
        var tr = kopce.parentNode.parentNode;

        console.log(tr.childNodes)
        var index = tr.childNodes[3];
        var grade = tr.childNodes[7];

        var lista = document.getElementById("lista");
        lista.innerHTML += 
        `
        <li>
            ${index.innerHTML} - grade: ${grade.innerHTML}
        </li>
        `
        tr.parentNode.removeChild(tr);
        sum();
    }
