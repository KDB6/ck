<?php
    include "../connect/connect.php";
    include "../connect/session.php";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시판 글 쓰기</title>

    <link rel="stylesheet" href="../asset/css/reset.css">
    <link rel="stylesheet" href="../asset/css/common.css">
    <link rel="stylesheet" href="../asset/css/font.css">
    
    <link rel="stylesheet" href="../asset/css/board/boardLoginBanner.css">
    <link rel="stylesheet" href="../asset/css/board/boardImageType.css">
    <link rel="stylesheet" href="../asset/css/board/boardWriteModify.css">
</head>

<!-- header -->
<?php include "../include/header.php"?>
<!-- //header -->

<body>

    <!-- boardLoginBanner -->
    <section id="boardLoginBanner" class="loginBanner">
        <h2 class="blind">loginBanner</h2>
        <div class="lB__inner">
            <figure class="MyprofileL">
                <img src="../asset/img/profile.png" alt="프로필">
                    <figcaption><?=$_SESSION['youName']?>님 어서오세요!</figcaption>
                <a href="../php/logout.php">LOGOUT</a>
            </figure>
            <div class="Myprofile">
                <ul>
                    <li>최근 접속 기록 : 00/ 00/ 00</li>
                    <li><a href="#">나의 정보</a></li>
                    <li><a href="#">나의 반려견</a></li>
                    <li>나의 글 : 00개</li>
                    <li>댓글 수 : 00개</li>
                </ul>
            </div>
        </div>
    </section>
    <!-- //boardLoginBanner -->

    <!-- boardImageType -->
    <section id="boardImageType" class="imageType">
        <div class="imageType__inner">
            <h2>COMMUNITY</h2>
            <p>좋은 글로 여러 정보를 나눠주세요!</p>
        </div>
    </section>
    <!-- //boardImageType -->

    <!-- boardWrite -->
    <section id="boardWrite">
        <div class="board__wrap container">
            <form action="boardWriteSave.php" name="boardWrite" method="post">
                <legend class="ir">게시판 영역입니다.</legend>
                <div class="border_titleBox">
                    <div class="titleBox">
                        <label for="boardTitle">제목 : </label>
                        <input type="text" name="boardTitle" id="boardTitle" maxlength="30" required>
                    </div>
                    <div class="border_titleCate">
                        <div class="selectBox">
                            <select name="boardCate" id="boardCate">
                                <option value="CATEGORY01">CATEGORY</option>
                                <option value="CATEGORY02">CATEGORY</option>
                                <option value="CATEGORY03">CATEGORY</option>
                            </select>
                        </div>
                        <div class="imgAttachBox">
                            <label for="boardImg">Image</label>
                            <input type="file" name="boardImg" id="boardImg" accept=".jpg, .jpeg, .png, .gif, .webp" placeholder="jpg, jpeg, png, gif, webp 파일만 첨부해주세요.">
                        </div>
                    </div>
                </div>
                <div class="board_writeBox">
                    <label for="boardContents" class="ir">내용</label>
                    <textarea name="boardContents" id="boardContents" placeholder="글을 작성해주세요." required></textarea>
                </div>
                <div class="board_btn">
                    <button type="submit" value="저장하기">작성 완료</button>
                    <span>|</span>
                    <span><a href="board.html">취소</a></span>
                </div>
            </form>

        </div>        
    </section>
    <!-- //boardWrite -->

</body>

<!-- footer -->
<?php include "../include/footer.php"?>
<!-- //footer -->

<script src="../asset/js/header_hamburger.js"></script>

</html>