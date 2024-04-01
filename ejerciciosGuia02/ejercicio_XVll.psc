Proceso ejercicio_XVll
	
	Definir salario,des1,des2,des3,des4,des5 Como Real;
	Definir des11,des22 Como Real;
	
	Escribir "cunato gana al mes";
	Leer salario;
	
	des1<-(20*salario/100);
	des3<-(12*salario/100);
	des4<-(3*salario/100);
	des5<-(4*salario/100);
	
	si salario>=4000000 Entonces
		des2<-(10*salario/100);
		des22<-(salario-des2);
		Escribir "su salario final seria ", des22;
	SiNo
		des11<-((((salario-des1)-des3)-des4)-des5);
		Escribir "su salario final seria ", des11;
	FinSi

FinProceso
