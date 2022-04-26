using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BTL
{
    public class TaiKhoan
    {
        public string ten { get; set; }
        public string email { get; set; }
        public string password { get; set; }

        //constructor không đối số
        public TaiKhoan()
        {

        }
        //constructor có đối số đăng ký
        public TaiKhoan(string ten, string email, string password)
        {
            this.ten = ten;
            this.email = email;
            this.password = password;

        }

        //constructor có đối số đăng nhập
        public TaiKhoan(string email, string password)
        {
            this.email = email;
            this.password = password;

        }
    }
}