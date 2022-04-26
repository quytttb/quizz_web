// Hiển thị danh sách câu hỏi
var listCauHoi = JSON.parse(localStorage.getItem('dsCauHoi'));

var node_row = document.getElementById('row');
var html = '';
var k = 0;

for (var i = 0; i < listCauHoi.length; i++) {

    html += `
        <div className="question-container">
        <h2>${listCauHoi[i].tieude}</h2>
        <ul className="simpleList">
            <li className="simpleListAnswer">
                <span className="fa fa-square-o"></span>
                <span className="simpleListText" onclick="kiemTra('${listCauHoi[i].luachon1}')">${listCauHoi[i].luachon1}</span>
            </li>
            <li className="simpleListAnswer">
                <span className="fa fa-square-o"></span>
                <span className="simpleListText" onclick="kiemTra('${listCauHoi[i].luachon2}')">${listCauHoi[i].luachon2}</span>
            </li>
            <li className="simpleListAnswer">
                <span className="fa fa-square-o"></span>
                <span className="simpleListText" onclick="kiemTra('${listCauHoi[i].luachon3}')">${listCauHoi[i].luachon3}</span>
            </li>
            <li className="simpleListAnswer">
                <span className="fa fa-square-o"></span>
                <span className="simpleListText" onclick="kiemTra('${listCauHoi[i].luachon4}')">${listCauHoi[i].luachon4}</span>
            </li>
        </ul>

        <div className="answerReveal">

            <div className="quizzAnswerC">
                <div className="answerHeader">
                    <h3 className="correctMessage"><i className="fa fa-check-circle "></i>Đúng! </h3>
                </div>
                <!--end answer header-->
                <div className="answerText">
                    <p id="bravo">Bạn trả lời rất chính xác!</p>
                </div>
                <!--end asnwerText-->
            </div>
            <!--end quizzAnswerC-->

            <div className="quizzAnswerF">
                <div className="answerHeader">
                    <h3 className="wrongMessage"><i className="fa fa-times-circle"></i>Sai</h3>
                </div>
                <!--end answer header-->
                <div className="answerText">
                    <p id="sorry">Rất tiếc câu trả lời của bạn không chính xác...</p>
                </div>
                <!--end asnwerText-->
            </div>
            <!--end quizzAnswerF-->
        </div>
        <!--end answerReveal-->
        <h4 id="stat"></h4>
    </div>
    <!--end question container-->
    `;

}

html += '';
node_row.innerHTML = html;

// Đồng hồ
var m = 60;
var time = m * 60;
var ct = document.getElementById('counter');
setInterval(clock, 1000);

function clock() {
    var min = Math.floor(time / 60);
    var sec = time % 60;
    sec = sec < 10 ? '0' + sec : sec;
    ct.innerHTML = "Thời gian" + ` ${min} : ${sec}`;
    if (min === 0 && sec === 0) {
        alert("Hết giờ !");
    }
    time--;
}
