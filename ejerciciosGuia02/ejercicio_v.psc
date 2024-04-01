Proceso ejercicio_V
	
	Definir per1,per2,per3,por1,por2,por3,total Como Real;
	
	Escribir "cuanto invirtio la primer persona";
	Leer per1;
	Escribir "cuanto invirtio la segunda persona";
	Leer per2;
	Escribir "cuanto invirtio la tercer persona";
	Leer per3;
	
	total<-( per1+per2+per3 );
	por1<-( per1*100/total );
	por2<-( per2*100/total );
	por3<-( per3*100/total );
	
	Escribir "en total todos invirtieron ", total," pero la primer persona invirtio ", por1," mientra que la segunda invirtio ", por2," y la tercera invirtio ", por3;
	
FinProceso
