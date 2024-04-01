Proceso ejercicio_Xlll
	
	Definir horas,horas_extra,sueldo,extra,extra1 Como Entero;
	
	Escribir "digite el numero de horas que trabajo hoy";
	Leer horas;
	Escribir "digite el valor de su sueldo por horas que trabajo hoy";
	Leer sueldo;
	
	horas_extra<-( horas*2 );
	extra<-( sueldo*horas_extra );
	extra1<-( extra-sueldo );
	
	si horas>=13 Entonces
		Escribir "se les reconocerá en tiempo compensatorio, a razón de un día compensatorio por cada 4 horas extras laboradas";
		Escribir "mas el extra de su sueldo que sera: ", extra1;
	SiNo
		si horas>=9 Entonces
			Escribir "su sueldo con las horas extra tabajado sera de: ",extra;
		SiNo
			Escribir "su sueldo sera el normal ya que no hiciste horas extra hoy", sueldo;
		FinSi
	FinSi
	
FinProceso
