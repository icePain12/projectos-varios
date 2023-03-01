Proceso Examen1
	Escribir "Por favor digite un lado del primer terreno cuadrado"
	Leer lCuadrado1
	Escribir "Por favor digite un lado del Segundo terreno cuadrado"
	Leer lCuadrado2
	Escribir "Indique el la base del rectangunlo"
	Leer baseRectangulo
	Escribir "Indique la altura del rectangulo"
	Leer alturaRectangulo
	areaCuadrado1<-lCuadrado1*lCuadrado1
	areaCuadrado2<-lCuadrado2*lCuadrado2
	areaRectangulo<-baseRectangulo*alturaRectangulo
	Escribir "Indique el precio por metro cuadrado"
	Leer precio
	areaTotal<-areaCuadrado1+areaCuadrado2+areaRectangulo
	importe<-areaTotal*precio
	Escribir "El importe total es $",importe
	
FinProceso
