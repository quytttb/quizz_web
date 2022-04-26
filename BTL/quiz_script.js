// // Ngân Hàng Câu Hỏi
// var questionBank = [
//     {
//         question : 'Năm sinh và năm mất của C.Mác?',
//         option : ['1815 - 1880','1816 - 1881','1817 - 1882','1818 - 1883'],
//         answer : '1818 - 1883'
//     },
//     {
//         question : 'Năm sinh và năm mất của Ph.Ăngghen?',
//         option : ['1819 - 1894','1822 - 1897','1821 - 1896','1820 - 1895'],
//         answer : '1820 - 1895'
//     },
//     {
//         question : 'Năm sinh và năm mất của V.I.Lênin?',
//         option : ['1872 - 1926','1876 - 1934','1874 - 1928','1870 - 1924'],
//         answer : '1870 - 1924'
//     },
//     {
//         question : 'C.Mác và Ph.Ăngghen sinh ra ở đâu?',
//         option : ['Anh','Phổ (Đức)','Bỉ','Pháp'],
//         answer : 'Phổ (Đức)'
//     },
//     {
//         question : 'Thuật ngữ Triết học ra đời vào khoảng thời gian nào?',
//         option : ['Thế kỷ VII - đầu thế kỷ VIII trước Công nguyên','Thế kỷ VIII - đầu thế kỷ V trước Công nguyên','Thế kỷ IX - đầu thế kỷ VIII trước Công nguyên','Thế kỷ VIII - đầu thế kỷ VI trước Công nguyên'],
//         answer : 'Thế kỷ VIII - đầu thế kỷ VI trước Công nguyên'
//     },
//     {
//         question : 'Quá trình hình thành và phát triển của Triết học Mác được chia thành mấy thời kỳ?',
//         option : ['Một thời kỳ','Hai thời kỳ','Ba thời kỳ','Bốn thời kỳ'],
//         answer : 'Hai thời kỳ'
//     },
//     {
//         question : '“Triết học” là thuật ngữ được sử dụng lần đầu tiên trong trường phái nào?',
//         option : ['Hêraclit','Pltatôn','Cantơ','Xôcrát'],
//         answer : 'Xôcrát'
//     },
//     {
//         question : 'Những điều kiện lịch sử của sự ra đời Triết học Mác - Lênin?',
//         option : ['Điều kiện  kinh tế - xã hội','Nguồn gốc lý luận và tiền đề khoa học tự nhiên','Nhân tố chủ quan trong sự hình thành triết học Mác','Tất cả A, B, C đều đúng'],
//         answer : 'Tất cả A, B, C đều đúng'
//     }
//     // {
//     //     question : '',
//     //     option : ['','','',''],
//     //     answer : ''
//     // },
// ]

// OBJECT câu hỏi gồm 6 thuộc tính
function objQuestion(tieude, luachon1, luachon2, luachon3, luachon4, dapan) {
    var question = {};
    question.tieude = tieude;
    question.luachon1 = luachon1;
    question.luachon2 = luachon2;
    question.luachon3 = luachon3;
    question.luachon4 = luachon4;
    question.dapan = dapan;
    return question;
}

// Hàm lấy danh sách câu hỏi ở localStorage chuyển thành đối tượng và đổ vào ARRAY()
function get_dsCauHoi() {
    var ds_CauHoi = [];
    var json_ds_CauHoi = localStorage.getItem('dsCauHoi');
    if (json_ds_CauHoi != null) {
        ds_CauHoi = JSON.parse(json_ds_CauHoi);
    }
    return ds_CauHoi;
}

// Hàm chuyển đối tượng thành chuỗi JSON và truyền vào localStorage
/*
function save_to_LocalStorage(ds_CauHoi) {
    // Chuyển thành chuỗi JSON 
    var json_ds_CauHoi = JSON.stringify(ds_CauHoi);

    // Lưu vào localStorage
    localStorage.setItem('dsCauHoi', json_ds_CauHoi);

}
*/

/*
// Hàm kiểm tra
var diem = 0;
function kiemTraFAKE(e) {
    var listCauHoi = get_dsCauHoi();    
    console.log("Bạn chọn : "+e);

        for(var i = 0 ; i <listCauHoi.length ; i++) {
            //so sánh 2 chuỗi lựa chọn và đáp án
            if(listCauHoi[i].dapan.localeCompare(e) === 0 ){
                diem++;
                document.getElementById('score').innerHTML = "Điểm : " + diem;                
            }

        }
}
*/

//lấy tổng số câu hỏi
const $questionNumber = $('h2').length;
//tạo biến đếm tổng điểm
let $totalScore = 0;

function kiemTra(e) {
    let $listCauHoi = get_dsCauHoi();
    console.log("Bạn chọn : "+e);

    let $toShowFalse;
    let $toShowCorrect;
    let $answerReveal;
    //tạo biến parent để lấy lấy thành phần cha của tất cả các thành phần li
    const $parent = $(this).parent();
    //tạo biến để lấy thành phần span của tất cả các thành phần li
    const $span = $(this).find('.fa');
    //vô hiệu hoá các thành phần li sau khi được click
    $parent.find('li').off("click");
    //kiểm tra kết quả của câu hỏi
    for(let i = 0 ; i <$listCauHoi.length ; i++) {
        //so sánh 2 chuỗi lựa chọn và đáp án
        if(listCauHoi[i].dapan.localeCompare(e) === 0 ){
            //thêm .correctAnswer vào thành phần li
            $(this).addClass('correctAnswer');
            //tìm span của thành phần li và thêm .fa-check vào span (thay đổi icon)
            $span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
            //làm mờ các thành phần li khác
            $(this).siblings().addClass('fade');
            //hiện thông báo đúng
            $answerReveal = $parent.next('.answerReveal').show();
            $toShowCorrect = $answerReveal.find('.quizzAnswerC');
            $toShowFalse = $answerReveal.find('.quizzAnswerF');
            $toShowCorrect.show();
            $toShowFalse.remove();
            //tăng điểm
            $totalScore++;
            $('#score').html("Điểm : " + $totalScore);
        }
        else{
            //thêm .wrongAnswer vào thành phần li
            $(this).addClass('wrongAnswer').addClass('fade');
            //tìm span của thành phần li và thêm .fa-times vào span (thay đổi icon)
            $span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
            //làm mờ các thành phần li khác
            $(this).siblings().addClass('fade');
            //hiện thông báo sai
            $answerReveal = $parent.next('.answerReveal').show();
            $toShowCorrect = $answerReveal.find('.quizzAnswerC');
            $toShowFalse = $answerReveal.find('.quizzAnswerF');
            $toShowFalse.show();
            $toShowCorrect.remove();
            //hiện đáp án đúng
            $parent.find('.correct').addClass('correctAnswer');
        }

    }

}

//Tổng điểm
$('ul').last().click(function(){
    //Hiện điểm sau khi li cuối cùng được nhấn
    alert("Bạn đã hoàn thành bài thi. Tổng điểm của bạn là : " + $totalScore + " trên " + $questionNumber);
});




