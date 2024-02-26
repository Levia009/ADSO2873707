Proceso ejercicio23
	Definir numero1,numero2,numero3 Como Real;
	
	Escribir "digite el primer numero";
	Leer numero1;
	Escribir "digite el segundo numero";
	Leer numero2;
	Escribir "digite el tercer numero";
	Leer numero3;
	
	si numero3 < numero2 Entonces
		si numero3 < numero1 Entonces
			si numero1>numero2 Entonces
				Escribir "el orden de mayor a menor es ", numero1," , ", numero2," , ", numero3;
			SiNo
				Escribir "el orden de mayor a menor es  ", numero2," , ", numero1," , ", numero3;
			FinSi
		SiNo
			si numero3 > numero1  Entonces
				Escribir "el orden de mayor a menor es ", numero3," , ", numero1," , ", numero2;
			SiNo
				Escribir "el orden de mayor a menor es ", numero1," , ", numero3," , ", numero2;
			FinSi
		FinSi
	SiNo
		si numero3 > numero2  Entonces
			Escribir "el orden de mayor a menor es ", numero3," , ", numero2," , ", numero1;
		SiNo
			Escribir "el orden de mayor a menor es ", numero2," , ", numero3," , ", numero1;
		FinSi
	FinSi

FinProceso
