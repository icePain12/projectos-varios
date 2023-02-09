// See https://aka.ms/new-console-template for more information

class Program
{
    static void Main(String[] args)
    {
        Console.Title = "Números Primos";
        Console.ForegroundColor = ConsoleColor.Green;
        Console.Write("¿Hasta cúal número hay que buscar?: ");
        int numeros = Convert.ToInt32(Console.ReadLine());
        int contador = 0;    
        for(int i = 1;i <= numeros; i++)
        {
            if (esPrimo(i))
            {
                contador++;
                Console.WriteLine(contador + ")  "+
                    i);
                
            }

        }

        Console.WriteLine("del 1 al " + numeros + " hay " + contador +
            " números primos.");
        Console.Write("\nPresione una tecla para terminar...");
        Console.ReadKey();
    }

    static Boolean esPrimo(int n)
    {
        if (n == 1)
            return false;
        if (n == 2)
            return true;

        for (int i = 2; i < n; i++)
            if (n % i == 0)
                return false;
        
        return true;
    }
}


