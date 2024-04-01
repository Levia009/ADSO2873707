Proceso ejercicio_XVl
	
	Definir minutos,horas,puntos,costo,descuento1,descuento2 Como Real;
	
	Escribir "cuanto tiempo paso en la cabina de internet en minutos";
	Leer minutos;
	
	horas<-(minutos/60);
	puntos<-(5*horas);
	costo<-(1500*horas);
	
	si horas>=3 Entonces
		descuento1<-(30*costo/100);
		descuento2<-(costo-descuento1);
		Escribir "pasaste un total de ", horas," horas por lo que deve pagar ", descuento2," pesos y obtuviste ", puntos," puntos por las horas transcurridas en la cabina";
	SiNo
		Escribir "pasaste un total de ", horas," horas por lo que deve pagar ", costo," pesos y obtuviste ", puntos," puntos por las horas transcurridas en la cabina";
	FinSi
	
	
	
FinProceso
