function calculate(){
    var male =parseInt(document.getElementById('male').value)
    var female =parseInt(document.getElementById('female').value)
    var hdl_level =parseInt(document.getElementById('hdl_level').value)
    var ldl_level =parseInt(document.getElementById('ldl_level').value)
    var blood_pressure =parseInt(document.getElementById('blood_pressure').value)
   
    
    var smocker_yes =parseInt(document.getElementById('smocker_yes').value)
    var smocker_no =parseInt(document.getElementById('smocker_no').value)
    var total_cholestrol

    
   total_cholestrol=hdl_level+ldl_level
   

   if(90 <= blood_pressure && blood_pressure <= 120){

    if (hdl_level>=60 && 0<=ldl_level && ldl_level<=100){
        document.getElementById('result').value="Healthy Heart";
        document.getElementById('result').innerHTML="Healthy Heart";
        document.getElementById('chance1').innerHTML="10% Chance";
        document.getElementById('explanasion1').innerHTML="The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs.";
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level>=60 && 101<=ldl_level && ldl_level<=159){
        document.getElementById('result2').value="Risk Persentage : 30%";
        document.getElementById('result2').innerHTML="Risk Persentage : 30%";
        document.getElementById('chance2').innerHTML="30% Chance";
        document.getElementById('explanasion2').innerHTML="Even thogh the blood pressure is normal ,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level>=60 && 160<=ldl_level && ldl_level<=500){
        document.getElementById('result3').value="65% Chance";
        document.getElementById('result3').innerHTML="Risk Persentage : 65%";
        document.getElementById('chance3').innerHTML="65% Chance";
        document.getElementById('explanasion3').innerHTML="Even thogh the blood pressure is normal,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level<=60 && 0<=ldl_level && ldl_level<=100){
        document.getElementById('result3').value="60% Chance";
        document.getElementById('result3').innerHTML="Risk Persentage : 60%";
        document.getElementById('chance3').innerHTML="60% Chance";
        document.getElementById('explanasion3').innerHTML="Even thogh the blood pressure is normal ,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level<=60 && 101<=ldl_level && ldl_level<=159){
        document.getElementById('result3').value="65% Chance";
        document.getElementById('result3').innerHTML="Risk Persentage : 65%";
        document.getElementById('chance3').innerHTML="65% Chance";
        document.getElementById('explanasion3').innerHTML="Even thogh the blood pressure is normal ,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level<=60 && 160<=ldl_level && ldl_level<=500){
        document.getElementById('result3').value="75% Chance";
        document.getElementById('result3').innerHTML="Risk Persentage : 75%";
        document.getElementById('chance3').innerHTML="75% Chance";
        document.getElementById('explanasion3').innerHTML="Even thogh the blood pressure is normal ,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

   }
   
   else if(121 <= blood_pressure && blood_pressure <= 139){

    if (hdl_level>=60 && 0<=ldl_level && ldl_level<=100){
        document.getElementById('result4').value="20% chance";
        document.getElementById('result4').innerHTML="Risk Persentage : 20%";
        document.getElementById('chance4').innerHTML="20% Chance";
        document.getElementById('explanasion4').innerHTML="The blood pressure is slitly high ,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level>=60 && 101<=ldl_level && ldl_level<=159){
        document.getElementById('result5').value="35% chance";
        document.getElementById('result5').innerHTML="Risk Persentage : 35%";
        document.getElementById('chance5').innerHTML="35% Chance";
        document.getElementById('explanasion5').innerHTML="The blood pressure is slitly high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level>=60 && 160<=ldl_level && ldl_level<=500){
        document.getElementById('result6').value="75% chance";
        document.getElementById('result6').innerHTML="Risk Persentage : 75%";
        document.getElementById('chance6').innerHTML="75% Chance";
        document.getElementById('explanasion6').innerHTML="The blood pressure is high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    
   }
    else if (hdl_level<=60 && 0<=ldl_level && ldl_level<=100){
        document.getElementById('result6').value="65% chance";
        document.getElementById('result6').innerHTML="Risk Persentage : 65%";
        document.getElementById('chance6').innerHTML="65% Chance";
        document.getElementById('explanasion6').innerHTML="The blood pressure is high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    
   }
   else if (hdl_level<=60 && 101<=ldl_level && ldl_level<=159){
        document.getElementById('result6').value="70% chance";
        document.getElementById('result6').innerHTML="Risk Persentage : 70%";
        document.getElementById('chance6').innerHTML="70% Chance";
        document.getElementById('explanasion6').innerHTML="The blood pressure is high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    
   }
    else if (hdl_level<=60 && 160<=ldl_level && ldl_level<=500){
        document.getElementById('result6').value="80% chance";
        document.getElementById('result6').innerHTML="Risk Persentage : 80%";
        document.getElementById('chance6').innerHTML="80% Chance";
        document.getElementById('explanasion6').innerHTML="The blood pressure is high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    
   }
   

}  

   else if(140 <= blood_pressure && blood_pressure <= 190){

    if (hdl_level>=60 && 0<=ldl_level && ldl_level<=100){
        document.getElementById('result7').value="25% chance";
        document.getElementById('result7').innerHTML="Risk Persentage : 25%";
        document.getElementById('chance7').innerHTML="25% Chance";
        document.getElementById('explanasion7').innerHTML="The blood pressure is very high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level>=60 && 101<=ldl_level && ldl_level<=159){
        document.getElementById('result8').value="40";
        document.getElementById('result8').innerHTML="Risk Persentage : 40%";
        document.getElementById('chance8').innerHTML="40% Chance ⚠";
        document.getElementById('explanasion8').innerHTML="The blood pressure is very high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level>=60 && 160<=ldl_level && ldl_level<=500){
        document.getElementById('result9').value="85%";
        document.getElementById('result9').innerHTML="Risk Persentage : 85%";
        document.getElementById('chance9').innerHTML="85% Chance ⚠";
        document.getElementById('explanasion9').innerHTML="The blood p ressure is very high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level<=60 && 0<=ldl_level && ldl_level<=100){
        document.getElementById('result9').value="75%";
        document.getElementById('result9').innerHTML="Risk Persentage : 75%";
        document.getElementById('chance9').innerHTML="75% Chance ⚠";
        document.getElementById('explanasion9').innerHTML="The blood p ressure is very high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level<=60 && 0<=ldl_level && ldl_level<=100){
        document.getElementById('result9').value="85%";
        document.getElementById('result9').innerHTML="Risk Persentage : 85%";
        document.getElementById('chance9').innerHTML="85% Chance ⚠";
        document.getElementById('explanasion9').innerHTML="The blood p ressure is very high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }

    else if (hdl_level<=60 && 160<=ldl_level && ldl_level<=500){
        document.getElementById('result9').value="100%";
        document.getElementById('result9').innerHTML="Risk Persentage : 100%";
        document.getElementById('chance9').innerHTML="100% Chance ⚠";
        document.getElementById('explanasion9').innerHTML="The blood p ressure is very high,The Bad cholestrol is little bit high,The fact is even a healthy person can have a heart attack. But heart problems don’t appear out of the blue. Although heart attacks can suddenly occur in people who seem to be perfectly healthy, known as a “silent heart attack,” there are often warning signs."
        document.getElementById('tCholestrol').innerHTML="Total Cholestrol :"+total_cholestrol
    }




   }
   else{
        document.getElementById('invalide').value="Invalid Input";
        document.getElementById('invalide').innerHTML="Invalid Input";
   }

   
   

    

   
   




   }