Proceso ejercicio_X
	
	Escribir "DIA 1";
	Escribir "==================================================";
	
	Definir moneda1,moneda2,moneda3,moneda4,billete1,billete2,billete3,billete4,billete5,billete6 Como entero;
	Definir dia,dia1,dia2,dia3,dia4,dia5,total_semana Como entero;
	Definir can1,can2,can3,can4,can5,can6,can7,can8,can9,can10 Como Entero;
	moneda1<-50;
	moneda2<-100;
	moneda3<-200;
	moneda4<-500;
	billete1<-1000;
	billete2<-2000;
	billete3<-5000;
	billete4<-10000;
	billete5<-20000;
	billete6<-50000;
	
	Escribir "cunatas monedas de 50$ recibio el primer dia";
	Leer can1;
	Escribir "cunatas monedas de 100$ recibio el primer dia";
	Leer can2;
	Escribir "cunatas monedas de 200$ recibio el primer dia";
	Leer can3;
	Escribir "cunatas monedas de 300$ recibio el primer dia";
	Leer can4;
	Escribir "cunatos billetes y monedas de 1000$ recibio el primer dia";
	Leer can5;
	Escribir "cunatos billetes de 2000$ recibio el primer dia";
	Leer can6;
	Escribir "cunatos billetes de 5000$ recibio el primer dia";
	Leer can7;
	Escribir "cunatos billetes de 10000$ recibio el primer dia";
	Leer can8;
	Escribir "cunatos billetes de 20000$ recibio el primer dia";
	Leer can9;
	Escribir "cunatos billetes de 50000$ recibio el primer dia";
	Leer can10;
	
	dia<-((moneda1*can1)+(moneda2*can2)+(moneda3*can3)+(moneda4*can4)+(billete1*can5)+(billete2*can6)+(billete3*can7)+(billete4*can8)+(billete5*can9)+(billete6*can10));
	dia1<-(dia);
	dia2<-(dia+dia1);
	dia3<-(dia+dia2);
	dia4<-(dia+dia3);
	dia5<-(dia+dia4);
	total_semana<-(dia5);
	
	Escribir "el total del primer dia es de: ", dia1;
	Escribir "el total del segundo dia es de: ", dia2;
	Escribir "el total del tercer dia es de: ", dia3;
	Escribir "el total del cuarto dia es de: ", dia4;
	Escribir "el total del quinto dia es de: ", dia5;
	Escribir "el total de la semana es de: ", total_semana;
	

FinProceso
