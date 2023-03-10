var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data() {
        return {
            win: 0,
            lose: 0,
            dialog: false
        }
    },
    mounted() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const ctx2 = canvas.getContext('2d');
        ctx.canvas.width = 1350;
        ctx.canvas.height = 700;
        console.log(ctx.canvas.width);
        console.log(ctx.canvas.height);
        var teclap = 0;
        var sprite = new Image();
        var csprite = new Image();
        csprite.src = "Zombie.png";
        var back = new Image();
        back.src = "Web.png";
        sprite.src = "a2.png";
        var indiceX = 0, indiceY = 0;
        var sprX = canvas.width / 2, sprY = canvas.height / 2;
        var cindiceX = 0, cindiceY = 0;
        var csprX = 0, csprY = 0;
        var start;
        var currentFrame = 0;
        var sheetWidth = 900;
        var sheetHeight = 405;
        var cols = 9;
        var rows = 4;
        var width = sheetWidth / cols;
        var height = sheetHeight / rows;
        var flagAux = false, flag = false;
        var flagAux2 = false, flag2 = false;
        var flagAux3 = false, flag3 = false;
        var flagAux4 = false, flag4 = false;
        var flagAux5 = false, flag5 = false;
        var flagAux6 = false, flag6 = false;
        var flagAux7 = false, flag7 = false;
        var flagAux8 = false, flag8 = false;
        var flagAux9 = false, flag9 = false;
        var flagAux10 = false, flag10 = false;
        var win = 0;
        var elem = document.getElementById("myBar");
        var width2 = 100;
        var id = setInterval(frame, 10);
        function frame() {
            if (width2 <= 0) {
                clearInterval(id);
                i = 0;
                elem.style.width = width2 + "%";
                elem.innerHTML = width2 + "%";
            } else {
                elem.style.width = width2 + "%";
                elem.innerHTML = width2 + "%";
            }
        }

        function updateFrame() {
            collisions();
            currentFrame = ++currentFrame % cols;
            indiceX = currentFrame * width;
            cindiceX = currentFrame * width;
            ctx.clearRect(sprX, sprY, width, height);
            ctx.clearRect(csprX, csprY, width, height);
        }

        function drawImage() {
            updateFrame();
            ctx.fillStyle = "red";
            ctx2.drawImage(back, 0, 0);
            ctx.drawImage(sprite, indiceX, indiceY * 100, width, height, sprX, sprY, 65, 65);
            ctx.drawImage(csprite, cindiceX, cindiceY * 100, width, height, csprX, csprY, 65, 65);

            document.onkeydown = function (e) {
                if (e == null)
                    teclap = window.e.keyCode;
                else {
                    teclap = e.keyCode;
                }
                switch (teclap) {
                    case 40: //s
                        sprY += 15;
                        indiceY = 2;
                        break;
                    case 37://a
                        sprX -= 15;
                        indiceY = 1;
                        break;
                    case 38://w
                        sprY -= 15;
                        indiceY = 0;
                        break;
                    case 39: //d
                        sprX += 15;
                        indiceY = 3;
                        break;
                    case 83: //s
                        csprY += 15;
                        cindiceY = 2;
                        break;
                    case 65://a
                        csprX -= 15;
                        cindiceY = 1;
                        break;
                    case 87://w
                        csprY -= 15;
                        cindiceY = 0;
                        break;
                    case 68: //d
                        csprX += 15;
                        cindiceY = 3;
                        break;
                    default:
                        break;
                }
            }
        }

        function drawObject1() { ctx.fillRect(200, 250, 20, 20); }
        function drawObject2() { ctx.fillRect(705, 75, 20, 20); }
        function drawObject3() { ctx.fillRect(270, 465, 20, 20); }
        function drawObject4() { ctx.fillRect(600, 420, 20, 20); }
        function drawObject5() { ctx.fillRect(465, 330, 20, 20); }
        function drawObject6() { ctx.fillRect(1005, 585, 20, 20); }
        function drawObject7() { ctx.fillRect(1155, 250, 20, 20); }
        function drawObject8() { ctx.fillRect(595, 255, 20, 20); }
        function drawObject9() { ctx.fillRect(610, 660, 20, 20); }
        function drawObject10() { ctx.fillRect(1050, 120, 20, 20); }

        setInterval(function () {
            drawImage();
            if (flag == false)
                drawObject1();
            if (flag == true && flagAux == false) { if (width2 <= 90) width2 += 10; flagAux = true; }
            if (flag2 == false)
                drawObject2();
            if (flag2 == true && flagAux2 == false) { if (width2 <= 90) width2 += 10; flagAux2 = true; }
            if (flag3 == false)
                drawObject3();
            if (flag3 == true && flagAux3 == false) { if (width2 <= 90) width2 += 10; flagAux3 = true; }
            if (flag4 == false)
                drawObject4();
            if (flag4 == true && flagAux4 == false) { if (width2 <= 90) width2 += 10; flagAux4 = true; }
            if (flag5 == false)
                drawObject5();
            if (flag5 == true && flagAux5 == false) { if (width2 <= 90) width2 += 10; flagAux5 = true; }
            if (flag6 == false)
                drawObject6();
            if (flag6 == true && flagAux6 == false) { if (width2 <= 90) width2 += 10; flagAux6 = true; }
            if (flag7 == false)
                drawObject7();
            if (flag7 == true && flagAux7 == false) { if (width2 <= 90) width2 += 10; flagAux7 = true; }
            if (flag8 == false)
                drawObject8();
            if (flag8 == true && flagAux8 == false) { if (width2 <= 90) width2 += 10; flagAux8 = true; }
            if (flag9 == false)
                drawObject9();
            if (flag9 == true && flagAux9 == false) { if (width2 <= 90) width2 += 10; flagAux9 = true; }
            if (flag10 == false)
                drawObject10();
            if (flag10 == true && flagAux10 == false) { if (width2 <= 90) width2 += 10; flagAux10 = true; }

        }, 75);

        function collisions() {
            if (flag == true && flag2 == true && flag3 == true && flag4 == true && flag5 == true && flag6 == true && flag7 == true && flag8 == true && flag9 == true && flag10 == true) {
                this.win = 1;
                this.dialog = true;
            }
            if (width2 == 0) {
                this.lose = 1;
                this.dialog = true;
            }            
            //OBJECT1
            if ((csprX - 15 == sprX && (csprY - 15 == sprY || csprY == sprY || csprY + 15 == sprY)))
                width2 -= 0.5;
            if ((csprX + 15 == sprX && (csprY + 15 == sprY || csprY == sprY || csprY - 15 == sprY)))
                width2 -= 0.5;
            if (csprY == sprY && csprX == sprX)
                width2 -= 0.5;

            if (sprX >= 165 && sprX <= 195 && sprY <= 240 && sprY >= 210) { flag = true; }
            //OBJECT2
            if ((sprX >= 675 && sprX <= 690 && sprY >= 30 && sprY <= 75)) { flag2 = true; }
            //OBJECT3
            if ((sprY >= 420 && sprY <= 450 && sprX == 255)) { flag3 = true }
            //OBJECT4
            if (sprY == 405 && sprX <= 585 && sprX >= 570) { flag4 = true }
            //OBJECT5
            if (sprX == 450 && sprY >= 285 && sprY <= 315) { flag5 = true; }
            //OBJECT6
            if (sprX >= 975 && sprX <= 990 && sprY >= 540 && sprY <= 570) { flag6 = true; }
            //OBJECT7
            if (sprX >= 1125 && sprX <= 1140 && sprY >= 210 && sprY <= 240) { flag7 = true; }
            //OBJECT8
            if (sprX >= 570 && sprX <= 585 && sprY >= 210 && sprY <= 240) { flag8 = true; }
            //OBJECT9
            if (sprX >= 570 && sprX <= 600 && sprY >= 610 && sprY <= 640) { flag9 = true; }
            //OBJECT10
            if (sprX >= 1020 && sprX <= 1035 && sprY >= 75 && sprY <= 90) { flag10 = true; }





            //border collisionsssss
            if (sprX > canvas.width - 60)
                sprX = canvas.width - 60;
            if (sprX < 0)
                sprX = 0;
            if (sprY > canvas.height - 60)
                sprY = canvas.height - 60;
            if (sprY < 0)
                sprY = 0;
            if (csprX > canvas.width - 60)
                csprX = canvas.width - 60;
            if (csprX < 0)
                csprX = 0;
            if (csprY > canvas.height - 60)
                csprY = canvas.height - 60;
            if (csprY < 0)
                csprY = 0;

            if ((csprX > 285 && csprX <= 315) && (csprY <= 170 && csprY >= 60))
                csprX = 315;
            if (csprX <= 30 && (csprY >= 60 && csprY <= 135))
                csprX = 30;
            if ((csprX > 255 && csprX < 286) && (csprY <= 135 && csprY > 60))
                csprX = 270;
            if ((csprX >= 30 && csprX <= 275) && (csprY >= 135 && csprY <= 150))
                csprY = 135
            if ((csprX <= 300 && csprX >= 0) && (csprY <= 195 && csprY >= 175))
                csprY = 195;

            if ((sprX > 285 && sprX <= 315) && (sprY <= 170 && sprY >= 60))
                sprX = 315;
            if (sprX <= 30 && (sprY >= 60 && sprY <= 135))
                sprX = 30;
            if ((sprX > 255 && sprX < 286) && (sprY <= 135 && sprY > 60))
                sprX = 270;
            if ((sprX >= 30 && sprX <= 275) && (sprY >= 135 && sprY <= 150))
                sprY = 135
            if ((sprX <= 300 && sprX >= 0) && (sprY <= 195 && sprY >= 175))
                sprY = 195;


            if ((sprX >= 405 && sprX <= 420) && (sprY >= 555 && sprY <= 570)) {
                sprX = 1215;
                sprY = 75;
                indiceY = 1
            }
            if ((sprX >= 165 && sprX <= 180) && (sprY < 555 && sprY >= 505))
                sprX = 165;
            if ((sprX >= 195 && sprX < 465) && (sprY >= 480 && sprY <= 505))
                sprY = 480;
            if ((sprX <= 477 && sprX >= 460) && (sprY >= 495 && sprY <= 600))
                sprX = 477;
            if ((sprX >= 195 && sprX <= 395) && (sprY >= 535 && sprY <= 570))
                sprY = 555;
            if ((sprX >= 195 && sprX <= 460) && (sprY <= 627 && sprY >= 597))
                sprY = 627;


            if ((csprX >= 390 && csprX <= 405) && (csprY >= 555 && csprY <= 570))
                csprX = 390
            if ((csprX >= 165 && csprX <= 180) && (csprY < 555 && csprY >= 505))
                csprX = 165;
            if ((csprX >= 195 && csprX < 465) && (csprY >= 480 && csprY <= 505))
                csprY = 480;
            if ((csprX <= 477 && csprX >= 460) && (csprY >= 495 && csprY <= 600))
                csprX = 477;
            if ((csprX >= 195 && csprX <= 395) && (csprY >= 535 && csprY <= 570))
                csprY = 555;
            if ((csprX >= 195 && csprX <= 460) && (csprY <= 627 && csprY >= 597))
                csprY = 627;


            if ((csprX >= 45 && csprX <= 240) && (csprY >= 255 && csprY <= 270))
                csprY = 255;
            if ((csprX >= 30 && csprX <= 45) && (csprY >= 270 && csprY <= 435))
                csprX = 30;
            if ((csprX >= 45 && csprX <= 240) && (csprY >= 450 && csprY <= 465))
                csprY = 465;
            if ((csprX >= 240 && csprX <= 255) && (csprY >= 270 && csprY <= 435))
                csprX = 255;

            if ((sprX >= 45 && sprX <= 240) && (sprY >= 255 && sprY <= 270))
                sprY = 255;
            if ((sprX >= 30 && sprX <= 45) && (sprY >= 270 && sprY <= 435))
                sprX = 30;
            if ((sprX >= 45 && sprX <= 240) && (sprY >= 450 && sprY <= 465))
                sprY = 465;
            if ((sprX >= 240 && sprX <= 255) && (sprY >= 270 && sprY <= 435))
                sprX = 255;

            if ((csprX >= 1095 && csprX <= 1245) && (csprY >= 420 && csprY <= 435))
                csprY = 420;
            if ((csprX >= 1080 && csprX <= 1095) && (csprY >= 435 && csprY <= 585))
                csprX = 1080;
            if ((csprX <= 1260 && csprX >= 1245) && (csprY >= 435 && csprY <= 585))
                csprX = 1260;
            if ((csprX >= 1095 && csprX <= 1245) && (csprY <= 615 && csprY >= 600))
                csprY = 615;

            if ((sprX >= 1095 && sprX <= 1245) && (sprY >= 420 && sprY <= 435))
                sprY = 420;
            if ((sprX >= 1080 && sprX <= 1095) && (sprY >= 435 && sprY <= 585))
                sprX = 1080;
            if ((sprX <= 1260 && sprX >= 1245) && (sprY >= 435 && sprY <= 585))
                sprX = 1260;
            if ((sprX >= 1095 && sprX <= 1245) && (sprY <= 615 && sprY >= 600))
                sprY = 615;

            if ((csprX >= 915 && csprX <= 935) && (csprY <= 15 && csprY >= 0))
                csprX = 915;
            if ((csprX >= 930 && csprX <= 1290) && (csprY <= 195 && csprY >= 180))
                csprY = 195;
            if ((csprX >= 930 && csprX <= 1230) && (csprY >= 135 && csprY <= 150))
                csprY = 135;
            if ((csprX >= 945 && csprX <= 1230) && (csprY <= 30 && csprY >= 15))
                csprY = 30;
            if ((csprX >= 1230 && csprX <= 1245) && (csprY >= 30 && csprY <= 135))
                csprX = 1230;

            if ((sprX >= 915 && sprX <= 935) && (sprY <= 15 && sprY >= 0))
                sprX = 915;
            if ((sprX >= 930 && sprX <= 1290) && (sprY <= 195 && sprY >= 180))
                sprY = 195;
            if ((sprX >= 930 && sprX <= 1230) && (sprY >= 135 && sprY <= 150))
                sprY = 135;
            if ((sprX >= 945 && sprX <= 1230) && (sprY <= 30 && sprY >= 15))
                sprY = 30;
            if ((sprX >= 1230 && sprX <= 1245) && (sprY >= 30 && sprY <= 135)) {
                sprX = 375;
                sprY = 555;
                indiceY = 1;
            }

            if ((csprX >= 525 && csprX <= 540) && (csprY >= 150 && csprY <= 165))
                csprY = 150;
            if ((csprX <= 555 && csprX >= 540) && (csprY >= 165 && csprY <= 255))
                csprX = 555;
            if ((csprX >= 555 && csprX <= 805) && (csprY >= 255 && csprY <= 270))
                csprY = 255;
            if ((csprX <= 810 && csprX >= 795) && (csprY >= 285 && csprY <= 480))
                csprX = 810;
            if ((csprX >= 405 && csprX <= 435) && (csprY >= 150 && csprY <= 165))
                csprY = 150;
            if ((csprX >= 390 && csprX <= 405) && (csprY >= 180 && csprY <= 390))
                csprX = 390;
            if ((csprX >= 420 && csprX <= 630) && (csprY <= 405 && csprY >= 390))
                csprY = 405;
            if ((csprX >= 630 && csprX <= 645) && (csprY >= 405 && csprY <= 480))
                csprX = 630;
            if ((csprX >= 660 && csprX <= 675) && (csprY <= 480 && csprY >= 465))
                csprY = 480;
            if ((csprX <= 450 && csprX >= 435) && (csprY >= 180 && csprY <= 345))
                csprX = 450;
            if ((csprX >= 450 && csprX <= 675) && (csprY >= 345 && csprY <= 360))
                csprY = 345;
            if ((csprX <= 690 && csprX >= 675) && (csprY >= 375 && csprY <= 480))
                csprX = 690;
            if ((csprX >= 510 && csprX <= 525) && (csprY <= 315 && csprY >= 180))
                csprX = 510;
            if ((csprX >= 540 && csprX <= 765) && (csprY <= 330 && csprY >= 315))
                csprY = 330;
            if ((csprX >= 765 && csprX <= 780) && (csprY >= 330 && csprY <= 480))
                csprX = 765;


            if ((sprX >= 525 && sprX <= 540) && (sprY >= 150 && sprY <= 165))
                sprY = 150;
            if ((sprX <= 555 && sprX >= 540) && (sprY >= 165 && sprY <= 255))
                sprX = 555;
            if ((sprX >= 555 && sprX <= 805) && (sprY >= 255 && sprY <= 270))
                sprY = 255;
            if ((sprX <= 810 && sprX >= 795) && (sprY >= 285 && sprY <= 480))
                sprX = 810;
            if ((sprX >= 405 && sprX <= 435) && (sprY >= 150 && sprY <= 165))
                sprY = 150;
            if ((sprX >= 390 && sprX <= 405) && (sprY >= 180 && sprY <= 390))
                sprX = 390;
            if ((sprX >= 420 && sprX <= 630) && (sprY <= 405 && sprY >= 390))
                sprY = 405;
            if ((sprX >= 630 && sprX <= 645) && (sprY >= 405 && sprY <= 480))
                sprX = 630;
            if ((sprX >= 660 && sprX <= 675) && (sprY <= 480 && sprY >= 465))
                sprY = 480;
            if ((sprX <= 450 && sprX >= 435) && (sprY >= 180 && sprY <= 345))
                sprX = 450;
            if ((sprX >= 450 && sprX <= 675) && (sprY >= 345 && sprY <= 360))
                sprY = 345;
            if ((sprX <= 690 && sprX >= 675) && (sprY >= 375 && sprY <= 480))
                sprX = 690;
            if ((sprX >= 510 && sprX <= 525) && (sprY <= 315 && sprY >= 180))
                sprX = 510;
            if ((sprX >= 540 && sprX <= 765) && (sprY <= 330 && sprY >= 315))
                sprY = 330;
            if ((sprX >= 765 && sprX <= 780) && (sprY >= 330 && sprY <= 480))
                sprX = 765;
        }
        function startChronometer(display) {
            var seconds = 0, minutes, hours;
            setInterval(function () {
              minutes = parseInt(seconds / 60, 10)
              hours = parseInt(minutes / 60, 10);
              minutes = minutes % 60;
              seconds = seconds % 60;
        
              hours = hours < 10 ? "0" + hours : hours;
              minutes = minutes < 10 ? "0" + minutes : minutes;
              seconds = seconds < 10 ? "0" + seconds : seconds;
        
              display.textContent = hours + ":" + minutes + ":" + seconds;
              seconds++;
            }, 1000);
          }
        
          window.onload = function () {
            var display = document.querySelector('#crono');
            startChronometer(display);
          };
    }
});