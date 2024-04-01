Proceso ejercicio_lX
	
	Definir num1,num2,suma,resta,multiplicacion,divicion Como Real;
	
	Escribir "digite el primer numero";
	Leer num1;
	Escribir "digite el segundo numero";
	Leer num2;
	
	suma<-( num1+num2 );
	resta<-( num1-num2 );
	divicion<-( num1/num2 );
	multiplicacion<-( num1*num2 );
	
	si( num1 >= 1 )Entonces
		si ( num2 <= 0 )Entonces
			Escribir "digite un numero mayor a cero";
		SiNo
			Escribir "la suma de los dos numeros es: ", suma;
			Escribir "la resta de los dos numeros es: ", resta;
			Escribir "la divicion de los dos numeros es: ", divicion;
			Escribir "la multiplicacion de los dos numeros es: ", multiplicacion;
		FinSi
	SiNo
		Escribir "digite un numero mayor a cero";
	FinSi
	
FinProceso
