using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1__Examen
{
    class Program
    {
        static void Main(string[] args)
        {
            double lCuadrado1, lCuadrado2, baseRectangulo, alturaRectangulo, precio=0;
            double areaCuadrado1=0, areaCuadrado2=0, areaTotal=0, importe=0, areaRectangulo=0;

             Console.WriteLine("Por favor digite un lado del primer terreno cuadrado");
                lCuadrado1 = Convert.ToDouble(Console.ReadLine());
             Console.WriteLine("Por favor digite un lado del Segundo terreno cuadrado");
                lCuadrado2 = Convert.ToDouble(Console.ReadLine());
             Console.WriteLine("Indique el la base del rectangunlo");
                baseRectangulo = Convert.ToDouble(Console.ReadLine());
             Console.WriteLine("Indique la altura del rectangulo");
                alturaRectangulo = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Indique el precio por metro cuadrado");
                precio = Convert.ToDouble(Console.ReadLine());
                Area(areaCuadrado1, areaCuadrado2, areaRectangulo, lCuadrado1, lCuadrado2, baseRectangulo, alturaRectangulo, ref areaTotal);
                CostoTotal(areaTotal, precio, ref importe);
                Console.WriteLine("El importe total es $" + importe);
                Console.ReadKey();

        }
          static double Area(double areac1,double areac2, double areaR,double lcuad1,double lcuad2, double baseR, double alturaR,ref double areaT)
    {
        areac1 = lcuad1 * lcuad1;
                areac2= lcuad2 * lcuad2;
                areaR = baseR * alturaR;
                areaT = areaR + areac2 + areac1;
        return areaT;

    }
        static double CostoTotal(double areaT,double Costo,ref double Importe)
          {
              Importe = areaT * Costo;
              return Importe;
          }
    }
}
