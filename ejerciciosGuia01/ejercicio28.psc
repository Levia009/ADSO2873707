Proceso ejercicio28
	Definir horas_trabajadas,horas_extras Como Real;
	Definir valor_hora,extra Como Entero;
	
	Escribir "digite sus horas trabajadas";
	Leer horas_trabajadas;
	Escribir "digite su pago por horas trabajadas";
	leer valor_hora;
	
	horas_extras <- horas_trabajadas - 40;
	extra <- (valor_hora * horas_trabajadas) + (10000 * horas_extras);
	
	si horas_trabajadas >= 40 Entonces
		Escribir "sus horas trabajadas fueron ", horas_trabajadas," y tuviste un total de horas extra de ", horas_extras," por lo que tu salario final seria ", extra;
	FinSi
FinProceso
