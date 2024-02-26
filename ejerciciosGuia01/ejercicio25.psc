Proceso ejercicio25
	Definir nota Como Real;
	
	Escribir "digite su nota";
	Leer nota;
	
	si nota <= 2.9 Entonces
		Escribir "su nota es insuficiente";
	SiNo
		si nota <= 4.5 Entonces
			Escribir "su nota es suficiente";
		SiNo
			si nota <= 5 Entonces
				Escribir "su nota es buena";
			FinSi
		FinSi
	FinSi
FinProceso
