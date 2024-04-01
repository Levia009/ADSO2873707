Proceso ejercicio_XlV
	
	Definir credito,cuota_anu,cuota_men,puntos Como Real;
	
	Escribir "bienvenido porfavor digite su cantidad de puntos datacrediro";
	Leer puntos;
	
	si puntos==0 Entonces
		Escribir "usted se encuentra reportado en datacredito por lo que no podra acceder al prestamo";
	SiNo
		si puntos<=300 Entonces
			Escribir "cual es el valor del credito que decea relisar";
			Leer credito;
			si credito>=7000001 Entonces
				Escribir "usted no cuenta con los puntos suficientes para realisar este credito";
			SiNo
				cuota_men<-( 0.18/12 );
				cuota_anu<-( credito*0.18 );
				
				Escribir "listo su peticion de credito de ", credito," pesos tendra una cuota de interes mensual de ", cuota_men," y una anual de ", cuota_anu;
			FinSi
		SiNo
			si puntos<=600 Entonces
				Escribir "cual es el valor del credito que decea relisar";
				Leer credito;
				si credito>=14000001 Entonces
					Escribir "usted no cuenta con los puntos suficientes para realisar este credito";
				SiNo
					cuota_men<-( 0.18/12 );
					cuota_anu<-( credito*0.18 );
					
					Escribir "listo su peticion de credito de ", credito," pesos tendra una cuota de interes mensual de ", cuota_men," y una anual de ", cuota_anu;
				FinSi
			SiNo
				si puntos<=900 Entonces
					Escribir "cual es el valor del credito que decea relisar";
					Leer credito;
					si credito>=21000001 Entonces
						Escribir "usted no cuenta con los puntos suficientes para realisar este credito";
					SiNo
						cuota_men<-( 0.18/12 );
						cuota_anu<-( credito*0.18 );
						
						Escribir "listo su peticion de credito de ", credito," pesos tendra una cuota de interes mensual de ", cuota_men," y una anual de ", cuota_anu;
					FinSi
				SiNo
					si puntos<=1200 Entonces
						Escribir "cual es el valor del credito que decea relisar";
						Leer credito;
						si credito>=30000001 Entonces
							Escribir "usted no cuenta con los puntos suficientes para realisar este credito";
						SiNo
							cuota_men<-( 0.18/12 );
							cuota_anu<-( credito*0.18 );
							
							Escribir "listo su peticion de credito de ", credito," pesos tendra una cuota de interes mensual de ", cuota_men," y una anual de ", cuota_anu;
						FinSi
					SiNo
						si puntos<=1500 Entonces
							Escribir "cual es el valor del credito que decea relisar";
							Leer credito;
							si credito>=50000001 Entonces
								Escribir "usted no cuenta con los puntos suficientes para realisar este credito";
							SiNo
								cuota_men<-( 0.18/12 );
								cuota_anu<-( credito*0.18 );
								
								Escribir "listo su peticion de credito de ", credito," pesos tendra una cuota de interes mensual de ", cuota_men," y una anual de ", cuota_anu;
							FinSi
						SiNo
							si puntos<=1800 Entonces
								Escribir "cual es el valor del credito que decea relisar";
								Leer credito;
								si credito>=100000001 Entonces
									Escribir "la cantidad de credito que usted desea resebir esta fuera de nuestro rango de servicio";
								SiNo
									cuota_men<-( 0.18/12 );
									cuota_anu<-( credito*0.18 );
									
									Escribir "listo su peticion de credito de ", credito," pesos tendra una cuota de interes mensual de ", cuota_men," y una anual de ", cuota_anu;
								FinSi
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
FinProceso
