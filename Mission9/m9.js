function calculer()
{
  var a= document.getElementById("p1").value;
  var b=  document.getElementById("q1").value;
  var c = Number(a)*Number(b);
    r1.value = c;




}



function Ajout_ligne()
{
       var x = document.getElementById("fac");
      
    
       var s = x.cloneNode(true);
       document.getElementById("fac").appendChild(s);
     

      
        
      }

function remplir()
{

 p1.value = Math.floor(Math.random() * 10);
}

function Annuler()
{
    window.location.reload();
}
