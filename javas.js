	function energiaMinuty() {
   		var liczbaPole_1 = document.getElementById("pole_1").value;
   		var liczbaPole_2 = document.getElementById("pole_2").value;
   		var liczbaPole_3 = document.getElementById("pole_3").value;
   		
   		var mocUrzadzenia_w_Watach = liczbaPole_1.replace(',','.');
   		var czasPracyUrzadzeniaMinuty = liczbaPole_2.replace(',','.');
   		var kosztKWh = liczbaPole_3.replace(',','.');
		   
		   if (!isNaN(mocUrzadzenia_w_Watach) && !isNaN(czasPracyUrzadzeniaMinuty) && !isNaN(kosztKWh)) {
				var zuzycieEnergiiUrzadzeniaWczasie_w_KWh = ((mocUrzadzenia_w_Watach * czasPracyUrzadzeniaMinuty) / 60) / 1000;			
				var wynikKosztowMinuty = zuzycieEnergiiUrzadzeniaWczasie_w_KWh * kosztKWh;		  
				   document.getElementById("wynikMinuty").innerHTML="Koszty pracy urządzenia o mocy [ " + mocUrzadzenia_w_Watach + " ] W" + " " + "które pracuje w ciągu [ " + czasPracyUrzadzeniaMinuty + " ] " + "Minut" + " " + "wynosi: [ " + wynikKosztowMinuty + " ] " + "PLN";
			}
			else {
				document.getElementById("wynikMinuty").innerHTML="Wprowadziłeś błędne dane !!!";
			}
   	//	window.alert("Koszt pracy urządzenia o mocy= " + mocUrzadzenia_w_Watach + " Wat " + "W czasie " + czasPracyUrzadzeniaMinuty + "minuty" + "wynosi" + wynikKosztow + "Kurwa Mać");
   		
   		/*var obliczonePola = Number(pole_1.value) + Number(pole_2.value) + Number(pole_3.value);
   		document.getElementById("wynik").innerHTML=obliczonePola; 
   		window.alert("Wynik= " + obliczonePola + " Kurwa Mać"); */
   	}
   	
   	function energiaGodziny() {
   		var liczbaPole_4 = document.getElementById("pole_4").value;
   		var liczbaPole_5 = document.getElementById("pole_5").value;
   		var liczbaPole_6 = document.getElementById("pole_6").value;
   		
   		var mocUrzadzenia_w_Watach_Godziny = liczbaPole_4.replace(',','.');
   		var czasPracyUrzadzeniaGodziny = liczbaPole_5.replace(',','.');
   		var kosztKWh_Godziny = liczbaPole_6.replace(',','.');
		   
		   if (!isNaN(mocUrzadzenia_w_Watach_Godziny) && !isNaN(czasPracyUrzadzeniaGodziny) && !isNaN(kosztKWh_Godziny)) {
			var zuzycie_Energii_Urzadzenia_W_czasie_w_KWh_Godziny = (mocUrzadzenia_w_Watach_Godziny * czasPracyUrzadzeniaGodziny) / 1000;
    		var wynikKosztow_Godziny = zuzycie_Energii_Urzadzenia_W_czasie_w_KWh_Godziny * kosztKWh_Godziny;
    			document.getElementById("wynikGodziny").innerHTML="Koszty pracy urządzenia o mocy [ " + mocUrzadzenia_w_Watach_Godziny + " ] Wat" + " " + "które pracuje w ciągu [ " + czasPracyUrzadzeniaGodziny + " ] " + "Godzin" + " " + "wynosi: [ " + wynikKosztow_Godziny + " ] " + "PLN";
		   }
		   else {
			   document.getElementById("wynikGodziny").innerHTML="Wprowadziłeś błędne dane !!!";
		   }
    		  
   	//	window.alert("Koszt pracy urządzenia o mocy= " + mocUrzadzenia_w_Watach + " Wat " + "W czasie " + czasPracyUrzadzeniaMinuty + "minuty" + "wynosi" + wynikKosztow + "Kurwa Mać");
   	}
   	
   	function energiaDni() {
   		var liczbaPole_7 = document.getElementById("pole_7").value;
   		var liczbaPole_8 = document.getElementById("pole_8").value;
   		var liczbaPole_9 = document.getElementById("pole_9").value;
   		
   		var moc_Urzadzenia_w_Watach_Dni = liczbaPole_7.replace(',','.');
   		var czas_Pracy_Urzadzenia_Dni = liczbaPole_8.replace(',','.');
		var kosztKWh_Dni = liczbaPole_9.replace(',','.');
		
		if (!isNaN(moc_Urzadzenia_w_Watach_Dni) && !isNaN(czas_Pracy_Urzadzenia_Dni) && !isNaN(kosztKWh_Dni)) {
			var zuzycie_Energii_Urzadzenia_W_czasie_w_KWh_Dni = ((moc_Urzadzenia_w_Watach_Dni * czas_Pracy_Urzadzenia_Dni) * 24) / 1000;  
			var wynikKosztow_Dni = zuzycie_Energii_Urzadzenia_W_czasie_w_KWh_Dni * kosztKWh_Dni;

			document.getElementById("zuzycieKWh_Dni").innerHTML="Urządzenie zużyło: [ " + zuzycie_Energii_Urzadzenia_W_czasie_w_KWh_Dni + " ] KWh";
    		document.getElementById("wynikDni").innerHTML="Koszt pracy urządzenia o mocy [ " + moc_Urzadzenia_w_Watach_Dni + " ] Wat" + " w czasie [ " + czas_Pracy_Urzadzenia_Dni + " ] dni" + " wynosi: [ " + wynikKosztow_Dni + " ] PLN";
		}
		else {
			document.getElementById("wynikDni").innerHTML="Wprowadziłeś błędne dane !!!";
		}	
   	}
   	
   	function pradNaMoc400() {
   		var liczbaPole_10 = document.getElementById("pole_10").value;
//		   var naterzenieAmpery = liczbaPole_10.replace(',','.');
    		var naterzenieAmpery = liczbaPole_10 = liczbaPole_10.replace(',','.');
    		var cosFi = 0.8;
    		var pierwiastekZtrzech = 0.00173205;
    		var napiecieVolt = 400;

			if (!isNaN(liczbaPole_10)) {
				var wynikKiloWaty = (((pierwiastekZtrzech * naterzenieAmpery) * napiecieVolt) * cosFi);
	    		document.getElementById("pradNaMocWynik").innerHTML="Moc urządzenia przy napięciu 400 V i natęrzeniu prądu wynoszącym: [ " + naterzenieAmpery + " ]A wynosi: [ " + wynikKiloWaty + " ] KW";
			}
			else {
				document.getElementById("pradNaMocWynik").innerHTML= "Wprowadziłeś błędne dane !!!";
			}
   	}
   	
   	function mocNaPrad400() {
   		var liczbaPole_11 = document.getElementById("pole_11").value;
    		var moc = liczbaPole_11 = liczbaPole_11.replace(',','.'); 
    		var cosFi = 0.8
    		var pierwiastekZtrzech = 0.00173205
			var napiecieVolt = 400
			
			if (!isNaN(liczbaPole_11)) {
				var podzielnikMocy = (pierwiastekZtrzech * napiecieVolt) * cosFi;
    			var pradWynik = moc / podzielnikMocy;
    			document.getElementById("mocNaPradWynik").innerHTML="Moc urządzenia: [ " + moc + " ] KW  Napięcie sieci: [ " + napiecieVolt + " ] Volt" + " Natężenie wynosi: [ " + pradWynik + " ] A";
			}
			else {
				document.getElementById("mocNaPradWynik").innerHTML= "Wprowadziłeś błędne dane !!!";
			}
   	}
   	
   	function mocNaPrad230() {
   		var liczbaPole_12 = document.getElementById("pole_12").value;
    		var mocPradJednofazowy = liczbaPole_12.replace(',','.');
    		var cosFi = 0.8;
			var napiecieVolt = 230;
			var max_znakow = 2;

			if (!isNaN(mocPradJednofazowy)) {
				var pradWynik = mocPradJednofazowy / napiecieVolt;
				document.getElementById("mocNaPrad230Wynik").innerHTML="Przy napięciu [ " + napiecieVolt + " ] V" + " i mocy urządzenia wynoszącej: [ " + mocPradJednofazowy + " ] W" + " natężenie prądu wynosi: [ " + pradWynik + " ] Amperów";
			}
			else {
				document.getElementById("mocNaPrad230Wynik").innerHTML= "Wprowadziłeś błędne dane !!!"
			}
	}
	
	//function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
	   
   	function obliczKondensator() {
   		var liczbaPole_13 = document.getElementById("pole_13").value;
   		var moc = liczbaPole_13.replace(',','.');
   		var liczbaPole_14 = document.getElementById("pole_14").value;
   		var wspolczunnik = liczbaPole_14.replace(',','.');
    	var cosFi = 0.8;
			
			if (!isNaN(moc) && !isNaN(wspolczunnik)) {
				var pojemnosc = (wspolczunnik * moc) * cosFi;
				document.getElementById("obliczKondensatorWynik").innerHTML="Pojemność kondensatora wynosi: [ " + pojemnosc + " ] uF";
			}
			else {
				document.getElementById("obliczKondensatorWynik").innerHTML="Wprowadziłeś błędne dane !!!";
			}
   	}	

	function KWhNaMoc() {
		var liczbaPole_15 = document.getElementById("pole_15").value;
		var KWh = liczbaPole_15.replace(',','.');	// input('Podaj ilość KWh zużytych przez urządzenie w ciągu 24 godzin: ') # Ilość KWh zużytych w ciągu 24 godzin.
	    var godziny = 24; 	// 24 Godzony, ponieważ urządzenie pracowało przez 24 godziny.
    	var tysiac = 1000; 	// Żeby wynik wyszedł w Watach.

		if (!isNaN(KWh)) {
			var wynik = (KWh / godziny) * 1000;
			document.getElementById("przeliczKWhNaMocWynik").innerHTML="Moc urządzenia które zużyło [ " + KWh + " ] KWh" + " w czasie: [ " + godziny + " ] godzin " + " wynosi: [ " + wynik + " ] Wat";
		}
		else {
			document.getElementById("przeliczKWhNaMocWynik").innerHTML="Wprowadziłeś błędne dane !!!";
		}
	}
	   // Poniżej Jest Tooltip Kurwa

	   $(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();   
	  });