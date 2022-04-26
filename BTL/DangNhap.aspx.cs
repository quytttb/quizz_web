using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BTL
{
    public partial class DangNhap : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string email = Request.Form["input_Email"];
            string password = Request.Form["input_Password"];

            TaiKhoan tt = new TaiKhoan(email,password);
            List<TaiKhoan> arr = (List<TaiKhoan>)Application["t"];

           
           
                int k = 0;


                if (arr.Count == 0)
                {
                    Response.Write("Tài khoản không tồn tại !");
                }
                else
                {

                    foreach (TaiKhoan t in arr)
                    {
                        if (t.email == email && t.password == password)
                        {
                            k = 1;
                            Session["login"] = 1;
                            Session["name"] = t.ten;
                            Session["email"] = t.email;
                            break;
                        }
                    }


                    if (k == 1)
                    {
                        Response.Redirect("TrangLamBaiThi.html");
                    }
                    else
                    {
                        Response.Write("Tài khoản hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại email và mật khẩu !");
                    }
                }

          
           
        }
    }
}