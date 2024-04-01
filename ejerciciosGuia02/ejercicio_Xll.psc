Proceso ejercicio_Xll
	
	Definir por1,por2,por3,can1,can2,can3,total,algoritmos,par1,par2,par3,examen,trabajo Como Real;
	
	Escribir "digite la calificacion entre 0 y 11 de su primer parcial";
	Leer par1;
	Escribir "digite la calificacion entre 0 y 11 de su segundo parcial";
	Leer par2;
	Escribir "digite la calificacion entre 0 y 11 de su tercer parcial";
	Leer par3;
	Escribir "digite la calificacion entre 0 y 33 de su examen final";
	Leer examen;
	Escribir "digite la calificacion entre 0 y 30 de su trabajo final";
	Leer trabajo;
	
	total<-100;
	
	por1<-( par1+par2+par3 );
	por2<-( examen );
	por3<-( trabajo );
	can1<-( por1*total/100 );
	can2<-( por2*total/100 );
	can3<-( por3*total/100 );
	algoritmos<-( can1+can2+can3 );
	
	
	si por1>=34 Entonces
		Escribir "digite bien sus notas porfavor";
	SiNo
		si por2>=34 Entonces
			Escribir "digite bien sus notas porfavor";
		SiNo
			si por3>=31 Entonces
				Escribir "digite bien sus notas porfavor";
			SiNo
				Escribir "su nota final es ", algoritmos,"/100";
			FinSi
		FinSi
	FinSi
	
FinProceso
