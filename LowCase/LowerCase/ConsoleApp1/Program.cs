using System;
using System.IO;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            /*string letras = "1";
            string escrito = "";
            Console.WriteLine("Escreva oque deseja");
            escrito = (Console.ReadLine().ToLower());
            try
            {
                StreamWriter sw = new StreamWriter("C:\\Users\\lucas\\Downloads\\LowCase\\Test.txt");
                sw.WriteLine(escrito);
                sw.WriteLine(letras);
                sw.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception: " + e.Message);
            }
            finally
            {
                Console.WriteLine("Executing the finally block");
            }
            */
                    string input = "abc";
                    char[] array = input.ToCharArray();

                    for (int i = 0; i < array.Length; i++)
                    {
                        char let = array[i];
                        if (char.IsUpper(let))

                            array[i] = char.ToLower(let);

                        else if (let == 'a')
                            array[i] = '🇦';

                        else if (let == 'b')
                            array[i] = 'z';
                    }
                    string result = new string(array);
                    Console.WriteLine(result);
                }
            }
    }


        /*
        🇦
        🇧
        🇨
        🇩
        🇪
        🇫
        🇬
        🇭
        🇮
        🇯
        🇰
        🇱
        🇲
        🇳
        🇴
        🇵
        🇶
        🇷
        🇸
        🇹
        🇺
        🇻
        🇼
        🇾
        🇿
        */
