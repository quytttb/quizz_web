using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BTL
{
    public partial class DangKy : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string email = Request.Form["input_Email"];
            string password = Request.Form["input_Password"];
            string name = Request.Form["input_Name"];
            
            
            TaiKhoan t = new TaiKhoan(email,name,password);
            List<TaiKhoan> arr = (List<TaiKhoan>)Application["t"];

          

            int k = 0;
           
            if(arr.Count == 0)
            {
                arr = new List<TaiKhoan>();
            }
            else
            {
                foreach(TaiKhoan tk in arr)
                {
                    if (tk.email == email)
                    {
                        Response.Write("Đã tồn tại Email !");
                        k = 1;
                    }
                }
            }
           if( k == 0)
           {
                arr.Add(t);
                Application["t"] = arr;
                Session["login"] = 1;
                Session["name"] = name;
                Session["email"] = email;
                Response.Write("Đăng Ký Tài Khoản Thành Công !");
                Response.Redirect("DangNhap.html");

            }
            

        }
    }
}