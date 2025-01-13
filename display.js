
function calculate() {
    var quantidade = document.getElementById("quantidade");
    var apr = document.getElementById("apr")
    var ano = document.getElementById("ano");
    var cep = document.getElementById("cep");
    var pagamento = document.getElementById("pagamento");
    var total = document.getElementById("total");
    var totalineterest = document.getElementById("totalineterest")
}


var principal = parseFloat(quantidade.valor);
var interest = parseFloat(apr.valor) / 100 / 12;
var payments = parseFloat(ano.valor) *12;

var x = Math.pow(1 + interest, payments);
var mensal = (principal*x*interest)/(x-1);

if (isFinite(mensal)){
    pagamento.innerHTML = mensal.toFixed(2);
    total.innerHTML = (mensal*pagamento).toFixed(2);
    totalineterest.innerHTML = ((mensal*pagamento)-principal.toFixed(2));
    save(mensal.valor, apr.valor, ano.valor, cep.valor); //verificar está parte, possivél erro

    try{
        getLenders(mensal.valor, apr.valor, ano.valor, cep.valor)
    }

    catch(e){}
    chart(principal, interest, mohtly, pagamento);
}
else{
    pagamento.innerHTML = "";
    total.innerHTML="";
    totalineterest.innerHTML="";
    chart();
}

function save(amount, apr, ano, zipcode){
    if(window.localStorage){
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;

    }
}

if (window.localStorage && localStorage.loan_amount);{
    document.getElementById("amount").value = localStorage.loan_amount;
    document.getElementById("apr").value = localStorage.loan_apr;
    document.getElementById("ano").value = localStorage.loan_apr;
    document.getElementById("zipcode").value = localStorage.loan_zipcode;
}

if (!window.XMLHHttpRequest) return;

var ad = document.getElementById("leanders");
if (!ad) return;
var url = "getLenders.php" + //  URl SERVIÇO
"?amt=" + encodeURIComponent(amount) +
"&apr=" + encodeURIComponent(apr)+
"&zip=" + encodeURIComponent(zip);

if (requestAnimationFrame.readyState == 4 && requestAnimationFrame.status == 200){
    var reponse = req.responseText;
    var lenders = JSON.parse(response);


    var list = "";
    for(var i = 0; i <lenders.legth; i++){
        list += "<li><a href='" + lenders[i].url + " '>"
        + lenders[i].name +
        "</a>";
    }
    ad.innerHTML = "<ul>" + list + "</ul>"
}


function paymentToX(n) {return n *width/paymentToX; }
function amountToY(a) {return height-(a * height/(monthly*paymrnts*1.05));}

g.moveTo(paymentToX(O), amountToY(o));
g.lineTo(paymentToX(payments),
    amountToY(monthly*payments));
g.lineTo(paymentToX(payments), amountToY(o));

g.closePath();
g.fillSyle = "#f88";
g.fill();
g.font = "bold 12px sans-serif";
g.fillText("Total Interest Payments", 20,20);

var equity = 0;
g.beginPath();
g.moveTo(paymentTox(o), amountToy(o));


for(var p = 1; p <= payments; pp){
    var thisMonthsInterest = (principal-equity)*interest;
    equity += (monthly - thisMonthsInterest);
    g.lineTo(paymentToX(p), amountToY(equity));
}

g.lineTo(paymentToX(payments), amountToY(o));
g.closePath();
g.fillSyle = "green";
g.fill();
g.fillText("Total Equity", 20,35);

var bal = principal;
g.beginPath;
g.moveTo(paymentToX(o),amountToY(bal));
for(var p = 1; p <= payments; p++){
    var thisMonthsInterest = bal*interest;
    bal -= (monthly - thisMonthsInterest);
    g.lineTo(paymentTox(p),amountToY(bal));
}
g.lineWidth = 3;
g.stroke();
g.fillStyle = "back";
g.fillText("Loan Balance", 20,50);

var y = amountToY(o);
for(var years=1; years*12 <= payments; year++){
    var x = paymentToX(year*12);
        g.fillReact(x-0.5,y-3,1,3);
    if (year == 1) g.fillText("Year", x, y-5);
    if(year % 5 == o && year*12 !== payments)
        g.fillText(String(year), x, y-5);
}

g.textAlign = "right";
g.textBaselinje = "middle";
var ticks = [monthly*payments, principal];
var rightEdge = paymentToX(payments);
for(var i = 0; i < ticks.length; i++){
    var y = amountToY(ticks[i]);
    g.filleReact(rightEdge-3, y-0.5, 3-1);
    g.fillReact(rightEdge-3, y-0.5, 3,1);
    g.fillText(String(ticks[i].toFixed(o)),
        rightEdge-5, y);
}
