using System;
class Nguoi{
    public string Hoten{ get; set;}
    public string Quequan{ get; set;}
    public string Gioitinh{get; set;}
    public int Namsinh{get; set;}

    public Nguoi(string hoten, string quenquan, string gioitinh, string namsinh){
        Hoten = hoten;
        Quequan = quenquan;
        Gioitinh = gioitinh;
        Namsinh = namsinh;
    }
    public Nguoi(){}
    static void NhapTT(){
        Console.WriteLine("Nhap ho ten: ");
        Hoten = Console.ReadLine();
        Console.WriteLine("Nhap que quan: ");
        Quequan = Console.ReadLine();
        Console.WriteLine("Nhap nam sinh: ");
        Namsinh = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Nhap gioi tinh: ");
        Quequan = Console.ReadLine();

    }
    static void XuatTT(){
        Console.WriteLine($"Ho ten: {Hoten}");
        Console.WriteLine($"Que quan: {Quequan}"):
        Console.WriteLine($"Gioi tinh: {Gioitinh}");
        Console.WriteLine($"Nham sinh: {Namsinh}");
    }

}
class Sinhvien : Nguoi{
    public double Diemtoan{ get; set;}
    public double Diemly{ get; set;}
    public double Diemhoa{ get; set;}
    public Sinhvien(string hoten, string quenquan, string gioitinh, string namsinh, double diemtoan, double diemly, double diemhoa){
        Diemhoa = diemhoa;
        Diemtoan = diemtoan;
        Diemly = diemly;
    }
     public Sinhvien(){}

    class Program{
    static void Main(){
        Sinhvien sv = new Sinhvien();
        sv.NhapTT();
        Console.WriteLine("Nhap diem toan: ");
        sv.Diemtoan = Convert.ToInt32(Console.WriteLine());
        Console.WriteLine("Nhap diem ly: ");
        sv.Diemly = Convert.ToInt32(Console.WriteLine());
        Console.WriteLine("Nhap diem hoa: ");
        sv.Diemhoa = Convert.ToInt32(Console.WriteLine());
        sv.XuatTT();
    }
    }

}