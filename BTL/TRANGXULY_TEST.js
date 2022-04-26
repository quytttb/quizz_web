//Kiểm tra khi trang được tải xong
$(document).ready(function(){
    //lấy tổng số câu hỏi
    const $questionNumber = $('h2').length;
    //tạo biến đếm tổng điểm
    let $totalScore = 0;

    $('li').click(function(){
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
        //Nếu đúng
        if($(this).hasClass('correct')){
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
            //tổng điểm +1
            $totalScore+=1;
            console.log($totalScore);
        }else{
            //thêm .wrongAnswer
            $(this).addClass('wrongAnswer').addClass('fade');
            //thay đổi icon
            $span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
            //làm mờ các thành phần li khác
            $(this).siblings().addClass('fade');
            //hiện thông báo sai
            $answerReveal = $parent.next('.answerReveal').show();
            $toShowCorrect = $answerReveal.find('.quizzAnswerC');
            $toShowFalse = $answerReveal.find('.quizzAnswerF');
            $toShowCorrect.remove();
            $toShowFalse.show();
            //hiện đáp án đúng
            $parent.find('.correct').addClass('correctAnswer');
        }
    });//kết thúc hàm nhấn vào lựa chọn

    //hiện thông báo kết quả
    function printResult(){
        let resultText = '<p>';
        if ($totalScore === $questionNumber){
            resultText+='Bạn đúng '+ $totalScore+ ' trên '+$questionNumber+' câu! </p>';
            $('.resultContainer').append(resultText);
            $('#halfText').append('<p>Rất tuyệt vời!</p>');
            $('#halfImage').append('<img src="https://placehold.it/350x150" width="100%"><img>');
        }else if($totalScore>=3 && $totalScore < $questionNumber){
            resultText+='Bạn đúng '+ $totalScore+ ' trên '+$questionNumber+' câu! </p>';
            $('.resultContainer').append(resultText);
            $('#halfText').append('<p>Chúc bạn may mắn lần sau</p>');
            $('#halfImage').append('<img src="https://placehold.it/350x150" width="100%"><img>');
        }else if ($totalScore<3){
            resultText+='Bạn đúng '+ $totalScore+ ' trên '+$questionNumber+' câu </p>';
            $('.resultContainer').append(resultText);
            $('#halfText').append('<p>Ôi không! Bạn cần cố gắng nhiều hơn</p>');
            $('#halfImage').append('<img src="https://placehold.it/350x150" width="100%"><img>');
        }

    };

    //Tổng điểm
    $('ul').last().click(function(){
        //vô hiệu hoá
        $(this).off('click');
        //Hiện điểm sau khi li cuối cùng được nhấn
        const $height = $('.finalResult').height();
        printResult();
        $('.finalResult').show();
        $('html, body').animate({
                scrollTop: $(document).height()-$height},
            1400);
    });

});




